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


-- 1. Ron, Voldemort y Hagrid
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Manual de Mantenimiento', 'Guía para cuidar escobas voladoras de segunda mano', 12, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Ron Weasley')),
('Bufanda de Gryffindor', 'Bufanda de lana roja y dorada tejida por su madre', 18, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Ron Weasley')),
('Caja de música', 'Objeto oscuro que emite una melodía inquietante', 150, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Lord Voldemort')),
('Hueso de su padre', 'Reliquia macabra usada en el ritual de resurrección', 0, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Lord Voldemort')),
('Tostadas de Hagrid', 'Rebanadas de pan tan duras que podrían romper dientes', 2, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Rubeus Hagrid')),
('Trampa para lazos', 'Red resistente para capturar criaturas pequeñas', 45, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Rubeus Hagrid'));

-- 2. McGonagall y Sirius
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Reloj de arena de Casa', 'Mide los puntos ganados por Gryffindor en el curso', 350, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Minerva McGonagall')),
('Pluma de caligrafía', 'Pluma de ganso para firmar permisos de Hogsmeade', 25, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Minerva McGonagall')),
('Cuchillo de Sirius', 'Daga mágica que abre cualquier puerta bloqueada', 120, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Sirius Black')),
('Anillo de compromiso', 'Antigua joya familiar guardada en la casa Black', 900,   
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Sirius Black'));

-- 3. Flamel y las Fundadoras
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Crisol de plata', 'Recipiente para fundir metales preciosos en alquimia', 180, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Nicholas Flamel')),
('Lupa de aumento', 'Lente mágica para leer inscripciones diminutas', 30, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Nicholas Flamel')),
('Manteles mágicos', 'Telas que se limpian solas tras los grandes banquetes', 60, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Helga Hufflepuff')),
('Telescopio de latón', 'Instrumento para observar las estrellas de Ravenclaw', 220, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Rowena Ravenclaw'));

-- 4. Neville Longbottom
INSERT INTO OBJETO (NOMBRE, DESCRIPCION, COSTE, ID_PERSONAJE) VALUES 
('Tierra de maceta', 'Sustrato especial de los invernaderos de Hogwarts', 8, 
                        (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Neville Longbottom')),
('Regadera mágica', 'Regadera que nunca se queda sin agua tibia', 30, 
                    (SELECT ID_PERSONAJE FROM PERSONAJE WHERE NOMBRE = 'Neville Longbottom'));

-- Insertando reseñas basadas en la imagen de la web
INSERT INTO COMENTARIO (DESCRIPCION, FECHA, VALORACION, ID_USUARIO) 
VALUES 
('Esta pagina web tiene un diseño muy interesante y tiene mucho potencial.', '2026-01-17', 5, 1),

('Los minijuegos son el punto fuerte de esta pagina. Entretenidos y sencillos.', '2026-01-17', 4, 2),

('Estoy muy emocionada!!! Me ha tocado Ravenclaw en el cuestionario.', '2026-01-17', 5, 3),

('Me encanta la estética de los pergaminos, parece el Mapa del Merodeador.', '2026-02-10', 5, 4),

('La tienda tiene productos exclusivos muy chulos. ¡Quiero más puntos!', '2026-03-05', 4, 5);