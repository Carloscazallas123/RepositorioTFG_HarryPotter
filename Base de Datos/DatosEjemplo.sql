USE HOGWARTSWEB;

--  1. CREACIÓN DE PERSONAJES
INSERT INTO PERSONAJE (NOMBRE, DESCRIPCION, CASA) VALUES 
('Ron Weasley', 'Ronald Bilius Weasley, el sexto de los hermanos Weasley, es mucho más que el fiel acompañante del Niño que Vivió; es el ancla emocional del trío de oro. Creció en "La Madriguera" bajo la constante presión de superar los logros académicos y deportivos de sus hermanos mayores, lo que forjó en él una lucha interna contra sus propias inseguridades. Sin embargo, su valor se manifestó desde su primer año cuando, con solo once años, se sacrificó en una partida de ajedrez mágico mortal para permitir que Harry avanzara. Estratega nato, guardián de Quidditch y portador de una lealtad que ni siquiera la influencia de un Horrocrux pudo quebrar definitivamente, Ron personifica la nobleza de quien elige ser valiente a pesar de tener miedo.', 'Gryffindor'),

('Lord Voldemort', 'Nacido en la miseria de un orfanato londinense bajo el nombre de Tom Marvolo Riddle, este mago de linaje mestizo se convertiría en la personificación del terror en el mundo mágico. Descendiente directo de Salazar Slytherin, Tom utilizó su genio excepcional y su carisma manipulador para desentrañar los secretos más oscuros de la magia, llegando a fragmentar su alma en siete Horrocruxes en un intento desesperado por vencer a la muerte, a la que consideraba una debilidad humana. Bajo el pseudónimo de Lord Voldemort, lideró una purga ideológica basada en la supremacía de la sangre, sumiendo a Gran Bretaña en dos guerras civiles mágicas. Su incapacidad para comprender el poder del amor y el sacrificio personal fue, en última instancia, su única y fatal debilidad.', 'Slytherin'),

('Rubeus Hagrid', 'Hijo de un mago y la gigante Fridwulfa, Rubeus Hagrid es un semigigante cuyo imponente tamaño físico solo es superado por la inmensidad de su corazón. Tras ser expulsado injustamente de Hogwarts en 1943 debido a las maquinaciones de Tom Riddle, Albus Dumbledore le otorgó el cargo de Guardián de las Llaves y Terrenos, convirtiéndose en un pilar fundamental de la institución. Hagrid posee una afinidad casi mística con las criaturas más peligrosas y malentendidas del mundo mágico, desde dragones hasta acromántulas. Fue él quien rescató a Harry de las ruinas de su hogar en el Valle de Godric y quien lo introdujo formalmente a su destino, manteniendo una lealtad absoluta hacia Dumbledore y la Orden del Fénix hasta el final.', 'Gryffindor'),

('Minerva McGonagall', 'La Profesora Minerva McGonagall es la definición viviente de la disciplina templada con justicia. Como jefa de la Casa Gryffindor y catedrática de Transfiguración, Minerva es una de las pocas animagas registradas en el Ministerio, capaz de transformarse a voluntad en un gato atigrado. Su intelecto agudo y su dominio de la magia de combate la sitúan como una de las brujas más poderosas de su generación. Aunque mantiene una fachada de estricta rigidez y protocolo, su compasión por sus estudiantes y su feroz instinto protector son legendarios. Durante la Batalla de Hogwarts, fue ella quien orquestó la defensa del castillo, dando vida a las estatuas de piedra y liderando la carga final contra los Mortífagos con un valor que inspiró a todo el mundo mágico.', 'Gryffindor'),

('Sirius Black', 'Sirius Black, conocido en el mapa del merodeador como "Canuto", fue el primer miembro de la aristocrática familia Black en romper la tradición secular de afiliación a Slytherin y las artes oscuras. Mago de una inteligencia y atractivo excepcionales, Sirius fue el mejor amigo de James Potter y el padrino de Harry. Su vida quedó trágicamente marcada por una traición que no cometió, lo que le llevó a pasar doce años de tormento en la prisión de Azkaban, manteniendo la cordura únicamente gracias a su habilidad como animago y a la certeza de su inocencia. Tras su huida, vivió como un fugitivo dedicado por entero a la protección de Harry, representando la lucha constante entre el peso de la herencia familiar y la libertad de elegir el propio camino.', 'Gryffindor'),

('Nicholas Flamel', 'Nicholas Flamel fue un alquimista francés de prestigio inabarcable, reconocido históricamente como el único ser humano capaz de fabricar la Piedra Filosofal. Mediante el uso del Elixir de la Vida destilado de dicha piedra, Flamel y su esposa Perenelle lograron extender su existencia durante más de seiscientos años, presenciando el ascenso y caída de imperios mágicos y muggles por igual. Amigo íntimo y colaborador de Albus Dumbledore en estudios de alquimia avanzada, Nicholas personificaba la sabiduría acumulada a través de los siglos. En 1992, dio una lección final de desapego al acordar la destrucción de su piedra para evitar que cayera en manos de Voldemort, aceptando la muerte como la culminación natural de una vida extraordinariamente plena.', NULL),

('Helga Hufflepuff', 'Helga Hufflepuff fue una de las cuatro mentes maestras que fundaron el Colegio Hogwarts de Magia y Hechicería en el siglo X. Originaria de los amplios valles de Gales, Helga se distinguió de sus contemporáneos por su política de puertas abiertas y su rechazo al elitismo; mientras otros buscaban pureza de sangre o ingenio, ella prometió enseñar a todos los alumnos por igual. Poseedora de un talento inigualable para los encantamientos de cocina y la organización doméstica, ella fue la responsable de la infraestructura de los banquetes mágicos que aún hoy deleitan a los estudiantes. Su legado se basa en el trabajo duro, la paciencia incombustible y una lealtad que no busca reconocimiento, sino el bienestar común.', 'Hufflepuff'),

('Rowena Ravenclaw', 'Rowena Ravenclaw, descrita como la bruja más brillante de su época, fue la cofundadora de Hogwarts que elevó el intelecto y la curiosidad por encima de cualquier otro rasgo. Se dice que fue ella quien ideó los planos de las escaleras movedizas y el diseño arquitectónico del castillo tras soñar con un cerdo verrugoso. Su vida estuvo marcada por una melancolía intelectual y la tragedia personal relacionada con su hija Helena y la pérdida de su diadema, un artefacto que supuestamente amplificaba la sabiduría de su portador. Para Rowena, la magia no era solo una herramienta, sino una ciencia que debía ser estudiada con rigor, dejando tras de sí un legado donde "el ingenio sin medida es el mayor tesoro del hombre".', 'Ravenclaw'),

('Neville Longbottom', 'Neville Longbottom es el testimonio vivo de que el heroísmo no siempre es ruidoso ni inmediato. Criado por su estricta abuela tras el trágico destino de sus padres a manos de Bellatrix Lestrange, Neville pasó gran parte de su adolescencia luchando contra su propia torpeza y una autoestima dañada. Sin embargo, su crecimiento bajo la tutela del Ejército de Dumbledore reveló a un mago de una fortaleza moral inquebrantable. Neville no solo se convirtió en un experto mundial en Herbología, sino que durante el año más oscuro de Hogwarts, lideró la rebelión interna contra los Carrow. Su momento cumbre llegó al extraer la espada de Gryffindor del Sombrero Seleccionador y destruir el último Horrocrux de Voldemort, sellando su destino como uno de los más grandes defensores de la luz.', 'Gryffindor');

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

SELECT * FROM USUARIO;
SELECT * FROM COMENTARIO;