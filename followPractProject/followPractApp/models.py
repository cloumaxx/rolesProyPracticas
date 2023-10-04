from django.db import models

# Create your models here.
class Estudiante(models.Model):
    id = models.AutoField(primary_key=True)
    programa = models.CharField(max_length=50)
    codigo = models.CharField(max_length=50)
    emailInstitucional = models.CharField(max_length=100)
    emailPersonal = models.CharField(max_length=100)
    telefono = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)
    fechaRegistro = models.DateField(auto_now_add=True)
    estado = models.BooleanField(default=True)
    semestre = models.CharField(max_length=10)
    
    def __str__(self):
        return self.nombre
    
class AspirantesDoc2(models.Model):
    id = models.AutoField(primary_key=True)
    item = models.CharField(max_length=3000)
    periodoPractica = models.CharField(max_length=100)
    aprobacionProg = models.CharField(max_length=100)
    comentariosProg = models.CharField(max_length=100)
    matriculadoAcadFinanc = models.CharField(max_length=20)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    codigo = models.CharField(max_length=100)
    cedula = models.CharField(max_length=100)
    celular = models.CharField(max_length=100)
    correo = models.CharField(max_length=100)
    planEstudios = models.CharField(max_length=100)
    jornada = models.CharField(max_length=100)
    inscripcion = models.CharField(max_length=100)
    cursoInduccion = models.CharField(max_length=100)
    rutaPreparacionVl = models.CharField(max_length=100)
    envioHv = models.CharField(max_length=100)
    tituloTecnico = models.CharField(max_length=350) 
    practicaDondeLabora = models.CharField(max_length=100)
    estadoUbicacion = models.CharField(max_length=100)
    comentariosProcesoUbicacion = models.CharField(max_length=500)
    tipoContrato = models.CharField(max_length=200)
    fechaInicio = models.DateField(auto_now_add=True)
    fechaFinal = models.DateField(auto_now_add=True)
    datosEncargadoProcesoSeleccion = models.CharField(max_length=500)
    datosTutor = models.CharField(max_length=250)
    documentosPendientes = models.CharField(max_length=100)
    sector = models.CharField(max_length=100)
    semestreRegistro = models.CharField(max_length=50)
    
    def __str__(self):
        return self.codigo

"""class DocenteMonitor(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    correoPersonal = models.EmailField()
    correoInstitucional = models.EmailField()
"""
class Semestre(models.Model):
    id = models.AutoField(primary_key=True)
    fechaInicio = models.DateField()
    fechaFin = models.DateField()
    numeroSemestre = models.CharField(max_length=20)
    vigente = models.BooleanField(default=True)