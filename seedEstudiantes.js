require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Evidencia = require('./models/Evidencia');
const Exam = require('./models/Exam');

// ═══════════════════════════════════════════════════════════
// Estudiantes a registrar - Grado Sexto
// ═══════════════════════════════════════════════════════════
const estudiantes = [
  { name: 'Aurelio Pisso Villaquirán', email: 'aurelio.pisso@agrosistemas.edu', password: 'Aurelio2026*' },
  { name: 'Kevin Martinez Castaño', email: 'kevin.martinez@agrosistemas.edu', password: 'Kevin2026*' },
  { name: 'Zuleima Lorena Callejas Pulgarín', email: 'zuleima.callejas@agrosistemas.edu', password: 'Zuleima2026*' },
  { name: 'Alejandro Ardila Muñoz', email: 'alejandro.ardila@agrosistemas.edu', password: 'Alejandro2026*' },
  { name: 'Wilder Alexis Borja Gómez', email: 'wilder.borja@agrosistemas.edu', password: 'Wilder2026*' },
  { name: 'Samuel Estrada Álvarez', email: 'samuel.estrada@agrosistemas.edu', password: 'Samuel2026*' },
  { name: 'Valentina Calle Gómez', email: 'valentina.calle@agrosistemas.edu', password: 'Valentina2026*' },
  { name: 'Karen Manuela Osorio Ríos', email: 'karen.osorio@agrosistemas.edu', password: 'Karen2026*' },
  { name: 'Kimberly Sofía Osorio Ríos', email: 'kimberly.osorio@agrosistemas.edu', password: 'Kimberly2026*' },
  { name: 'José Daniel Zea Chaverra', email: 'jose.zea@agrosistemas.edu', password: 'Jose2026*' },
  { name: 'Yulissa Callejas Rojas', email: 'yulissa.callejas@agrosistemas.edu', password: 'Yulissa2026*' },
  { name: 'Jason Alexis Restrepo Bórquez', email: 'jason.restrepo@agrosistemas.edu', password: 'Jason2026*' },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const seedEstudiantes = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB Agrosistemas...\n');

    console.log('══════════════════════════════════════════');
    console.log('  REGISTRO DE ESTUDIANTES DE GRADO SEXTO');
    console.log('══════════════════════════════════════════');

    const createdUsers = [];

    for (const est of estudiantes) {
      const exists = await User.findOne({ email: est.email });
      if (exists) {
        console.log(`  ⚠️  Ya existe: ${est.name} (${est.email})`);
        createdUsers.push(exists);
        continue;
      }

      const user = await User.create({
        name: est.name,
        email: est.email,
        password: est.password,
        role: 'estudiante'
      });

      createdUsers.push(user);
      console.log(`  ✅ Creado: ${user.name} | ${user.email} | Contraseña: ${est.password}`);
    }

    console.log(`\n  📊 Total estudiantes registrados/encontrados: ${createdUsers.length}\n`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

seedEstudiantes();
