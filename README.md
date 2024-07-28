# CosmoChat-UI

## Overview:
CosmoChat UI is a full-stack application that allowing users to chat sessions with an AI chatbot powered by OpenAI's language model. 

## Technologies and Tools used:
* React.js
* Material UI
* Axios
* OpenAI
* Firebase - Authentication, Cloud firestore, Functions

## Setup Instructions:

1. **Clone the repository to your local machine**.
    - To clone run: 
      ```
      git clone https://github.com/Pauullamm/cosmochatui.git
      ```

2. **Ensure you have Node.js and npm installed:**
    - Download and install [Node.js](https://nodejs.org/en) if you haven't already.

3. **Navigate to the root directory of the project**: 
      ```
      cd cosmochatui
      ```

4. **Install Dependencies**:
    - To install required dependencies, run: 
      ```
      npm install
      ```

5. **Add your OpenAI API key**:
    - Get your OpenAI API key from [OpenAI](https://platform.openai.com/api-keys)
    - Create a .env file in the root directory of the project.
    - Add the following line to the .env file, replacing {YOUR_API_KEY} with your actual API key:
        ```
        REACT_APP_OPENAI_API_KEY={YOUR_API_KEY}
        ```
6. **Set up Firebase authentication, cloud firestore, and functions**:
   - See https://firebase.google.com/docs/ for more information on setting up a firebase project, setting up cloud firestore and deploying functions
   
7. **Start Application**:
      ```
      npm start
      ```
