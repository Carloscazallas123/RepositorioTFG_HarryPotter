# ⚡ Proyecto Harry Potter (HogwartsWeb) - TFG DAM
> **Nota:** Toda Modificación a secas de este Proyecto sera escrito en el commit de Github como _"git doc : ....._"

Bienvenido al repositorio de mi Proyecto de Fin de Curso (PFC) para el ciclo de Desarrollo de Aplicaciones Multiplataforma, Realizado por Carlos Chacón Cazallas. En este documento, se escribirá todo acerca del Proyecto, tanto de los Fronts, los Backs, la Base de Datos..etc.


## 📖 Descripción del Proyecto
La aplicación web se tratará de nada más, ni nada menos que la magica y maravillosa saga de Harry Potter, decicada al ambito del entretenimiento para todo fan de Harry Potter (O magos novatos) que desean disfrutar por un ratito.

### Características Principales:
---
* **🏰 Cuestionario:** Realiza una serie de preguntas 
para que el sombrero elija tu nuevo destino en Hogwarts.
* **🧹 Minijuegos:** Adentrate en nuestra coleccion 
de Minijuegos llenos de diversión, desafio y conocimiento.
* **🧪 Tienda:** Adentrate en la tienda de Hagrid para 
comprar objetos unicos de la saga con tus puntos obtenidos.

* **📱 Logros:** Hazañas en HogwartsWeb para obtener una gran cantidad de puntos.
* **📱 Inventario:** Guarda todos los objetos que vas consiguiendo en tu odisea.
* **📱 Comentarios:** Realiza un comentario en la pagina y cuentanos sobre tu experiencia.


# 🛠️ Implementaciones 
## 💾 1º__Base de Datos (SQL)
> **Nota:** Primero enfocate en todo lo que está en la Base de Datos y cuando
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
| **Casa** | Casa del Personaje |
| **Costo** | Costo de Objeto | 

### Tabla Comentarios 🛠️
---
| Columna | Comentario |
| :--- | :--- |
| **Id_Comentario** | Identificador del Comentario |
| **Descripcion** | Descripcion del Comentario |
| **Valoracion** | Valoracion del Comentario | 
## 🔑 Relaciones Entre tablas
### 🔑 Relacion N:M Usuario-Objeto 
---
Un Usuario puede comprar varios objetos y los objetos pueden ser comprado
por varios usuarios. El Usuario tendrá una lista de identificadores de ese
objeto y el objeto te
> _(EL Usuario no puede volver a comprar ese producto)._














## 🛠️ Stack Tecnológico
Para el desarrollo de esta plataforma se han seleccionado las siguientes tecnologías:

* **Frontend:** [React.js](https://reactjs.org/) (Hooks, Context API, React Router).
* **Estilos:** CSS3 / SASS o Tailwind (según elijas finalmente).
* **Backend:** Node.js con Express (para la gestión de la lógica y seguridad).
* **Base de Datos:** SQL / NoSQL (para guardar usuarios y favoritos).
* **API:** [HP-API](https://hp-api.onrender.com/) como fuente de datos principal.

---

## 🚀 Instalación y Uso
1.  Clona el repositorio:
    `git clone https://github.com/tu-usuario/tu-repositorio.git`
2.  Instala las dependencias:
    `npm install`
3.  Lanza el proyecto en local:
    `npm start`

---

## 📅 Estado del Proyecto
Actualmente el proyecto se encuentra en fase de **Planificación y Diseño de Base de Datos**.



