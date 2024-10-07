#Framework e interoperabilidad 2024
# - Grupo 13
#Integrantes: Corrales Abigail - Quiñiñires Melani

Este proyecto es una aplicación de donaciones que utiliza Strapi para el backend y React.js para el frontend. La estructura está diseñada para facilitar la gestión de campañas de donación, permitiendo a los usuarios crear, visualizar y donar a diferentes campañas.

Descripción
- Backend: Utilizamos Strapi como el sistema de gestión de contenido (CMS) para manejar los datos relacionados con las campañas de donación. Strapi nos permite crear y gestionar las APIs de manera flexible, lo que facilita la integración con cualquier frontend.

- Frontend: React.js se ha implementado para el desarrollo del frontend, proporcionando una interfaz dinámica y eficiente para que los usuarios interactúen con las campañas. Gracias a la arquitectura de componentes reutilizables de React, es fácil mantener y expandir la aplicación a medida que el proyecto crece.

Integración

El backend y el frontend están conectados, lo que significa que todo el contenido que se crea o actualiza en Strapi se refleja automáticamente en la interfaz de usuario desarrollada en React. Esta integración permite que el sistema sea eficiente y que los datos se sincronicen en tiempo real entre ambos.
** Aclaración importante: Strapi sólo funciona con versiones de node entre la 18 y la 20.

![Captura041024](https://github.com/user-attachments/assets/e7f3a66c-87dc-4683-bc06-c5f0de9ae295)


## Pasos a seguir:
1) Situarse en la carpeta que corresponde a los proyectos de laravel/xampp
2) Clonar el repositorio:
Git clone https://github.com/AbigailCo/Donaciones-ReactStrapi.git  
3) Moverse a la carpeta donaciones-BackStrapi
 cd donaciones-BackStrapi
4) Ejecutar npm install
npm install
5) Moverse a la carpeta donaciones-FrontReact
cd ..
cd donaciones-FrontReact
6) Ejecutar npm install nuevamente
npm install
7) Iniciar npm
npm start
8) Moverse a la carpeta del back
cd ..
cd donaciones-BackStrapi
9) Ejecutar run develop
npm run develop
10) Ingresar a Laragon o Xampp e inicializar Apache y Mysql
11) Se inicia Strapi en la siguiente dirección: 
http://localhost:1337/admin
 -Primero se debe crear el usuario
  - Luego el panel del administrador se verá así:
    ![Captura071024-8](https://github.com/user-attachments/assets/03ebc23e-3d82-44cb-80a6-6d40cb6bd12d)

13) Se inicia React con el front en la siguiente dirección:
  http://localhost:3000/
![Captura011024-3](https://github.com/user-attachments/assets/c9e1a928-2e43-4fa3-9408-9122c05a24fe)


