# **Proyecto Final - Epica**

## **_Comision 2 Adela Agudo - Argentina Programa_**

### Pasos Previos

- Tener Node.js instalado en tu maquina.

- Instalar MongoDB y ejecutar servicios mongod y mongocompass.

### Configuración Inicial

- Cambia el nombre del archivo .example.env por .env ;

- En la terminal, navega a la carpeta backend:

cd backend

- Instala las dependencias con el siguiente comando:

npm install

- Ejecuta la aplicación en la carpeta/backend con el siguiente comando:

npm run dev

- Abre MongoDB Compass y asegúrate de que eñ servico mongod esté en ejecución.

### Realizar Peticiones con Thunder Client:

- Agregar un Comentario a un Post Específico
  POST localhost:4000/api/comments/:postId

Descripción: Agrega un comentario a un post específico. Parámetros: :postId es el ID del post al que se quiere agregar el comentario. Uso: Envia una solicitud POST a esta ruta con el cuerpo de la solicitud que contiene la información del comentario.

- Crear un Nuevo Comentario Independiente
  POST localhost:4000/api/comments

Descripción: Crea un nuevo comentario independiente. Uso: Envia una solicitud POST a esta ruta con el cuerpo de la solicitud que contiene la información del comentario.

- Crear un Nuevo Post
  POST localhost:4000/api/post

Descripción: Crea un nuevo post. Uso: Envia una solicitud POST a esta ruta con el cuerpo de la solicitud que contiene la información del nuevo post.

- Iniciar Sesión de un Usuario Existente
  POST localhost:4000/api/login

Descripción: Inicia sesión de un usuario existente. Uso: Envia una solicitud POST a esta ruta con las credenciales del usuario (por ejemplo, nombre de usuario y contraseña) en el cuerpo de la solicitud.

- Obtener el Perfil del Usuario Autenticado
  GET localhost:4000/api/profile

Descripción: Obtiene el perfil del usuario autenticado. Uso: Realiza una solicitud GET a esta ruta para obtener información sobre el perfil del usuario autenticado.

- Registrar un Nuevo Usuario
  POST localhost:4000/api/register

Descripción: Registra un nuevo usuario. Uso: Envia una solicitud POST a esta ruta con la información necesaria para registrar un nuevo usuario.

- Cerrar Sesión del Usuario Autenticado
  POST localhost:4000/api/logout

Descripción: Cierra sesión del usuario autenticado. Uso: Envia una solicitud POST a esta ruta para cerrar sesión del usuario autenticado.
