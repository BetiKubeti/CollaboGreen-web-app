import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import AboutPage from "./pages/AboutPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App
