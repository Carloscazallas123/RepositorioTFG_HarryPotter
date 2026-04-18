# ⚡ Proyecto HogwartsWeb - PFC DAM
> Toda Modificación a secas de este Proyecto sera escrito <br> en el commit de Github como _"git doc : ....._"

> La rama master es la que se encargará exclusivamente <br> de Modificar este documento.

Bienvenido al repositorio de mi Proyecto de Fin de Curso (PFC) para el ciclo de Desarrollo de <br> Aplicaciones Multiplataforma, Realizado por Carlos Chacón Cazallas. En este documento, <br>  escribirá todo acerca del Proyecto, tanto de los Fronts, los Backs, la Base de Datos..etc.


## 📖 Descripción del Proyecto
La aplicación web se tratará de nada más, ni nada menos que la magica y maravillosa <br> saga de Harry Potter, decicada al ambito del entretenimiento para todo fan de Hogwarts <br> (O magos novatos) que desean disfrutar por un ratito.

### Características Principales:
---
* **🏰 Cuestionario:** Realiza una serie de preguntas 
para que el sombrero elija tu nuevo destino en Hogwarts.
* **🧹 Minijuegos:** Adentrate en nuestra coleccion 
de Minijuegos llenos de diversión, desafio y conocimiento.
* **🧪 Tienda:** Adentrate en la tienda de Hagrid para 
comprar objetos unicos de la saga con tus puntos obtenidos.

* **📱 Personajes:** Desbloquea a los personajes de Hogwarts.
* **📱 Inventario:** Guarda todos los objetos que vas consiguiendo en tu odisea.
* **📱 Comentarios:** Realiza un comentario en la pagina y cuentanos sobre tu experiencia.


# 🛠️ Implementaciones 
## 💾 1º__Base de Datos (SQL)
> **Nota:** Primero enfocate en todo lo que está en la Base de Datos <br> y cuando
> lo termines, Pasas ya al 2º punto.
### 💾 Creacion de Tablas 

### Tabla Usuario 🛠️
---
| Columna | Comentario |
| :--- | :--- |
| **Id_Usuario** | Identificador del Usuario |
| **Nombre** | Nombre del Usuario | 
| **Contraseña** | Contraseña del Usuario |
| **Gmail** | Correo Electronico del Usuario | 
| **Casa** | Casa del Usuario | 
| **Puntos** | La cantidad de puntos que tiene el Usuario | 
### Tabla Objetos 🛠️
---
| Columna | Comentario |
| :--- | :--- |
| **Id_Objeto** | Identificador del Objeto |
| **Nombre** | Nombre del Objeto | 
| **Descripcion** | Descripcion del Objeto |
| **Costo** | Costo de Objeto | 

### Tabla Personajes 🛠️
---
| Columna | Comentario |
| :--- | :--- |
| **Id_Personaje** | Identificador del Personaje |
| **Nombre** | Nombre del Personaje | 
| **Descripcion** | Descripcion del Personaje |
| **Casa** | Casa del Personaje |

### Tabla Comentarios 🛠️
---
| Columna | Comentario |
| :--- | :--- |
| **Id_Comentario** | Identificador del Comentario |
| **Descripcion** | Descripcion del Comentario |
| **Fecha** | Fecha del Comentario |
| **Valoracion** | Valoracion del Comentario | 
## 🔑 Relaciones Entre tablas
### 🔑 Relacion N:M Usuario-Objeto 
Un Usuario puede comprar varios objetos y los objetos pueden ser comprado <br>
por varios usuarios. Se creará una tabla aparte que relaciones cada Cliente
con <br>  el objeto (Esta tabla servira tambien para comprobar si ese Cliente tiene
o no <br> el producto).
> _(EL Usuario no puede volver a comprar ese producto)._
### Tabla Usuario_Objeto (Comprar) 🛠️
| Columna | Comentario |
| :--- | :--- |
| **ID_Compra** | Identificador de la Compra |
| **ID_Usuario**| Identificador del Usuario |
| **ID_Objeto** | Identificador del Objeto  |
---
### 🔑 Relacion 1:1 Usuario-Comentario 
Un Usuario Puede Realizar un unico comentario para valorar la pagina <br> web
y un comentario pertenece a un unico Usuario (Este usuario puede <br> modificar
siempre que desee el comentario. Esto para evitar saturaciones <br> de comentrarios).
### Tabla Comentarios 🛠️
| Columna | Comentario |
| :--- | :--- |
| **Id_Comentario** | Identificador del Comentario |
| **Descripcion** | Descripcion del Comentario |
| **Valoracion**  | Valoracion del Comentario | 
| **Fecha** | Fecha del Comentario |
| **ID_Usuario**  | Identificador del Usuario **(R)** | 

