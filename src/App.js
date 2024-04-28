import { Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast"
import './App.css';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage'
import SigninPage from './pages/signin/SigninPage'
import AboutUsPage from './pages/about/AboutUsPage'
import ContactUsPage from './pages/contactUs/ContactUsPage'
import SignUpPage from './pages/signin/SignUpPage';

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/login' element={<SigninPage />} />
        <Route path='/register' element={<SignUpPage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
