# Palindrome Checker Challenge

## Objetivo del Challenge

Desarrollar una aplicación full-stack que permita verificar si una palabra o frase es un palíndromo, y almacenar un historial de las entradas.

### Objetivos alcanzados

1. Se creo la API en el back usando node, express y sqlite y en el Front se creo la interfaz con React + Nextjs, Shadcn UI. ✔️
2. Se creo la interfaz de usuario para introducir una palabra o frase, la verifica y la guarda en el historial. ✔️

Nota: Para el Back se uso el patron MVC (Las vistas en este caso son las respuestas de la API, ya que el render de la Info se hace en el Front con React), y en el Front se utilizo una arquitectura Modular.

### Tecnologias utilizadas en Front
Typescript, React, Next.js, Shadcn UI, React Hook Form, Zod, TanStack Query

### Tecnologias utilizadas en el Back
Node.js, express.js, sqlite3

### Razones Claves para elegir el patrón modular en el Front

Cada feature tiene su "módulo" autocontenido.

Se mantiene la separación de responsabilidades: UI, lógica, estado, modulos, servicios, etc.

Facilita el escalado del proyecto.

### Razones para usar el patron MVC 

Separación de Responsabilidades, escalabilidad y mantenibilidad

Mejora el trabajo en equipo, Es mas facil reutilizar el codigo

### Como usar el Back y el Front
Estando en los directorios de front o back se puede instalar todo respectivamente:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
Estando en los directorios de front o back se puede Correr el Server o correr la aplicacion de Front de forma respectiva:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

