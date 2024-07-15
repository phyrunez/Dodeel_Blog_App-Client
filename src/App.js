import { Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast"
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage'
import SigninPage from './pages/signin/SigninPage'
import AboutUsPage from './pages/about/AboutUsPage'
import ContactUsPage from './pages/contactUs/ContactUsPage'
import SignUpPage from './pages/signin/SignUpPage';
import PostDetailPage from "./pages/postDetail/PostDetailPage"
import NotFoundPage from './pages/not-found/NotFoundPage';
import AddNewPost from './pages/admin/screens/new-post/AddNewPost'
import Admin from "./pages/admin/screens/Admin"
import Comments from "./pages/admin/screens/Comments"
import ManagePost from "./pages/admin/screens/ManagePost"
import AdminLayout from "./pages/admin/AdminLayout"
// import Messages from './pages/admin/screens/Messages';
import AllUsers from './pages/admin/screens/AllUsers'

function App() {
  return (
    <div className="App font-poppins">
      <ScrollToTop />
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/blog/:slug' element={<PostDetailPage />} />
        <Route path='/login' element={<SigninPage />} />
        <Route path='/register' element={<SignUpPage />} />
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path='comments' element={<Comments />} />
          <Route path='posts/add-post' element={<AddNewPost />} />
          <Route path='posts/manage' element={<ManagePost />} />
          <Route path='allUsers' element={<AllUsers />} />
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
