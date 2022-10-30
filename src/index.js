import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop.js"
import Layout from './components/Layout'
import Forms from './components/Forms'
import About from './components/About'
import Contact from './components/Contact'
import NoPage from './components/NoPage'
import Home from './components/Home'
import './styles/style.css'
import './styles/style-mobile.css'


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="forms" element={<Forms />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);     