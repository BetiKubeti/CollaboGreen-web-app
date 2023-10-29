import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import '../src/App.jsx'
import Nav from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import RegistrationPage from './pages/RegistrationPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App
