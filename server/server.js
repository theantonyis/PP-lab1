const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Підключення до MongoDB
mongoose
    .connect(URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Database connection error:', err));

// Маршрути
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/items');

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

// Запуск сервера
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
