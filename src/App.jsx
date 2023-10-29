import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import '../src/App.jsx'
import ReactDOM from 'react-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import Nav from "./components/Nav";
import HomePage from "./pages/HomePage.jsx";
import RegistrationPage from './pages/RegistrationPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<RegistrationPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App
library.add(fab, fas, far)