import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter.tsx";
import UserForm from "./components/UserForm.tsx";
import RichTextEditor from "./components/RichTextEditor.tsx";
import Dashboard from "./components/Dashboard.tsx";
import Home from "./pages/Home.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Navbar from "./components/Navbar.tsx";


const App: React.FC = () => {
  return (
    <Router>
      
      <div>
      <Routes>
        <Route path="/home" element={<><Navbar /> <Home /></>} />
        <Route path="/counter" element={<><Navbar /><Counter /></>} />
        <Route path="/form" element={<><Navbar /><UserForm /></>} />
        <Route path="/editor" element={<><Navbar /><RichTextEditor /></>} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
