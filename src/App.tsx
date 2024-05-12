import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import MainPage from './pages';
import TestPage from './pages/contact';
import ContactPage from './pages/contact';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App
