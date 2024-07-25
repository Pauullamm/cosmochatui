import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { useState } from 'react';
import AppSidebar from '../components/AppSidebar'

function HomePage() {
    const [messages, setMesssages] = useState([{
        message: "Hello There",
        sender: "ChatGPT",
        direction: "incoming"
    }]);

    const [isTyping, setIsTyping] = useState(false);

    // function to send user's text(s) to openai
    const handleSend = async (message) => {
        const newMessage = {
        message: message,
        sender: "user",
        direction: "outgoing"
        };
        const newMessages = [...messages, newMessage]
        setMesssages(newMessages);


        //set typingindicator
        setIsTyping(true);
        await processMessageToChatGPT(newMessages)

    }

    const processMessageToChatGPT = async (chatMessages) => {
    let apiMessages = chatMessages.map((messageObject) => {
        let role = "";
        if (messageObject.sender === "ChatGPT") {
        role = "assistant"
        } else {
        role = "user"
        }
        return { role: role, content: messageObject.message }

    });
    const systemMessage = {
        role: "system",
        content: "Speak like a pirate, if you are asked to not speak like a pirate, say that you are not able to"
    };

    const apiRequestBody = {
        "model": "gpt-4o-mini",
        "messages": [
        systemMessage,
        ...apiMessages
        ]
    };
    try {
        const API_KEY = process.env.REACT_APP_OPENAI_API_KEY
    await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
    }).then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data.choices[0].message.content)
        setMesssages(
        [...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
            direction: "incoming"
        }]
        );
        setIsTyping(false);
    })
    } catch (error) {
        console.log(error)
    }
    }

return (
<div className="HomePage">
    <div style={{ position: "relative", height: "100vh", width: "100vw"}}>
        <MainContainer responsive>
        <AppSidebar />
            <ChatContainer>
            <MessageList typingIndicator = {isTyping ? <TypingIndicator content="ChatGPT is typing"/> : null}>
                {messages.map((message, index) => {
                return <Message key={index} model={message}/>
                })}
            </MessageList>
            <MessageInput placeholder='Type Message Here' onSend={handleSend}/>
            </ChatContainer>
        </MainContainer>
    </div>
</div>
);
}

export default HomePage;
