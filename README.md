# Agrosistemasbknd — Backend API REST

Servidor backend para la plataforma educativa **Agrosistemas**.

## Stack Tecnológico
- **Node.js & Express**
- **MongoDB Atlas**
- **Mongoose 8**
- **JWT & Bcryptjs**
- **Multer & Cloudinary**

## Conexión a Base de Datos
Configurada en `.env`:
```
MONGODB_URI=mongodb+srv://Cris87:MorgothTheLord88@cluster0.r79rn7k.mongodb.net/agrosistemas?appName=Cluster0
```

## Colecciones Utilizadas
- `users`: Usuarios y autenticación (roles: estudiante, profesor, administrador).
- `agrosistemas`: Progreso de las simulaciones y actividades didácticas.
- `evidencias_agro`: Evidencias de texto y archivos multimedia subidos.
- `exams_agro`: Registro de intentos y calificaciones de evaluaciones.
- `analisis_agro`: Métricas cualitativas y cuantitativas de analítica de aprendizaje.

## Ejecución
```bash
npm install
npm start
# O en modo desarrollo con nodemon:
npm run dev
```

## Poblar Usuarios Iniciales
```bash
node seedUsers.js
node seedEstudiantes.js
```
