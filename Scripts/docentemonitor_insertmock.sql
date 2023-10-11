USE rolesdb;

insert IGNORE into followPractApp_docentemonitor(id, nombre, apellido, cedula, correoPersonal, correoInstitucional, contrasena, fechaNacimiento, estado, horasDispobibles)
VALUES
    (1, 'Johann', 'Bernoulli', '314159265', 'thermo@dynamics.io', 'mathaxs@usbcali.edu', 'safepassword', '1700-02-08', 0, 10),
    (34, 'Leonhard', 'Euler', '271828182', 'leonhard.euler@mathwiz.io', 'mathaxs@usbcali.edu', 'eulerpassword', '1707-04-15', 1, 15),
    (35, 'Carl Friedrich', 'Gauss', '141421356', 'carl.gauss@mathwiz.io', 'mathaxs@usbcali.edu', 'gausspassword', '1777-04-30', 1, 12),
    (36, 'Paul', 'Dirac', '303030303', 'paul.dirac@quantum.io', 'physics@usbcali.edu', 'diracpassword', '1902-08-08', 1, 8),
    (37, 'Wolfgang', 'Pauli', '161803399', 'wolfgang.pauli@quantum.io', 'physics@usbcali.edu', 'paulipassword', '1900-04-25', 1, 10),
    (38, 'Max', 'Planck', '662606935', 'max.planck@quantum.io', 'physics@usbcali.edu', 'planckpassword', '1858-04-23', 1, 14),
    (39, 'Richard', 'Feynman', '345678912', 'richard.feynman@physicist.io', 'physics@usbcali.edu', 'feynmanpassword', '1918-05-11', 1, 18),
    (40, 'Marie', 'Curie', '226226226', 'marie.curie@radiance.io', 'science@usbcali.edu', 'mariepassword', '1867-11-07', 1, 11)
ON DUPLICATE KEY UPDATE
    nombre = VALUES(nombre),
    apellido = VALUES(apellido),
    cedula = VALUES(cedula),
    correoPersonal = VALUES(correoPersonal),
    correoInstitucional = VALUES(correoInstitucional),
    contrasena = VALUES(contrasena),
    fechaNacimiento = VALUES(fechaNacimiento),
    estado = VALUES(estado),
    horasDispobibles = VALUES(horasDispobibles);

COMMIT;
