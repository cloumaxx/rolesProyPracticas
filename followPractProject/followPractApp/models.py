from django.db import models

# Create your models here.
class Estudiante(models.Model):
    id = models.AutoField(primary_key=True)
    programa = models.CharField(max_length=50)
    codigo = models.CharField(max_length=50)
    emailInstitucional = models.CharField(max_length=80)
    emailPersonal = models.CharField(max_length=80)
    telefono = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)
    fechaRegistro = models.DateField(auto_now_add=True)
    semestre = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre
    
class AspirantesDoc2(models.Model):
    item = models.AutoField(primary_key=True)
    periodoPractica = models.CharField(max_length=80)
    aprobacionProg = models.CharField(max_length=80)
    comentariosProg = models.CharField(max_length=80)
    matriculadoAcadFinanc = models.CharField(max_length=80)
    nombres = models.CharField(max_length=80)
    apellidos = models.CharField(max_length=80)
    codigo = models.CharField(max_length=80)
    cedula = models.CharField(max_length=80)
    celular = models.CharField(max_length=80)
    correo = models.CharField(max_length=80)
    planEstudios = models.CharField(max_length=80)
    jornada = models.CharField(max_length=80)
    inscripcion = models.CharField(max_length=80)
    cursoInduccion = models.CharField(max_length=80)
    rutaPreparacionVl = models.CharField(max_length=80)
    envioHv = models.CharField(max_length=80)
    tituloTecnico = models.CharField(max_length=80) 
    practicaDondeLabora = models.CharField(max_length=80)
    estadoUbicacion = models.CharField(max_length=80)
    comentariosProcesoUbicacion = models.CharField(max_length=80)
    tipoContrato = models.CharField(max_length=80)
    fechaInicio = models.DateField(auto_now_add=True)
    fechaFinal = models.DateField(auto_now_add=True)
    datosEncargadoProcesoSeleccion = models.CharField(max_length=80)
    datosTutor = models.CharField(max_length=80)
    documentosPendientes = models.CharField(max_length=80)
    sector = models.CharField(max_length=80)