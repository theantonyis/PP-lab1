import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ItemsPage from './pages/ItemsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/items" element={<ItemsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
