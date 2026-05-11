USE HOGWARTSWEB;

--  1. CREACIÓN DE PERSONAJES
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

-- 2. ASIGNACIÓN DE OBJETOS (3 POR PERSONAJE)

-- Objetos de Ron Weasley
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Manual de Mantenimiento', 'Guía para cuidar escobas voladoras de segunda mano', 12, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Ron Weasley')),
('Bufanda de Gryffindor', 'Bufanda de lana roja y dorada tejida por su madre', 18, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Ron Weasley')),
('Cromos de Ranas de Chocolate', 'Colección incompleta de magos famosos', 5, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Ron Weasley'));

-- Objetos de Lord Voldemort
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Caja de música', 'Objeto oscuro que emite una melodía inquietante', 150, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Lord Voldemort')),
('Hueso de su padre', 'Reliquia macabra usada en el ritual de resurrección', 0, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Lord Voldemort')),
('Diario de Tom Riddle', 'Un cuaderno aparentemente en blanco con un fragmento de alma', 500, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Lord Voldemort'));

-- Objetos de Rubeus Hagrid
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Tostadas de Hagrid', 'Rebanadas de pan tan duras que podrían romper dientes', 2, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Rubeus Hagrid')),
('Trampa para lazos', 'Red resistente para capturar criaturas pequeñas', 45, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Rubeus Hagrid')),
('Paraguas Rosa', 'Oculta los restos de su varita partida', 15, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Rubeus Hagrid'));

-- Objetos de Minerva McGonagall
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Reloj de arena de Casa', 'Mide los puntos ganados por Gryffindor en el curso', 350, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Minerva McGonagall')),
('Pluma de caligrafía', 'Pluma de ganso para firmar permisos de Hogsmeade', 25, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Minerva McGonagall')),
('Sombrero puntiagudo', 'Sombrero de gala verde esmeralda', 40, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Minerva McGonagall'));

-- Objetos de Sirius Black
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Cuchillo de Sirius', 'Daga mágica que abre cualquier puerta bloqueada', 120, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Sirius Black')),
('Anillo de compromiso', 'Antigua joya familiar guardada en la casa Black', 900, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Sirius Black')),
('Moto Voladora', 'Vehículo encantado que deja un rastro de chispas azules', 1200, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Sirius Black'));

-- Objetos de Nicholas Flamel
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Crisol de plata', 'Recipiente para fundir metales preciosos en alquimia', 180, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Nicholas Flamel')),
('Lupa de aumento', 'Lente mágica para leer inscripciones diminutas', 30, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Nicholas Flamel')),
('Elixir de la Vida', 'Sustancia roja que prolonga la existencia', 5000, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Nicholas Flamel'));

-- Objetos de Helga Hufflepuff
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Manteles mágicos', 'Telas que se limpian solas tras los grandes banquetes', 60, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Helga Hufflepuff')),
('Copa de Oro', 'Pequeña copa con dos asas y un tejón grabado', 1500, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Helga Hufflepuff')),
('Libro de Recetas de Cocina', 'Recetario mágico para los elfos domésticos', 45, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Helga Hufflepuff'));

-- Objetos de Rowena Ravenclaw
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Telescopio de latón', 'Instrumento para observar las estrellas de Ravenclaw', 220, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Rowena Ravenclaw')),
('Diadema de Ravenclaw', 'Corona de plata que otorga sabiduría al portador', 2500, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Rowena Ravenclaw')),
('Mapa de las Estrellas', 'Pergamino infinito que muestra el cielo en tiempo real', 85, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Rowena Ravenclaw'));

-- Objetos de Neville Longbottom
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Tierra de maceta', 'Sustrato especial de los invernaderos de Hogwarts', 8, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Neville Longbottom')),
('Regadera mágica', 'Regadera que nunca se queda sin agua tibia', 30, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Neville Longbottom')),
('Mimbulus Mimbletonia', 'Planta rara que expulsa chorros de savia apestosa', 65, (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Neville Longbottom'));
                    
INSERT INTO USUARIO (NOMBRE, CORREO, CONTRASEÑA, CASA, PUNTOS) VALUES 
('Juan Pablo Morales', 'juan.pablo@hogwarts.edu', 1234, 'Gryffindor', 150),
('Carlos Chacon Gomez', 'carlos.ch@hogwarts.edu', 5678, 'Slytherin', 120),
('Maria Sanchez Chacon', 'maria.s@hogwarts.edu', 9012, 'Ravenclaw', 200),
('Luna Lovegood', 'luna.l@hogwarts.edu', 1111, 'Ravenclaw', 300),
('Cedric Diggory', 'cedric.d@hogwarts.edu', 2222, 'Hufflepuff', 250),
('Draco Malfoy', 'draco.m@hogwarts.edu', 9999, 'Slytherin', 500),
('Neville Longbottom', 'neville.l@hogwarts.edu', 4444, 'Gryffindor', 50),
('Cho Chang', 'cho.c@hogwarts.edu', 7777, 'Ravenclaw', 180),
('Gregory Goyle', 'gregory.g@hogwarts.edu', 0000, 'Slytherin', 10),
('Hannah Abbott', 'hannah.a@hogwarts.edu', 5555, 'Hufflepuff', 90);

INSERT INTO COMENTARIO (DESCRIPCION, FECHA, VALORACION, ID_USUARIO) VALUES 
-- Las originales con ajustes
('Diseño muy interesante y con mucho potencial a futuro.', '2026-01-17', 5, 1),
('Los minijuegos son el punto fuerte, muy entretenidos.', '2026-01-17', 4, 2),
('¡Me encanta! Me ha tocado Ravenclaw en el cuestionario.', '2026-01-17', 5, 3),
('La estética de los pergaminos es simplemente mágica.', '2026-02-10', 5, 4),
('Buena tienda, aunque me faltan puntos para la varita.', '2026-03-05', 4, 5),

-- Nuevas reseñas variadas (5, 3, 1, 0)
('Mi padre se enterará de que esta web no es de oro puro.', '2026-03-10', 1, 6),
('Está bien, pero me pierdo un poco entre tanto hechizo.', '2026-03-12', 3, 7),
('Las fotos de las casas son preciosas. ¡Gran trabajo!', '2026-03-15', 5, 8),
('No entiendo nada. ¿Donde estan los pasteles de caldero?', '2026-03-16', 0, 9),
('Un sitio acogedor para descansar después de Herbología.', '2026-03-18', 4, 10);

-- 1. Juan Pablo Morales (Gryffindor) compra los 3 objetos de Ron Weasley
-- Esto hará que Ron aparezca en su lista de afinidad
INSERT INTO COMPRA (ID_USUARIO, ID_OBJETO) VALUES 
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Juan Pablo Morales'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Manual de Mantenimiento')),
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Juan Pablo Morales'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Bufanda de Gryffindor')),
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Juan Pablo Morales'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Cromos de Ranas de Chocolate'));

