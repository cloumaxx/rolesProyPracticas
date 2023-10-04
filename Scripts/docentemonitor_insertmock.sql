USE rolesdb;
insert IGNORE into followPractApp_docentemonitor (nombre, apellido, cedula, correoPersonal, correoInstitucional, contrasena, fechaNacimiento, estado, horasDispobibles)
VALUES
    ('Johann', 'Bernoulli', '314159265', 'thermo@dynamics.io', 'mathaxs@usbcali.edu', 'safepassword', '1700-02-08', 'Inactivo', 10),
    ('Leonhard', 'Euler', '271828182', 'leonhard.euler@mathwiz.io', 'mathaxs@usbcali.edu', 'eulerpassword', '1707-04-15', 'Activo', 15),
    ('Carl Friedrich', 'Gauss', '141421356', 'carl.gauss@mathwiz.io', 'mathaxs@usbcali.edu', 'gausspassword', '1777-04-30', 'Activo', 12),
    ('Paul', 'Dirac', '303030303', 'paul.dirac@quantum.io', 'physics@usbcali.edu', 'diracpassword', '1902-08-08', 'Activo', 8),
    ('Wolfgang', 'Pauli', '161803399', 'wolfgang.pauli@quantum.io', 'physics@usbcali.edu', 'paulipassword', '1900-04-25', 'Activo', 10),
    ('Max', 'Planck', '662606935', 'max.planck@quantum.io', 'physics@usbcali.edu', 'planckpassword', '1858-04-23', 'Activo', 14),
    ('Richard', 'Feynman', '345678912', 'richard.feynman@physicist.io', 'physics@usbcali.edu', 'feynmanpassword', '1918-05-11', 'Activo', 18),
    ('Marie', 'Curie', '226226226', 'marie.curie@radiance.io', 'science@usbcali.edu', 'mariepassword', '1867-11-07', 'Activo', 11);


COMMIT;
