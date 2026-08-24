import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Resources from "../pages/Resources";
import Upload from "../pages/Upload";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

import ResourceDetails from "../pages/ResourceDetails"; 

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources/:id" element={<ResourceDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;