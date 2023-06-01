# NodeLibraryEx

A continuación se describe de forma resumida los pasos que se fueron tomando para el desarrollo del proyecto nodelibraryex
Creation de proyecto (archivos)

	Comencé creando el proyecto a travez de la terminal (init..) donde genere los archivos : app.js, package.json …
Instale las dependencias necesarias para el desarrollo del proyecto. (Las especificadas en las consignas)
Una vez en VSC cree las carpetas para modular el proyecto (arquitectura básica).
Una vez finalizada esta etapa, comencé a escribir código:

Creation de código ():

	En una primera instancia “levante” el server, utilizando la biblioteca express().
```
const PORT = process.env.PORT || 8888;
app.listen(PORT, async () => {
  console.log(
    `Listening on port: ${PORT}`
  );
});

```
	Nos dirigimos a la carpeta “config” donde utilice el ORM Sequelize para crear una base de datos (DB), configurarla a gusto, iniciar y sincronizar la DB para que se actualice a medida que le agregan datos.
Esta parte personalmente la dividí en dos archivos: 
	Configuración de DB.
	Sincronización de DB.

	A continuación dentro de la carpeta ”modules” estructure la DB de las entidades librería(Library), libro(Book), usuario(User). Aquí destaco el proceso de asociación entre las entidades 'Library' y 'Book' en la DB. Donde la tabla 'Book' pertenece a la tabla 'Library', lo que significa que cada registro en la tabla 'Book' está asociado con un registro en la tabla 'Library'.
	('onDelete: CASCADE') Aquí definimos que sí se elimina un registro en la tabla 'Library', todos los registros asociados en la tabla 'Book' también se eliminarán. Esto lo aplicamos para lograr que los libros(Book) contenidos en una biblioteca(Library) no sin ubicación alguna al borrarse su respectiva librería.
 	(‘hasMany: Book’) Establece que una 'Library' puede tener varios registros en la tabla 'Book’.

	Una vez finalizada la sección de DB comencé con la carpeta “routes” para definir las rutas de las solicitudes HTTP. Personalmente comencé por la creación de las ruta del manejo de la solicitud POST (Create user):
	Aquí  desestructuré el objeto req.body para extraer las propiedades necesarias con el fin de tenerlas disponibles para su uso en la lógica de procesamiento de la solicitud POST. 
```
const { name, lastName, email, password } = req.body;

```
Para crear un nuevo usuario (newUser) la lógica que utilizo es la siguiente: 
	Nos comunicamos con el servicio de usuarios (userService) donde este recibe un objeto { user } como argumento  todas las propiedades que mencionamos con anterioridad: 
	{ name, lastName, email, password }
Luego en (userProvider) la función de:
```
const createUser = async (userOptions) => {
  try {
    const newUser = await userModel.create(userOptions);
    return newUser;
  } catch (error) {
    throw error;
  }
};

```
toma los “(userOptions)” proporcionados (argumentos que extrajimos) y utiliza el modelo de usuario (userModel) definido con el ORM Sequelize para crear un nuevo registro de usuario en la DB.
En simples palabras se genera la inserción en la DB y se devuelve el nuevo usuario creado.
```
const newUser = await userModel.create(userOptions) 
```
Por ultimo, “userService” devuelve el nuevo usuario creado al controlador de la función de la solicitud HTTP POST.
Donde si todo fue un éxito, la respuesta (res) es un 201 y se devuelve el objeto: ``` { message: "User successfully created", newUser } 
```
newUser representa al JSON del nuevo usuario que contiene sus datos:
{
		"id": …,
		"name": “…”,
		"lastName": “…”,
		"email": “…@gmail.com",
		"password": "****",
		"updatedAt": “…”,
		"createdAt": “…”
}
En el caso contrario, la respuesta (res) es un 500 con un mensaje de error:
``` res.status( 500 ).json({ message: "An error occurred", error: error.message });

```

Con el fin de evitar la extensión excesiva del documento, solamente desarrollaremos la ruta de HTTP POST. Las demás rutas siguen de forma similar la lógica que sé a explicado.

Creation de middleware()

	los middleware se van a encargar de interceptar ciertas solicitudes HTTP, construidas anteriormente, para verificar y autentificar datos.

	Dentro de la carpeta ”middleware” y con la utilización de la biblioteca “passport” inicie la lógica de autenticacion de datos.
	Definí la estrategia de autenticacion basada en JWT (proporcionada por passport-jwt) donde en primera instancia se extrae el token en formato bearer del header de la solicitud.
```
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),  //extraer el bearer token del header
      secretOrKey: secret,
    },
```
Una vez decodificado el token, representado por (jwtPayload), se le pasa al objeto { user } para poder proseguir con futuras acciones que se tomen.

	Luego genere un middleware el cual exporte en ciertas solicitudes HTTP que debían tener cierta capa de seguridad para que no cualquier usuario pueda borrar, actualizar y crear elementos de la DB.
	El middleware llamado “authAdmin” es el cual utilizo para verificar si un usuario autenticado tiene el rol de "ADMIN" antes de permitir el acceso a rutas o acciones específicas. Esto lo logramos extrayendo	 del body de la solicitud HTTP las propiedades de “user” y “pass” y verificamos que coincidan con los valores “admin” y ”admin”, lo que conlleva a que se le devuelva un token que contiene la información de que esta sesión tiene el rol “ADMIN”. 

	La misma lógica aplicamos en el middleware llamado "authUser" donde en primera instancia verificamos que este autenticado y luego corroboramos que el rol del usuario sea “USER” y a la vez “ADMIN”, de esta forma no tendremos inconvenientes con que un user pueda tomar acciones que un admin no pueda.
El proceso que sucede con el rol “USER” varia del proceso Admin ya que tiene un paso adicional el cual es ir a fijarse en la DB si este usuario existe utilizando la propiedad “email” ya que no puede haber dos emails iguales.

Estos middleware proporcionan capas de protección adicionales para restringir, al user común, el acceso a ciertas acciones que solo los usuarios con los privilegios de ADMIN pueden aplicar.