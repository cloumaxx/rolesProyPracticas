from rest_framework import serializers
from .models import DocenteMonitor

class DocenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocenteMonitor
        fields ='__all__'
        