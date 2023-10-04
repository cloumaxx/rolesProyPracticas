USE rolesdb;
insert IGNORE into followPractApp_docentemonitor (nombre, apellido, cedula, correoPersonal, correoInstitucional, contrasena, fechaNacimiento, estado, horasDispobibles)
VALUES
    ('Johann', 'Bernoulli', '314159265', 'thermo@dynamics.io', 'mathaxs@usbcali.edu', 'safepassword', '1700-02-08', false, 10),
    ('Leonhard', 'Euler', '271828182', 'leonhard.euler@mathwiz.io', 'mathaxs@usbcali.edu', 'eulerpassword', '1707-04-15', true, 15),
    ('Carl Friedrich', 'Gauss', '141421356', 'carl.gauss@mathwiz.io', 'mathaxs@usbcali.edu', 'gausspassword', '1777-04-30', true, 12),
    ('Paul', 'Dirac', '303030303', 'paul.dirac@quantum.io', 'physics@usbcali.edu', 'diracpassword', '1902-08-08', true, 8),
    ('Wolfgang', 'Pauli', '161803399', 'wolfgang.pauli@quantum.io', 'physics@usbcali.edu', 'paulipassword', '1900-04-25', true, 10),
    ('Max', 'Planck', '662606935', 'max.planck@quantum.io', 'physics@usbcali.edu', 'planckpassword', '1858-04-23', true, 14),
    ('Richard', 'Feynman', '345678912', 'richard.feynman@physicist.io', 'physics@usbcali.edu', 'feynmanpassword', '1918-05-11', true, 18),
    ('Marie', 'Curie', '226226226', 'marie.curie@radiance.io', 'science@usbcali.edu', 'mariepassword', '1867-11-07', true, 11);


COMMIT;