### Tabla Usuario 🛠️
| Columna | Comentario |
| :--- | :--- |
| **Id_Usuario** | Identificador del Usuario |
| **Nombre** | Nombre del Usuario | 
| **Contraseña** | Contraseña del Usuario |
| **Gmail** | Correo Electronico del Usuario | 
| **Casa** | Casa del Usuario | 
| **Id_Comentario** | Identificador del Comentario **(R)** | 
---
### 🔑 Relacion 1:N Personaje-Objeto 
Un Personaje dispone de varios objetos, pero un objeto pertenece <br> a un 
unico personaje. Para ello, se añadira en la tabla de Objeto <br> una Foreing
Key del Identificador del Personaje.

### Tabla Objetos 🛠️
| Columna | Comentario |
| :--- | :--- |
| **Id_Objeto** | Identificador del Objeto |
| **Nombre** | Nombre del Objeto | 
| **Descripcion** | Descripcion del Objeto |
| **Costo** | Costo de Objeto | 
| **Id_Personaje** | Identificador del Personaje **(R)** | 
---
## ♻️ 2º__SpringTool (Spring)
> **Nota:** Primero enfocate en todo lo que está en la Base de Datos y cuando
> lo termines, Pasas ya al 3º punto.

Una vez hemos comprobado que la base de datos arranca, vamos a <br> empezar con Springtool. Aqui ya hay un salto de curva dificil, porque <br> tenemos que crear lo siguiente:
> **Nota:** Aun así, tu poco a poco que lo vas a conseguir
### 🛠️ Entidades (Entitys)
| Entitys |
| :--- | 
| _UsuarioEntity_ | 
| _ObjetoEntity_ | 
| _PersonajeEntity_ |
| _ComentarioEntity_ | 
| _CompraEntity_ | 
---
### 🛠️ Objetos (DTOS)
#### ________UsuarioDTO
> _Con sus respectivos Types_

| DTO | Descripcion |
| :--- | :--- |
| _UsuarioFullDTO_ | El DTO por completo del Usuario (Token) |
| _RegistroDTO_ |  El DTO de Registro del Usuario (Pasar al Controlador)| 
| _SesionDTO_ | El DTO de Iniciar Sesion (Pasar al Controlador) |


_El Cliente introduce los datos al momento de registrarse y se lo pasa al controlador.<br>_
_Luego, el controlador comprobará la condicion de las contraseñas. Si es la misma, <br>_
_Guardará ese registro y le devolverá un SesionDTO para iniciar sesion. Caso contrario,<br>_
_El DTO Sesion se le devolverá al cliente como nulo, dando un error correspondiente.<br>_

## RegistroDTO / SesionDTO
| Variable | Tipo | - | Variable | Tipo |
| :--- | :--- | :--- | :--- | :--- |
| _Nombre_ | String | - |_Nombre_| String|
| _Correo_ |  String | - |_Contraseña_|String |
| _Contraseña_ | String | - |
| _RepContraseña_ | String | - |

_Al momento de que el Cliente logre Iniciar Sesion, el controlador <br> debera devolver_
_El DTO importante, que contendrá lo siguiente:_

## FullUsuarioDTO
| Variable | Tipo |
| :--- | :--- |
| _IdUser_ | Int |
| _Nombre_ |  String | 
| _Casa_ | Sting |
| _Puntos_ | Int |
| _Inventario_ | Array de INTS (IDS) |

