import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import MainPage from './pages';
import ContactPage from './pages/contact';
import ErrorPage from './pages/error';


const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App