-- 2. Draco Malfoy (Slytherin) compra los 3 objetos de Lord Voldemort
-- Posee el kit completo del Señor Tenebroso
INSERT INTO COMPRA (ID_USUARIO, ID_OBJETO) VALUES 
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Draco Malfoy'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Caja de música')),
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Draco Malfoy'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Hueso de su padre')),
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Draco Malfoy'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Diario de Tom Riddle'));

-- 3. Maria Sanchez Chacon (Ravenclaw) compra objetos de Rowena Ravenclaw
-- Solo tiene 2, por lo que todavía NO le saldría en la query de "mínimo 3"
INSERT INTO COMPRA (ID_USUARIO, ID_OBJETO) VALUES 
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Maria Sanchez Chacon'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Telescopio de latón')),
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Maria Sanchez Chacon'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Mapa de las Estrellas'));

-- 4. Luna Lovegood compra objetos variados (Coleccionista)
INSERT INTO COMPRA (ID_USUARIO, ID_OBJETO) VALUES 
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Luna Lovegood'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Lupa de aumento')),
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Luna Lovegood'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Mimbulus Mimbletonia')),
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Luna Lovegood'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Diadema de Ravenclaw'));

-- 5. Cedric Diggory compra los objetos de Helga Hufflepuff
INSERT INTO COMPRA (ID_USUARIO, ID_OBJETO) VALUES 
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Cedric Diggory'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Manteles mágicos')),
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Cedric Diggory'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Copa de Oro')),
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Cedric Diggory'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Libro de Recetas de Cocina'));

-- 6. Carlos Chacon Gomez compra objetos de Sirius Black
INSERT INTO COMPRA (ID_USUARIO, ID_OBJETO) VALUES 
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Carlos Chacon Gomez'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Cuchillo de Sirius')),
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Carlos Chacon Gomez'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Anillo de compromiso')),
((SELECT ID_USUARIO FROM USUARIO WHERE NOMBRE = 'Carlos Chacon Gomez'), (SELECT ID_OBJETO FROM OBJETO WHERE NOMBRE = 'Moto Voladora'));
