import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { Route, Routes } from 'react-router-dom';
import AppSidebar from './components/AppSidebar';
import HomePage from './pages/HomePage';
import BarPage from './pages/BarPage';


function App() {

  return (
    <div className="App">
      <AppSidebar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/bar' element={<BarPage />}/>
      </Routes>
    </div>
  );
}

export default App;
