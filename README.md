Prueba Técnica - Malva Homepage (Frontend)
Este proyecto corresponde a una prueba técnica de desarrollo frontend, inspirada en la estética y contenidos del sitio oficial de Malva.

Desarrollado con Next.js, ReactJS y TypeScript, incluye estructura de componentes, estilos personalizados y uso de mocks para simular datos dinámicos.

Tecnologías Utilizadas
Framework: Next.js 15 + ReactJs

Lenguajes: TypeScript, HTML semántico, CSS (modular)

Estilos: CSS Modules (sin librerías de UI externas)

Assets: Imágenes, íconos y contenido de Malva

Datos simulados: Mock data en archivos locales

Persistencia: Uso de localStorage para simular estado

Instalación y ejecución local

pnpm install
o
npm install

Luego, ejecutar el servidor de desarrollo:

pnpm next dev --turbopack

y finalmente ingresar a http://localhost:3000 para ver el proyecto en el navegador.


Nota:
En el sidebar los submenús han sido implementados únicamente para las opciones del menú "Mujer". Los menús "Hombre" y "Shop by Brand" no incluyen submenús en este componente con el fin de mantener el código más conciso y enfocado en mostrar la lógica principal. 