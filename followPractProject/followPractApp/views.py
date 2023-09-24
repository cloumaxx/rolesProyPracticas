from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.response import Response
from followPractApp.followPractAppSerializer import Estudiante
from rest_framework.decorators import api_view
from django.core import serializers
import pandas as pd
from rest_framework.decorators import api_view
from rest_framework.request import Request
from .models import Estudiante

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



@api_view(['POST'])
def crearEstudiante(request):
    if request.method == 'POST':
        estudiante = request.data  # Utiliza request.data para acceder a los datos JSON enviados en la solicitud POST.

        nuevo_estudiante = Estudiante(
            programa=estudiante['programa'],
            codigo=estudiante['codigo'],
            emailInstitucional=estudiante['emailInstitucional'],
            emailPersonal=estudiante['emailPersonal'],
            telefono=estudiante['telefono'],
            nombre=estudiante['nombre']
        )
        nuevo_estudiante.save()

        return JsonResponse({'message': 'Estudiante creado con éxito', 'id': nuevo_estudiante.id}, status=201)



@api_view(['POST'])
def crearPorListadoEstudiantes(request):
    if request.method == 'POST':
        archivo = request.FILES.get('archivo')
        semestrePerteneciente = request.POST.get('semestre')
        
        if not archivo:
            return Response({'error': 'No se proporcionó ningún archivo'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            df = crearDf(archivo)
            estudiantes_a_eliminar = Estudiante.objects.filter(semestre=semestrePerteneciente)
            estudiantes_a_eliminar.delete()
            for index, row in df.iterrows():
                programa = row['PROG -']
                codigo = row['CÓDIGO'].split('.')[0]    
                emailInstitucional = row['EMAIL INSTITUCIONAL']
                emailPersonal = row['EMAIL PERSONAL']
                telefono = row['TELÉFONO']
                nombre = row['NOMBRE']
                
                # Verifica si ya existe un estudiante con el mismo código en el mismo semestre
                        
               
                nuevo_estudiante = Estudiante(
                        programa=programa,
                        codigo=codigo,
                        emailInstitucional=emailInstitucional,
                        emailPersonal=emailPersonal,
                        telefono=telefono,
                        nombre=nombre,
                        semestre=semestrePerteneciente
                    )
                nuevo_estudiante.save()
                
                

            return Response({'Estado': "Estudiantes agregados"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
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
 

def crearDf(archivoExcel):
    # Lee el archivo Excel en un DataFrame de pandas
    df = pd.read_excel(archivoExcel, sheet_name='Sheet1', usecols="B:H", skiprows=11)
    df = df[df['PROG -'] != 'SEM']
    df = df.dropna(how='all')
    df = df.astype(str)
    return df

