import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import MainPage from './pages';
import TestPage from './pages/test';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App
