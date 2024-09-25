import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import PrivateRoute from "./pages/components/PrivateRoute";
import AdminPrivateRoute from "./pages/components/AdminPrivateRoute";
import { CreatePost } from "./pages/CreatePost";
import { UpdatePost } from "./pages/UpdatePost";
import {PostPage} from "./pages/PostPage";
import ScrollToTop from "./pages/components/ScrollToTop";
import { Home } from "./pages/Home";
import Search from "./pages/Search";
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
        <Route path = '/search' element = {<Search/>}/>
        <Route element = {<PrivateRoute/>}>

        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<AdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost/>} />
          <Route path='/update-post/:postId' element={<UpdatePost/>} />
         
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
