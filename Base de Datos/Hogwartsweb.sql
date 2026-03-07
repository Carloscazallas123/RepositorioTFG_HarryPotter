-- codificación UTF-8: Reconocer Tildes, Emojis..etc
SET NAMES 'utf8mb4';

DROP DATABASE IF EXISTS HOGWARTSWEB;
CREATE DATABASE HOGWARTSWEB ;
USE HOGWARTSWEB;

-- Tabla Usuarios
CREATE TABLE USUARIO(
    ID_USUARIO INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador del Usuario',
    NOMBRE VARCHAR(45) NOT NULL COMMENT 'Nombre del Usuario',
    CORREO VARCHAR(45) NOT NULL COMMENT 'Correo Electronico del Usuario',
    CONTRASEÑA INT NOT NULL COMMENT 'Contraseña del Usuario',
    CASA VARCHAR(45) NULL COMMENT 'Casa del Usuario',
    PUNTOS INT NULL COMMENT 'Puntos del Usuario',
    CONSTRAINT PK_ID_USUARIO PRIMARY KEY (ID_USUARIO)
);
-- Tabla Personaje
CREATE TABLE PERSONAJE(
    ID_PERSONAJE INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador del Personaje',
    NOMBRE VARCHAR(45) NOT NULL COMMENT 'Nombre del Personaje',
    DESCRIPCION VARCHAR(75) NOT NULL COMMENT 'Descripcion del Personaje',
    CASA VARCHAR(45) NULL COMMENT 'Casa del Personaje',
    CONSTRAINT PK_ID_PERSONAJE PRIMARY KEY (ID_PERSONAJE)
);
-- Tabla Objeto
CREATE TABLE OBJETO(
    ID_OBJETO INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador del Objeto',
    NOMBRE VARCHAR(45) NOT NULL COMMENT 'Nombre del Objeto',
    DESCRIPCION VARCHAR(75) NOT NULL COMMENT 'Descripcion del Objeto',
    COSTE INT NOT NULL COMMENT 'Coste del Objeto',
    -- Relacion 1:N Personaje <-> Objeto
    ID_PERSONAJE INT NULL COMMENT 'Identificador del Personaje',
    CONSTRAINT PK_ID_OBJETO PRIMARY KEY (ID_OBJETO),
    CONSTRAINT FK_ID_PERSONAJE FOREIGN KEY (ID_PERSONAJE) 
                               REFERENCES PERSONAJE(ID_PERSONAJE)
);
-- Tabla Comentario
CREATE TABLE COMENTARIO(
    ID_COMENTARIO INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador del Comentario',
    DESCRIPCION VARCHAR(75) NOT NULL COMMENT 'Descripcion del Comentario',
    VALORACION TINYINT NOT NULL COMMENT 'Valoracion del Comentario',
    -- TINYINT: Es como el INT, pero reducido. Ocupa un solo Byte
    CONSTRAINT PK_ID_COMENTARIO PRIMARY KEY (ID_COMENTARIO),
    -- Relacion 1:1 Usuario <-> Comentario
    ID_USUARIO INT NULL COMMENT 'Identificador del Usuario',
    CONSTRAINT FK_ID_USUARIO FOREIGN KEY (ID_USUARIO) 
                             REFERENCES USUARIO(ID_USUARIO)

);

-- Lo llamo COMPRA porque poner Usuario_Objeto no me gusta
-- Relacion N:M Usuario <-> Objeto
CREATE TABLE COMPRA(
    ID_COMPRA INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador de la Compra',
    ID_USUARIO INT NOT NULL COMMENT 'Identificador del Usuario',
    ID_OBJETO  INT NOT NULL COMMENT 'Identificador del Objeto',
    CONSTRAINT PK_ID_COMPRA PRIMARY KEY (ID_COMPRA),
    CONSTRAINT FK_COMPRA_USUARIO FOREIGN KEY (ID_USUARIO) 
                                 REFERENCES USUARIO(ID_USUARIO),
    CONSTRAINT FK_COMPRA_OBJETO FOREIGN KEY (ID_OBJETO) 
                                 REFERENCES OBJETO(ID_OBJETO)
);


-- IMPROTACIONES (CREACION DE OBJETOS Y PERSONAJES)

-- Insertacion de los Personajes
INSERT INTO PERSONAJE (NOMBRE, DESCRIPCION, CASA) VALUES 
('Ron Weasley', 'Mejor amigo de Harry y gran jugador de Ajedrez Mágico', 'Gryffindor'),
('Lord Voldemort', 'El Señor Tenebroso, el mago oscuro más temido', 'Slytherin'),
('Rubeus Hagrid', 'Guardabosques de Hogwarts y amante de las criaturas', 'Gryffindor'),
('Minerva McGonagall', 'Profesora de Transfiguración y jefa de Gryffindor', 'Gryffindor'),
('Sirius Black', 'Padrino de Harry y animago conocido como Canuto', 'Gryffindor'),
('Nicholas Flamel', 'Famoso alquimista y único fabricante de la Piedra Filosofal', NULL),
('Helga Hufflepuff', 'Cofundadora de Hogwarts, valoraba la lealtad y el trabajo', 'Hufflepuff'),
('Rowena Ravenclaw', 'Cofundadora de Hogwarts, conocida por su inteligencia', 'Ravenclaw'),
('Neville Longbottom', 'Héroe de la guerra, ahora experto en Herbología', 'Gryffindor');
