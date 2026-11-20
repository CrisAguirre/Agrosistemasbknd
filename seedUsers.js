require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a la base de datos MongoDB...');

    // Eliminar todos los usuarios existentes
    await User.deleteMany({});
    console.log('Usuarios anteriores eliminados.');

    try {
      await User.collection.dropIndexes();
      await User.syncIndexes();
      console.log('Índices sincronizados.');
    } catch (e) {
      console.log('Error sincronizando índices:', e);
    }

    const users = [
      {
        name: 'Administrador',
        email: 'krontroth@gmail.com',
        password: '987987987',
        role: 'administrador'
      },
      {
        name: 'Profesor',
        email: 'docente@mail.com',
        password: '1234567890',
        role: 'profesor'
      },
      {
        name: 'Aurelio Pisso Villaquirán',
        email: 'aurelio.pisso@agrosistemas.edu',
        password: 'Aurelio2026*',
        role: 'estudiante'
      },
      {
        name: 'Estudiante Agrosistemas',
        email: 'agrosistemas@mail.com',
        password: '1234567',
        role: 'estudiante'
      }
    ];

    for (const u of users) {
      await User.create(u);
      console.log(`Usuario creado: ${u.name} (${u.email}) [${u.role}]`);
    }
    
    console.log('Usuarios de Agrosistemas creados con éxito.');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

seedData();
