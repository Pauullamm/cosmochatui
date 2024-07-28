import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BarPage from './pages/BarPage';
import StartPage from './pages/StartPage';

function App() {
  
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<StartPage />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/bar' element={<BarPage />}/>
      </Routes>
    </div>
  );
}

export default App;
