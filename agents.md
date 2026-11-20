# AGENTS.md — Análisis y Especificación del Proyecto Agrosistemas

## 1. Resumen Ejecutivo y Marco de Investigación

Este proyecto implementa la estrategia pedagógica **"Agroecología y Pensamiento Sistémico apoyada en DSSAT como simulador digital de cultivos"**, orientada al fortalecimiento de las habilidades de pensamiento sistémico en estudiantes de **grado sexto** de educación básica secundaria.

> **Cita Institucional:**
> *"La implementación de la estrategia pedagógica Agroecología y Pensamiento Sistémico apoyada en DSSAT como simulador digital de cultivos se orientó a fortalecer las habilidades de pensamiento sistémico en estudiantes de sexto. Esta estrategia se desarrolló en tres actividades orientadas al análisis, síntesis e implementación del sistema. Cada una de estas implicó los momentos de inicio, que consistió en un proceso introductorio; seguido de uno de desarrollo, donde los estudiantes realizaron simulaciones; y uno final donde se fomentó la reflexión... Fortalecimiento de las Habilidades de Pensamiento Sistémico en Estudiantes del Grado Sexto Mediante Simuladores Educativos. Estudiante Aurelio Pisso Villaquirán."*

---

## 2. Estructura Didáctica de la Estrategia

La estrategia pedagógica se estructura en torno a **tres actividades centrales** articuladas por **tres momentos didácticos**:

```
                              ┌───────────────────────────────────┐
                              │     Bloque 0: Introducción        │
                              │   (Pensamiento Sistémico Base)    │
                              └─────────────────┬─────────────────┘
                                                │
                 ┌──────────────────────────────┼──────────────────────────────┐
                 ▼                              ▼                              ▼
      ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
      │     Actividad 1      │      │     Actividad 2      │      │     Actividad 3      │
      │  ANÁLISIS DEL SISTEMA│      │ SÍNTESIS DEL SISTEMA │      │ IMPLEMENTACIÓN Y     │
      │                      │      │                      │      │ RESILIENCIA          │
      │ (Factores Cultivo)   │      │ (Escalas Productivas)│      │ (Resiliencia Agro)   │
      └──────────────────────┘      └──────────────────────┘      └──────────────────────┘
```

### 2.1. Las Tres Actividades
1. **Actividad 1 — Análisis del Sistema (Simulador de Factores del Cultivo):**
   - Identificación de los componentes bióticos (planta de cultivo, plagas, fitopatógenos) y abióticos (temperatura, radiación solar, humedad del suelo, fertilización N-P-K).
   - Relaciones de causalidad directa e indirecta (estrés hídrico, estrés térmico, ley del mínimo de Liebig).
2. **Actividad 2 — Síntesis del Sistema (Simulador de Escalas Productivas):**
   - Integración de variables a diferentes escalas de producción (maceta doméstica de 1 m², huerta escolar de 100 m², parcela agrícola de 10,000 m² = 1 ha).
   - Modelado de rendimientos decrecientes, eficiencia en el uso del agua según métodos de riego (goteo 90%, aspersión 75%, gravedad 50%) y balances de costo-beneficio.
3. **Actividad 3 — Implementación y Estabilidad (Simulador de Resiliencia Agrícola):**
   - Toma de decisiones y gestión adaptativa ante escenarios de perturbación ambiental extrema (sequías severas, invasión de plagas, inundaciones, heladas).
   - Detección de puntos de inflexión (*tipping points*) y umbrales de colapso ecosistémico.

### 2.2. Los Tres Momentos Didácticos
Cada una de las actividades se desarrolla en tres momentos formativos:
* **Momento de Inicio (Introductorio):** Sensibilización conceptual, proyección audiovisual, analogías con sistemas cotidianos (sistema solar, red eléctrica, transporte urbano) y lluvia de ideas inicial.
* **Momento de Desarrollo (Simulación):** Experimentación interactiva con el motor matemático y visual basado en principios biofísicos de modelos agronómicos (DSSAT / FAO-56), manipulación de variables independientes y observación de variables dependientes e indicadores en tiempo real.
* **Momento Final (Reflexión y Cierre):** Preguntas orientadoras de metacognición, registro de evidencias cualitativas/cuantitativas en la plataforma, y evaluación formativa cronometrada de 25 ítems con retroalimentación inmediata.

