from rest_framework import serializers 
from followPractApp.models import Estudiante, Semestre
from followPractApp.models import AspirantesDoc2

class FollowPractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = ('id',
                    'programa',
                    'codigo',
                    'emailInstitucional',
                    'emailPersonal',
                    'telefono',
                    'nombre',
                    'fechaRegistro')

class FollowPractSerializer2(serializers.ModelSerializer):
    class Meta:
        model = AspirantesDoc2

class serializerSemestre(serializers.ModelSerializer):
    class Meta:
        model = Semestre
        fields = ('id',
                    'semestre',
                    'fechaInicio',
                    'fechaFin',
                    'fechaRegistro',
                    'estado')