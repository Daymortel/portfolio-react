import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { Contact } from './pages/contact';

import './styles/style.css'
import './styles/query.css'

const root = document.querySelector('#root');
const app = createRoot(root);

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

app.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)