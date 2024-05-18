import { Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast"
import './App.css';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage'
import SigninPage from './pages/signin/SigninPage'
import AboutUsPage from './pages/about/AboutUsPage'
import ContactUsPage from './pages/contactUs/ContactUsPage'
import SignUpPage from './pages/signin/SignUpPage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import AddNewPost from './pages/admin/screens/new-post/AddNewPost'
import Admin from "./pages/admin/screens/Admin"
import Comments from "./pages/admin/screens/Comments"
import ManagePost from "./pages/admin/screens/ManagePost"
import AdminLayout from "./pages/admin/AdminLayout"

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/login' element={<SigninPage />} />
        <Route path='/register' element={<SignUpPage />} />
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path='comments' element={<Comments />} />
          <Route path='posts/add-post' element={<AddNewPost />} />
          <Route path='posts/manage' element={<ManagePost />} />
        </Route>
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
