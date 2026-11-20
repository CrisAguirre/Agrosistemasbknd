const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware — CORS permisivo para Vercel y desarrollo local con credenciales
const allowedOrigins = [
  'https://pensamiento-sistemico-agrosistemas.vercel.app',
  process.env.FRONTEND_URL,
  'http://localhost:4200'
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Permite requests sin origen (curl, postman) o cualquier origen de Vercel/localhost
    if (!origin || allowedOrigins.indexOf(origin) !== -1 || origin.endsWith('.vercel.app') || origin.includes('localhost')) {
      return callback(null, true);
    }
    // Permite por defecto para evitar bloqueos
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token']
}));
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/progress', require('./routes/progressRoutes'));
app.use('/api/evidencias', require('./routes/evidenciaRoutes'));
app.use('/api/exams', require('./routes/examRoutes'));
app.use('/api/analisis', require('./routes/analisisRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
