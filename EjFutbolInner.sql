-- Crear la base de datos
CREATE DATABASE Futbol2024;
-- Usar la base de datos creada
USE Futbol2024;

-- Crear la tabla de Provincias
CREATE TABLE Provincias (
    id_provincia INT IDENTITY(1,1) PRIMARY KEY,
    nombre_provincia VARCHAR(50)
);

-- Insertar datos en Provincias
INSERT INTO Provincias (nombre_provincia)
VALUES 
('Buenos Aires'),
('Córdoba'),
('Santa Fe'),
('Mendoza'),
('Misiones');

-- Crear la tabla de Equipos (clubs de jugadores de la selección 2024)
CREATE TABLE Equipos (
    id_equipo INT IDENTITY(1,1) PRIMARY KEY,
    nombre_equipo VARCHAR(50),
    liga VARCHAR(50)
);

-- Insertar datos en Equipos
INSERT INTO Equipos (nombre_equipo, liga)
VALUES 
('Aston Villa', 'Premier League'),
('Atletico Madrid', 'La Liga'),
('Tottenham Hotspur', 'Premier League'),
('Benfica', 'Primeira Liga'),
('Sevilla FC', 'La Liga'),
('Inter de Milan', 'Serie A'),
('Liverpool FC', 'Premier League'),
('Paris Saint-Germain', 'Ligue 1'),
('Fiorentina', 'Serie A'),
('Manchester City', 'Premier League'),
('River Plate', 'Liga Profesional Argentina'),
('Nottingham Forest', 'Premier League');

-- Crear la tabla de Selecciones
CREATE TABLE Selecciones (
    id_seleccion INT IDENTITY(1,1) PRIMARY KEY,
    nombre_seleccion VARCHAR(50),
    confederacion VARCHAR(50)
);

-- Insertar datos en Selecciones
INSERT INTO Selecciones (nombre_seleccion, confederacion)
VALUES 
('Argentina', 'CONMEBOL');

-- Crear la tabla de Jugadores
CREATE TABLE Jugadores (
    id_jugador INT IDENTITY(1,1) PRIMARY KEY,
    nombre_jugador VARCHAR(50),
    id_provincia INT,
    valor_transferencia NUMERIC(18, 2),
    id_equipo INT,
    id_seleccion INT,
    FOREIGN KEY (id_provincia) REFERENCES Provincias(id_provincia),
    FOREIGN KEY (id_equipo) REFERENCES Equipos(id_equipo),
    FOREIGN KEY (id_seleccion) REFERENCES Selecciones(id_seleccion)
);

-- Insertar jugadores de la selección argentina de 2024 con sus equipos
INSERT INTO Jugadores (nombre_jugador, id_provincia, valor_transferencia, id_equipo, id_seleccion)
VALUES 
-- Titulares
('Emiliano Martínez', 4, 75000000.00, 1, 1),  -- Aston Villa
('Nahuel Molina', 1, 60000000.00, 2, 1),     -- Atletico Madrid
('Cristian Romero', 2, 80000000.00, 3, 1),   -- Tottenham Hotspur
('Nicolás Otamendi', 1, 40000000.00, 4, 1),  -- Benfica
('Marcos Acuña', 3, 35000000.00, 5, 1),      -- Sevilla FC
('Rodrigo De Paul', 1, 85000000.00, 2, 1),   -- Atletico Madrid
('Enzo Fernández', 4, 100000000.00, 4, 1),   -- Benfica
('Alexis Mac Allister', 3, 70000000.00, 6, 1), -- Liverpool FC
('Lionel Messi', 1, 500000000.00, 8, 1),     -- Paris Saint-Germain
('Lautaro Martínez', 2, 120000000.00, 6, 1), -- Inter de Milan
('Ángel Di María', 3, 60000000.00, 5, 1),    -- Fiorentina
-- Suplentes
('Franco Armani', 5, 30000000.00, 11, 1),    -- River Plate
('Gonzalo Montiel', 1, 25000000.00, 5, 1),   -- Sevilla FC
('Lisandro Martínez', 2, 55000000.00, 12, 1), -- Nottingham Forest
('Leandro Paredes', 1, 60000000.00, 9, 1),   -- Fiorentina
('Nicolás González', 3, 40000000.00, 9, 1),  -- Fiorentina
('Julián Álvarez', 3, 90000000.00, 10, 1);   -- Manchester City

-- Ejercicio 1 
/*
Jugadores y Equipos:
Realiza una consulta utilizando INNER JOIN para obtener una lista de todos los jugadores de la selección argentina
junto con el nombre de su equipo y la provincia de la que son. La consulta debe mostrar el nombre del jugador, 
la provincia y el nombre del equipo.
*/

SELECT j.nombre_jugador AS Jugador, p.nombre_provincia AS Provincia, e.nombre_equipo  AS Equipo
FROM Jugadores j
INNER JOIN Provincias p ON j.id_provincia = p.id_provincia
INNER JOIN Equipos e ON j.id_equipo = e.id_equipo;

-- Ejercicio 2 

-- Ejercicio 3 

-- Ejercicio 4 

-- Ejercicio 5

