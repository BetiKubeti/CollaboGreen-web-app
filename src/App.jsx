import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import '../src/App.jsx'
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage.jsx";
import RegistrationPage from './pages/RegistrationPage';
import RegistrationForm from './components/RegistrationForm.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App
