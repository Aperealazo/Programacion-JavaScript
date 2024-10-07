CREATE DATABASE EJ25_TU_NOMBRE;
USE EJ25_TU_NOMBRE;
CREATE TABLE alumno(
	AlumnoID INT not null  IDENTITY(1,1) PRIMARY KEY,
    Apellidos NVARCHAR(100),
    Nombre VARCHAR(100),
    Division VARCHAR(10),
    Edad INT,
    FechaNacimiento DATE
);
create table domicilio(
AlumnoID int,
DomicilioID INT not null  IDENTITY(1,1) PRIMARY KEY,
Domicilio varchar(100)
CONSTRAINT FK_Alumnos FOREIGN KEY (AlumnoID) REFERENCES Alumno(AlumnoID)
);

INSERT INTO Alumno (Apellidos, Nombre, Division, Edad, FechaNacimiento)
VALUES 
('ACOSTA ARGAÑARAZ', 'Selena Dana Damaris', '1ra', 18, '2006-06-05'),
('AGUILAR', 'Nahuel Maximiliano', '1ra', 19, '2004-12-06'),
('ANDACABA YANAJE', 'Cinthia Ayelen', '1ra', 19, '2004-12-15'),
('ARGAÑARAZ', 'Xiomara Lourdes Yoselie', '2da', 18, '2006-05-31'),
('BORDON JOFRE', 'Xiomara Abigail', '1ra', 18, '2006-02-14'),
('CACERES RAMOS', 'Carim Marisol', '1ra', 18, '2006-04-13'),
('CASIMIRO', 'Aldana Irupe', '2da', 19, '2005-07-22'),
('CASTRO', 'Maria Fatima', '2da', 18, '2006-01-09'),
('CHOQUE FUENTES', 'Juan Carlos', '2da', 18, '2005-11-21'),
('CRUZ', 'Ethel Maribel', '2da', 18, '2005-11-06'),
('GONZALEZ', 'Ramon Antonio', '2da', 20, '2004-06-13'),
('GUERRERO', 'Rocio Abigail', '1ra', 18, '2006-06-26'),
('JANCO CONDORI', 'Yoseli Vanesa', '2da', 18, '2006-01-29'),
('LOBOS FLOREZ', 'Abril Anahi', '1ra', 18, '2006-02-15'),
('MACIAS', 'Ludmila Jazmin', '2da', 18, '2005-11-04'),
('MALDONADO', 'Eugenia Eleonora', '2da', 18, '2006-05-17'),
('MAMANI', 'David Jose', '1ra', 19, '2004-10-18'),
('MAMANI', 'Franco Ruben', '1ra', 18, '2005-10-20'),
('MAMANI QUISPE', 'Alison Yamila', '1ra', 19, '2005-01-04'),
('MORALES', 'Agustina Abigail', '2da', 19, '2005-08-02'),
('OLIVA TORRES', 'Priscila Valentina', '2da', 19, '2005-02-19'),
('PAEZ CUENCA', 'Wanda Fernanda', '1ra', 18, '2006-01-23'),
('PINTOS', 'Irina Lujan', '2da', 18, '2006-03-28'),
('PINTOS', 'Sofia Magali', '1ra', 18, '2006-01-07'),
('REQUEZ COPA', 'Brayan', '2da', 19, '2004-12-01'),
('SORIA', 'Brisa Antonella', '1ra', 20, '2004-04-09'),
('VALDA GALLARDO', 'Corina Victoria Guadalupe', '2da', 18, '2006-06-26'),
('VEGA TOBARES', 'Dana Salome', '1ra', 18, '2006-05-19'),
('YALEVA CRUZ', 'Camila Belen', '1ra', 19, '2005-08-27');

INSERT INTO Domicilio (AlumnoID, Domicilio)
VALUES 
(1, 'B° 4 de junio'),
(2, 'Paseo Colon B° San Martin'),
(3, 'Paseo Colon B° San Martin'),
(4, 'Calle San Nicolas B° La Usina'),
(5, 'Calle Joaquin V. Gonzalez'),
(6, 'B° La Usina'),
(7, 'B° 1 de Febrero'),
(8, 'Av Joaquin V Gonzalez'),
(9, 'B° ISLAS MALVINAS'),
(10, 'Calle 9 de julio B° Alto Verde'),
(11, 'B° Alto Verde'),
(12, 'Calle Florencio Davila'),
(13, 'Calle Santa Rita B° Hipodromo'),
(14, 'B° Lomas del Mirador'),
(15, 'Calle Florencio Davila S/N'),
(16, 'B° San Ceferino'),
(17, 'B° Hipodromo'),
(18, 'Calle Reconquista B° Hipodromo'),
(19, 'B° Alto Verde'),
(20, 'Calle 9 de Julio B° La Usina'),
(21, 'B° 1 de Febrero'),
(22, 'Calle San Jose Pje Santa Rita'),
(23, 'B° Republica Argentina'),
(24, 'B° El Asfalto'),
(25, 'Calle Libertad B° San Ceferino'),
(26, 'Av Guillermo Iribarren'),
(27, 'Av Guillermo Iribarren'),
(28, 'B° 40 Viviendas - Vichigasta'),
(29, 'B° Hipodromo');



select *  from domicilio;
select *  from alumno;
--SUBIR TRABAJO-> https://forms.gle/2Sa7vpmE8vy1BkX99