---

## 3. Delimitación y Alcance: Exclusión del Bloque 1

Por definición del diseño instruccional enfocado exclusivamente en **Agrosistemas y DSSAT**, se **ha omitido en su totalidad el Bloque 1** del referente base ("Ciclo del Agua"):
- ❌ **Simulador 1:** Evaporación (omitido)
- ❌ **Simulador 2:** Condensación (omitido)
- ❌ **Simulador 3:** Precipitación (omitido)
- ❌ **Simulador 4:** Infiltración y Escorrentía (omitido)
- ❌ **Simulador 5:** Ciclo Consolidado 3D (omitido)

### Módulos Activos en Agrosistemas:
- ✅ **Bloque 0:** Introducción al Pensamiento Sistémico (`/laboratorio/introduccion`)
- ✅ **Bloque 2:** Agroecosistemas:
  - Simulación 6: Factores del Cultivo (`/laboratorio/factores-cultivo`)
  - Simulación 7: Escalas Productivas (`/laboratorio/escalas-productivas`)
  - Simulación 8: Resiliencia Agrícola (`/laboratorio/resiliencia-agricola`)
  - Evaluaciones Formativas (`/laboratorio/:id/evaluacion`)

---

## 4. Arquitectura Técnica de la Plataforma

```
                                  ARQUITECTURA AGROSISTEMAS
                                  
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │                           FRONTEND (Angular 16)                             │
  │                                                                             │
  │  • SPA con Reactive Forms, Router Guards (AuthGuard), HTTP Interceptors    │
  │  • UI Glassmorphism Neon, HUDs de Monitoreo Dinámico                       │
  │  • Motores de simulación procedural y Web Audio API                         │
  │  • Rutas: /login, /register, /landing, /dashboard, /laboratorio, /recursos   │
  └──────────────────────────────────────┬──────────────────────────────────────┘
                                         │ REST API (JSON / JWT Bearer)
                                         ▼
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │                            BACKEND (Node.js & Express)                      │
  │                                                                             │
  │  • Arquitectura modular: Rutas, Controladores, Middlewares, Modelos Mongoose│
  │  • Seguridad: Bcrypt (hashing de contraseñas), JWT (tokens con caducidad)   │
  │  • Carga de archivos: Multer + Cloudinary (carpeta 'agrosistemas_evidencias')│
  │  • Port: 5000 / Dynamic ENV                                                 │
  └──────────────────────────────────────┬──────────────────────────────────────┘
                                         │ Driver Mongoose v8
                                         ▼
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │                            BASE DE DATOS (MongoDB Atlas)                    │
  │                                                                             │
  │  Cluster: cluster0.r79rn7k.mongodb.net                                      │
  │  Base de datos: agrosistemas                                                │
  │  Colecciones: users, agrosistemas (progreso), evidencias_agro,              │
  │               exams_agro, analisis_agro                                     │
  └─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Credenciales y Acceso al Sistema

### 5.1. Cadena de Conexión a Base de Datos
```
mongodb+srv://Cris87:MorgothTheLord88@cluster0.r79rn7k.mongodb.net/agrosistemas?appName=Cluster0
```

### 5.2. Códigos de Registro Institucional
* **Docente / Profesor:** `2026@APS-DSSAT` (Alternativo: `2026@PS-CAA`)
* **Estudiante (Grado 6°):** `2026#DSSAT-APS` (Alternativo: `2026#CAA-PS`)

### 5.3. Usuarios Semilla Preconfigurados (`npm run seed` / `node seedUsers.js`)
* **Administrador:** `krontroth@gmail.com` | Clave: `987987987`
* **Docente:** `docente@mail.com` | Clave: `1234567890`
* **Estudiante Principal:** `aurelio.pisso@agrosistemas.edu` | Clave: `Aurelio2026*`
* **Estudiante Demo:** `agrosistemas@mail.com` | Clave: `1234567`
