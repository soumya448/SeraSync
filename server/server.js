const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(cors());
// app.use(fileUpload());
// app.use(express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// app.use('/api/school', schoolRoutes);
// app.use('/api/student',studentRoutes);
// app.use('/api/teacher', teacherRoutes);
// app.use('/api/subject', subjectRoutes);
// app.use('/api/map', mapRoutes);
// app.use('/api/icon', iconRoutes);
// app.use(fileUpload({
//   limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max file size
//   abortOnLimit: true,
//   responseOnLimit: "File size limit has been reached",
// }));



// 404 Handler for unknown routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Global Error:', err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

// Sync Database and Start Server
sequelize
  .sync({ force: false }) // set to true only if you want to reset DB
  .then(() => {
    console.log('Database connected and synchronized.');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