> _Inicia SpringTool y haz todo esto antes de continuar_
---
#### ________ObjetoDTO
> _Con sus respectivos Types_

_El apartado de Objeto será facil, pues necesitaremos dos DTOs:<br>_
* **Uno de ellos para mostrar los objetos de la tienda (ObjetoTienDTO)**
* **Otro para mostrarlos al momento de realizar el inventario(ObjetoInvtDTO)**

_Cuando el Usuario compre un objeto, su Id será guardado en la array <br>_
_de Ids de inventario y esos IDs, seran usados al momento de revisar<br>_
_el inventario._

## ObjetoTiendDTO
| Variable | Tipo |
| :--- | :--- |
| _Nombre_ |  String | 
| _Descripcion_ | Sting |
| _Costo_ | Int |

## ObjetoInvDTO
| Variable | Tipo |
| :--- | :--- |
| _Nombre_ |  String | 
| _Descripcion_ | Sting |
| _Costo_ | Int |
| _Personaje_ | String |
---
#### ________ComentarioDTO
> _Con sus respectivos Types_

_El apartado del comentario funcionara de lo siguiente:<br>_
_El usuario podrá ver tres comentarios aleatorios de los usuarios<br>_
_Que han realizado a esta pagina web.Cuando le de al boton de<br>_
_Comentar, se aparecera un formulario para crear el comentario<br>_

_Ahora, si ya ha hecho un comentario, al pulsarle al boton de<br>_
_comentar,se le llevara al mismo formulario, pero estara rellenado<br>_
_por los datos que ha escrito en su comentario (vamos que va a modificar)<br>_
_el comentario_.

_Por lo tanto, solo vamos a necesitar dos DTOS:<br>_

* **Uno de ellos para mostrar los tres comentarios**
* **Otro para mostrar el formulario para rellenar el comentario**

## ComentarioMostDTO
| Variable | Tipo |
| :--- | :--- |
| _Descripcion_ | Sting |
| _Valor_ | Int |
| _fecha_ | Date |
| _Usuario_ |  String | 

## ComentarDTO
| Variable | Tipo |
| :--- | :--- |
| _Descipcion_ |  String | 
| _Valor_ | Int |
| _Fecha_ | Date |

#### ________PersonajesDTO
> _Con sus respectivos Types_

_El apartado del personajes funcionara de lo siguiente:<br>_
_Cuando el usuario haya comprado 3 objetos de un respectivo<br>_
_personaje, este se le aparece en el apartado de "personajes"<br>_
_Donde podra ver su información e iran apareciendo poco a poco<br>_

_Por lo tanto, solo vamos a necesitar dos DTOS:<br>_

* **Un DTO para mostrar el personaje con toda su informacion**
* **Otro para mostrarlo solo en la ventana de Personaje**

## PersonajeMostDTO
| Variable | Tipo |
| :--- | :--- |
| _Nombre_ | String |
| _Casa_ | String |

## PersonajeVistDTO
| Variable | Tipo |
| :--- | :--- |
| _Nombre_ | String |
| _Descripcion_ | String |
| _Casa_ | String |
| _Objetos_ | Lista de Strings |

> _Una vez creado todo, vamos a empezar a crear los Repositorios_

## 🛠️ Creacion de los Repositorios
_En este apartado vamos a crear los repositorios<br>_
_para crear las consultar que queramos para cada apartado<br>_

#### ________RepoUsuario
_Los Repositorios que vamos a emplear para Usuarios serán:_

- **ObtenerAllUsuarios:** Una consulta para obtener <br>
todos los usuarios. Este se podrá emplear para comprobar <br>
por ejemplo, al momento de registrar, si ya existe un <br>
usuario por ese correo. 

- **ObtenerporSesion:** Una consulta para obtener <br>
el usuario a traves del nombre y contraseña. <br>
Este se podrá emplear para obtener, por <br>
ejemplo, el usuarioFull a traves de esos parametros.
