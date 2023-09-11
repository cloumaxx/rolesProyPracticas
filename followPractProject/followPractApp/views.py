from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from followPractApp.followPractAppSerializer import Estudiante
from rest_framework.decorators import api_view
from django.core import serializers

@api_view(['GET', 'POST', 'DELETE'])
def estudiantes_list(request):
    estudiantes = Estudiante.objects.all()
    data = []

    for estudiante in estudiantes:
        data.append({
            'id': estudiante.id,
            'programa': estudiante.programa,
            'codigo': estudiante.codigo,
            'emailInstitucional': estudiante.emailInstitucional,
            'emailPersonal': estudiante.emailPersonal,
            'telefono': estudiante.telefono,
            'nombre': estudiante.nombre,
            'fechaRegistro': estudiante.fechaRegistro.strftime('%Y-%m-%d')  # Formatear la fecha como una cadena
        })

    return JsonResponse(data, safe=False)
 
@api_view(['GET', 'PUT', 'DELETE'])
def estudiante_detail(request, estudiante_id):
    try:
        estudiante = Estudiante.objects.get(id=estudiante_id)
        data = {
            'id': estudiante.id,
            'programa': estudiante.programa,
            'codigo': estudiante.codigo,
            'emailInstitucional': estudiante.emailInstitucional,
            'emailPersonal': estudiante.emailPersonal,
            'telefono': estudiante.telefono,
            'nombre': estudiante.nombre,
            'fechaRegistro': estudiante.fechaRegistro.strftime("%Y-%m-%d")
        }
        return JsonResponse(data)
    except Estudiante.DoesNotExist:
        return JsonResponse({'error': 'Estudiante no encontrado'}, status=404)
 
    # GET / PUT / DELETE tutorial
    
     