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
from .models import AspirantesDoc2, Estudiante

@api_view(['GET'])
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
            'fechaRegistro': estudiante.fechaRegistro.strftime('%Y-%m-%d'),  # Formatear la fecha como una cadena
            'semestre': estudiante.semestre
        })

    return JsonResponse(data, safe=False)
@api_view(['GET'])
def tablaCompletaPracticas_list(request,semestreEntrada):
    resultados = AspirantesDoc2.objects.filter(
        codigo__in=Estudiante.objects.values('codigo'),
        semestreRegistro=semestreEntrada  
    )
    
    # Convertir el QuerySet en una lista de diccionarios
    resultados_serializable = []
    for item in resultados:
        estudiante = Estudiante.objects.get(codigo=item.codigo,estado=True)
        print()
        if estudiante is not None:
            resultado_serializable = {
                'id': item.id,
                'semestreRegistro': item.semestreRegistro,
                'semestre': estudiante.programa.split('-')[1],
                'asignatura': '79073-7L',
                'asignaturanombre': 'PRACTICA EMPRESARIAL',
                'practicanteprograma':'SISTEMAS',
                'asisID':'8',
                'practicantesemestre': estudiante.programa,
                'practicantecodigo':estudiante.codigo,
                'practicanteemail':estudiante.emailInstitucional,
                'practicanteemailOtro':estudiante.emailPersonal,
                'practicantetelefono':estudiante.telefono,
                'practicantenombre':estudiante.nombre,
                'practicanteestado':'',
                'seguimientoinicio':'',  
                'seguimientocierre':'',
                'notacierre':'',
                'notamecanismo':'',
                'notafecha':'',
                'docentemonitor':'',
                'docenteasignacion':'',
                'matriculaasis':'',
                'matriculaok':'',
                'matriculafecha':'',
                'item': item.item,
                'periodoPractica': item.periodoPractica,
                'aprobacionProg': item.aprobacionProg,
                'comentariosProg': item.comentariosProg,
                'matriculadoAcadFinanc': item.matriculadoAcadFinanc,
                'nombres': item.nombres,
                'apellidos': item.apellidos,
                'codigo': item.codigo,
                'cedula': item.cedula,
                'celular': item.celular,
                'correo': item.correo,
                'planEstudios': item.planEstudios,
                'jornada': item.jornada,
                'inscripcion': item.inscripcion,
                'cursoInduccion': item.cursoInduccion,
                'rutaPreparacionVl': item.rutaPreparacionVl,
                'envioHv': item.envioHv,
                'tituloTecnico': item.tituloTecnico,
                'practicaDondeLabora': item.practicaDondeLabora,
                'estadoUbicacion': item.estadoUbicacion,
                'comentariosProcesoUbicacion': item.comentariosProcesoUbicacion,
                'tipoContrato': item.tipoContrato,
                'fechaInicio': item.fechaInicio,
                'fechaFinal': item.fechaFinal,
                'datosEncargadoProcesoSeleccion': item.datosEncargadoProcesoSeleccion,
                'datosTutor': item.datosTutor,
                'documentosPendientes': item.documentosPendientes,
                'sector': item.sector,
            }
            resultados_serializable.append(resultado_serializable)
    

    return JsonResponse(resultados_serializable, safe=False)

