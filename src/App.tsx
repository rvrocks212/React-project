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
      <Navbar />
      <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/editor" element={<RichTextEditor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
