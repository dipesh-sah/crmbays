import React, { useEffect } from "react";
import "./assests/scss/style.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./templates/pages/Homepage";
import Blog from "./templates/pages/Blog";
import Pages from "./templates/pages/Pages";
import Error404 from "./templates/pages/Error404";
import Contact from "./templates/pages/Contact";
import Author from "./templates/pages/Author";
import BlogDetail from "./templates/pages/BlogDetails";
import NavBar from "./templates/components/common/NavBar";
import Footer from "./templates/components/common/Footer";
import PostByCategory from "./templates/pages/PostByCategory";
import PostByTag from "./templates/pages/PostByTag";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path={"/"} element={<Homepage />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/author/:authorname" element={<Author />} />
        <Route path="/category/:category" element={<PostByCategory />} />
        <Route path={"/tag/:tagname"} element={<PostByTag />} />
        <Route path="/:param" element={<Pages />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