@api_view(['POST'])
def crearPorListadoEstudiantes(request):
    if request.method == 'POST':
        archivo = request.FILES.get('archivo')
        semestrePerteneciente = request.POST.get('semestre')
        
        if not archivo:
            return Response({'error': 'No se proporcionó ningún archivo'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            df = crearDfEstudiantes(archivo)
            
            estudiantes_anteriores = Estudiante.objects.filter(semestre=semestrePerteneciente)
            #estudiantes_anteriores.delete()
            if len(estudiantes_anteriores) == 0:
                for index, row in df.iterrows():
                    programa = row['PROG -']
                    codigo = row['CÓDIGO'].split('.')[0]    
                    emailInstitucional = row['EMAIL INSTITUCIONAL']
                    emailPersonal = row['EMAIL PERSONAL']
                    telefono = row['TELÉFONO'].split('.')[0]   
                    nombre = row['NOMBRE']
                    nuevo_estudiante = Estudiante(
                            programa=programa,
                            codigo=codigo,
                            emailInstitucional=emailInstitucional,
                            emailPersonal=emailPersonal,
                            telefono=telefono,
                            nombre=nombre,
                            semestre=semestrePerteneciente,
                            estado=True
                        )
                    nuevo_estudiante.save()
            else:
                # Crea una lista para almacenar los códigos de estudiantes anteriores
                codigos_estudiantes = [str(estudiante.codigo) for estudiante in estudiantes_anteriores]

                # Elimina ".0" de los códigos en el DataFrame df
                df['CÓDIGO'] = df['CÓDIGO'].astype(str).str.replace('.0', '', regex=False)

                # Convierte los códigos en df a una lista
                codigos_df = df['CÓDIGO'].tolist()
                # Compara los códigos en df con los códigos de estudiantes anteriores
                for codigo in codigos_df:
                    if codigo not in codigos_estudiantes:
                        estudianteAcrear = df[df['CÓDIGO'] == codigo]
                        programa = estudianteAcrear['PROG -'].values[0]
                        codigo_estudiante = estudianteAcrear['CÓDIGO'].values[0].split('.')[0]
                        email_institucional = estudianteAcrear['EMAIL INSTITUCIONAL'].values[0]
                        email_personal = estudianteAcrear['EMAIL PERSONAL'].values[0]
                        telefono = estudianteAcrear['TELÉFONO'].values[0].split('.')[0]
                        nombre = estudianteAcrear['NOMBRE'].values[0]
                        nuevo_estudiante = Estudiante(
                            programa=programa,
                            codigo=codigo_estudiante,
                            emailInstitucional=email_institucional,
                            emailPersonal=email_personal,
                            telefono=telefono,
                            nombre=nombre,
                            semestre=semestrePerteneciente,
                            estado=True
                        )
                        nuevo_estudiante.save()
                        print(f'Estudiante con el código {codigo} se registro: ',estudianteAcrear)
                    else:
                        estudiante_a_actualizar = Estudiante.objects.get(codigo=codigo)
                        estudiante_a_actualizar.estado = True
                        estudiante_a_actualizar.save()
                        print(f'Estado(True) actualizado para el estudiante con código {codigo}') 
                # Compara los códigos en df con los códigos de estudiantes anteriores
                for codigo in codigos_estudiantes:
                    if codigo not in codigos_df:
                        estudiante_a_actualizar = Estudiante.objects.get(codigo=codigo)
                        estudiante_a_actualizar.estado = False
                        estudiante_a_actualizar.save()
                        print(f'Estado(false) actualizado para el estudiante con código {codigo}')


            return Response({'Estado': "Estudiantes agregados"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

@api_view(['POST'])
def crearPorListadoAspirantes(request):
    if request.method == 'POST':
        archivo = request.FILES.get('archivo')
        semestrePerteneciente = request.POST.get('semestre')
        
        if not archivo:
            return Response({'error': 'No se proporcionó ningún archivo'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            df = crearDfAspirantes(archivo)
            aspirantes_a_eliminar = Estudiante.objects.filter(semestre=semestrePerteneciente)
            aspirantes_a_eliminar.delete()
            for index, row in df.iterrows():
                item = row['ITEM']
                periodo_de_practica = row['PERIODO DE PRÁCTICA']
                aprobacion_del_prog_academico = row['APROBACIÓN DEL PROG ACADEMICO']
                comentarios_del_prog_academico = row['COMENTARIOS DEL PROG ACADÉMICO']
                matriculado_acad_y_financ = row['MATRICULADO ACAD Y FINANC']
                nombre = row['NOMBRE']
                apellidos = row['APELLIDOS']
                codigo = row['CODIGO'].split('.')[0]   
                cedula = row['CEDULA'].split('.')[0]   
                celular = row['CELULAR'].split('.')[0]   
                correo = row['CORREO']
                plan_de_estudios = row['PLAN DE ESTUDIOS ']
                jornada = row['JORNADA']
                inscripcion = row['INSCRIPCION']
                curso_induccion_y_rl = row['CURSO INDUCCION Y RL']
                ruta_de_preparacion_a_la_vida_laboral = row['RUTA DE PREPARACION A LA VIDA LABORAL']
                envio_hv = row['ENVIÓ HV']
                tiene_titulo_tecnico_o_tecnologo = row['TIENE TITULO TÉCNICO O TECNÓLOGO']
                practica_donde_labora_empresa_flia_emprendim_otro = row['PRACTICA DONDE LABORA, EMPRESA FLIAR, EMPRENDIM, OTRO']
                estado_de_ubicacion = row['ESTADO DE UBICACIÓN']
                comentarios_proceso_de_ubicacion_y_otros = row['COMENTARIOS PROCESO DE UBICACIÓN Y OTROS']
                tipo_de_contrato = row['TIPO DE CONTRATO']
                fecha_inicio = row['FECHA INICIO']
                fecha_final = row['FECHA FINAL']
                datos_encargado_proceso_de_seleccion = row['DATOS ENCARGADO PROCESO DE SELECCION']
                datos_tutor_o_jefe_directo = row['DATOS TUTOR O JEFE DIRECTO']
                documentos_pendientes_de_formalizacion = row['DOCUMENTOS PENDIENTES DE FORMALIZACIÓN']
                sector = row['SECTOR']

                nuevo_aspirante = AspirantesDoc2(
                    item=item,
                    periodoPractica=periodo_de_practica,
                    aprobacionProg=aprobacion_del_prog_academico,
                    comentariosProg=comentarios_del_prog_academico,
                    matriculadoAcadFinanc=matriculado_acad_y_financ,
                    nombres=nombre,
                    apellidos=apellidos,
                    codigo=codigo,
                    cedula=cedula,
                    celular=celular,
                    correo=correo,
                    planEstudios=plan_de_estudios,
                    jornada=jornada,
                    inscripcion=inscripcion,
                    cursoInduccion=curso_induccion_y_rl,
                    rutaPreparacionVl=ruta_de_preparacion_a_la_vida_laboral,
                    envioHv=envio_hv,
                    tituloTecnico=tiene_titulo_tecnico_o_tecnologo,
                    practicaDondeLabora=practica_donde_labora_empresa_flia_emprendim_otro,
                    estadoUbicacion=estado_de_ubicacion,
                    comentariosProcesoUbicacion=comentarios_proceso_de_ubicacion_y_otros,
                    tipoContrato=tipo_de_contrato,
                    fechaInicio=fecha_inicio,
                    fechaFinal=fecha_final,
                    datosEncargadoProcesoSeleccion=datos_encargado_proceso_de_seleccion,
                    datosTutor=datos_tutor_o_jefe_directo,
                    documentosPendientes=documentos_pendientes_de_formalizacion,
                    sector=sector,
                    semestreRegistro=semestrePerteneciente
                )
                nuevo_aspirante.save()
            return Response({'Estado': "Estudiantes agregados"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
          

@api_view(['GET'])
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
 
def crearDfAspirantes(archivoExcel):
    df = pd.read_excel(archivoExcel, skiprows=2)
    df = df.dropna(how='all')
    df = df.astype(str)
    return df


def crearDfEstudiantes(archivoExcel):
    # Lee el archivo Excel en un DataFrame de pandas
    df = pd.read_excel(archivoExcel, sheet_name='Sheet1', usecols="B:H", skiprows=11)
    df = df[df['PROG -'] != 'SEM']
    df = df.dropna(how='all')
    df = df.astype(str)
    return df

