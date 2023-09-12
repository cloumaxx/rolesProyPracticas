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