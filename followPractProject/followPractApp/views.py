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
from .models import AspirantesDoc2, DocenteMonitor, Estudiante, Semestre
from django.forms.models import model_to_dict

@api_view(['GET'])
def estudiantes_list(request):
    try:
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
                'fechaRegistro': estudiante.fechaRegistro.strftime('%Y-%m-%d'),  
                'semestre': estudiante.semestre,
                'estado': estudiante.estado,
                'idDocenteMonitor': estudiante.idDocenteMonitor

            })
        return Response(data, status=status.HTTP_200_OK)
    except Estudiante.DoesNotExist:
        return JsonResponse({'error': 'No hay docentes'}, status=404)

@api_view(['GET'])
def tablaCompletaPracticas_list(request,semestreEntrada):
    try:
        resultados = AspirantesDoc2.objects.filter(
            codigo__in=Estudiante.objects.values('codigo'),
            semestreRegistro=semestreEntrada  
        )
        
        # Convertir el QuerySet en una lista de diccionarios
        resultados_serializable = []
        for item in resultados:
            estudiante = Estudiante.objects.get(codigo=item.codigo)
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
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
@api_view(['POST'])
def crearPorListadoEstudiantes(request):
    if request.method == 'POST':
        estudiantes_creados = []
        estudiantes_nuevos = []
        estudiantes_activados = []
        estudiantes_inactivados = []
        archivo = request.FILES.get('archivo')
        semestrePerteneciente = request.POST.get('semestre')
        
        if not archivo:
            return Response({'error': 'No se proporcionó ningún archivo'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            df = crearDfEstudiantes(archivo)
            
            estudiantes_anteriores = Estudiante.objects.filter(semestre=semestrePerteneciente)
            #estudiantes_anteriores.delete()
            if len(estudiantes_anteriores) == 0:
                contEstudiantes = 0
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
                    estudiantes_creados.append(nuevo_estudiante)
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
                        estudiantes_nuevos.append(nuevo_estudiante)
                    else:
                        estudiante_a_actualizar = Estudiante.objects.get(codigo=codigo)
                        estudiante_a_actualizar.estado = True
                        estudiante_a_actualizar.save()
                        estudiantes_activados.append(estudiante_a_actualizar)
                # Compara los códigos en df con los códigos de estudiantes anteriores

            cambiosRealizados = {
                "Estudiantes creados": [model_to_dict(estudiante) for estudiante in estudiantes_creados],
                "Estudiantes nuevos": [model_to_dict(estudiante) for estudiante in estudiantes_nuevos],
                "Estudiantes activados": [model_to_dict(estudiante) for estudiante in estudiantes_activados],
                "Estudiantes inactivados": [model_to_dict(estudiante) for estudiante in estudiantes_inactivados]
            }                

            return Response({'Cambios': cambiosRealizados}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

@api_view(['POST'])
def crearPorListadoAspirantes(request):
    if request.method == 'POST':
        AspirantesDoc2_creados = []
        AspirantesDoc2_nuevos = []
        AspirantesDoc2_activados = []
        AspirantesDoc2_inactivados = []
        archivo = request.FILES.get('archivo')
        semestrePerteneciente = request.POST.get('semestre')
        
        if not archivo:
            return Response({'error': 'No se proporcionó ningún archivo'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            df = crearDfAspirantes(archivo)
            aspirantes_anteriores = AspirantesDoc2.objects.filter(semestreRegistro=semestrePerteneciente)
            
            if len(aspirantes_anteriores) == 0:
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
                    AspirantesDoc2_creados.append(model_to_dict(nuevo_aspirante))
            else:
                codigos_aspirantes = [str(aspirante.codigo) for aspirante in aspirantes_anteriores]
                df['CODIGO'] = df['CODIGO'].astype(str).str.split('.').str[0]
                codigos_df = df['CODIGO'].tolist()
                
                for codigo in codigos_df:
                    if codigo not in codigos_aspirantes:
                        aspirante_nuevo = df[df['CODIGO'] == codigo].iloc[0]
                        
                        nuevo_aspirante = AspirantesDoc2(
                            item=aspirante_nuevo['ITEM'],
                            periodoPractica=aspirante_nuevo['PERIODO DE PRÁCTICA'],
                            aprobacionProg=aspirante_nuevo['APROBACIÓN DEL PROG ACADEMICO'],
                            comentariosProg=aspirante_nuevo['COMENTARIOS DEL PROG ACADÉMICO'],
                            matriculadoAcadFinanc=aspirante_nuevo['MATRICULADO ACAD Y FINANC'],
                            nombres=aspirante_nuevo['NOMBRE'],
                            apellidos=aspirante_nuevo['APELLIDOS'],
                            codigo=aspirante_nuevo['CODIGO'].split('.')[0],
                            cedula=aspirante_nuevo['CEDULA'].split('.')[0],
                            celular=aspirante_nuevo['CELULAR'].split('.')[0],
                            correo=aspirante_nuevo['CORREO'],
                            planEstudios=aspirante_nuevo['PLAN DE ESTUDIOS '],
                            jornada=aspirante_nuevo['JORNADA'],
                            inscripcion=aspirante_nuevo['INSCRIPCION'],
                            cursoInduccion=aspirante_nuevo['CURSO INDUCCION Y RL'],
                            rutaPreparacionVl=aspirante_nuevo['RUTA DE PREPARACION A LA VIDA LABORAL'],
                            envioHv=aspirante_nuevo['ENVIÓ HV'],
                            tituloTecnico=aspirante_nuevo['TIENE TITULO TÉCNICO O TECNÓLOGO'],
                            practicaDondeLabora=aspirante_nuevo['PRACTICA DONDE LABORA, EMPRESA FLIAR, EMPRENDIM, OTRO'],
                            estadoUbicacion=aspirante_nuevo['ESTADO DE UBICACIÓN'],
                            comentariosProcesoUbicacion=aspirante_nuevo['COMENTARIOS PROCESO DE UBICACIÓN Y OTROS'],
                            tipoContrato=aspirante_nuevo['TIPO DE CONTRATO'],
                            fechaInicio=aspirante_nuevo['FECHA INICIO'],
                            fechaFinal=aspirante_nuevo['FECHA FINAL'],
                            datosEncargadoProcesoSeleccion=aspirante_nuevo['DATOS ENCARGADO PROCESO DE SELECCION'],
                            datosTutor=aspirante_nuevo['DATOS TUTOR O JEFE DIRECTO'],
                            documentosPendientes=aspirante_nuevo['DOCUMENTOS PENDIENTES DE FORMALIZACIÓN'],
                            sector=aspirante_nuevo['SECTOR'],
                            semestreRegistro=semestrePerteneciente
                        )
                        nuevo_aspirante.save()
                        AspirantesDoc2_nuevos.append(model_to_dict(nuevo_aspirante))
                    else:
                        aspirante_a_activar = AspirantesDoc2.objects.get(codigo=codigo)
                        aspirante_a_activar.save()
                        AspirantesDoc2_activados.append(model_to_dict(aspirante_a_activar))
                
                for aspirante_existente in aspirantes_anteriores:
                    if str(aspirante_existente.codigo) not in codigos_df:
                        aspirante_existente.estado = False
                        aspirante_existente.save()
                        AspirantesDoc2_inactivados.append(model_to_dict(aspirante_existente))

            cambios_realizados = {
                "AspirantesDoc2 creados": AspirantesDoc2_creados,
                "AspirantesDoc2 nuevos": AspirantesDoc2_nuevos,
                "AspirantesDoc2 activados": AspirantesDoc2_activados,
                "AspirantesDoc2 inactivados": AspirantesDoc2_inactivados
            }

            return Response({'Cambios': cambios_realizados}, status=status.HTTP_200_OK)
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

@api_view(['POST'])
def crearSemestre(request):
    if request.method == 'POST':
        try:
            # Obtener los datos de la solicitud POST
            fecha_inicio = request.data['fechaInicio']
            fecha_fin = request.data['fechaFin']
            numero_semestre = request.data['numeroSemestre']
            vigente = request.data['vigente']

            # Crear un nuevo objeto Semestre
            semestre = Semestre(
                fechaInicio=fecha_inicio,
                fechaFin=fecha_fin,
                numeroSemestre=numero_semestre,
                vigente=vigente
            )

            # Guardar el objeto en la base de datos
            semestre.save()

            return Response({'message': 'Semestre creado con éxito'}, status=status.HTTP_201_CREATED)

        except KeyError:
            return Response({'message': 'Datos incompletos o incorrectos'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def docentes_monitores_list(request):
    try:
        
        docentes = DocenteMonitor.objects.all()
        data = []
        for docente in docentes:
            data.append({
                'id': docente.id,
                'nombre': docente.nombre,
                'apellido': docente.apellido,
                'cedula': docente.cedula,
                'correoPersonal': docente.correoPersonal,
                'correoInstitucional': docente.correoInstitucional,
                'contrasena': docente.contrasena,
                'fechaNacimiento': docente.fechaNacimiento.strftime('%Y-%m-%d'),
                'estado': docente.estado,
                'horasDispobibles': docente.horasDispobibles

            })
        return Response(data,status=status.HTTP_200_OK)
    except Estudiante.DoesNotExist:
        return JsonResponse({'error': 'No hay docentes'}, status=404)
@api_view(['GET'])
def semestres_list(request):
    try:
        
        semestres = Semestre.objects.all()
        data = []
        for semestre in semestres:
            data.append({
                'id': semestre.id,
                'fechaInicio': semestre.fechaInicio.strftime('%Y-%m-%d'),
                'fechaFin': semestre.fechaFin.strftime('%Y-%m-%d'),
                'numeroSemestre': semestre.numeroSemestre,
                'vigente': semestre.vigente
            })
        return Response(data,status=status.HTTP_200_OK)
    except Estudiante.DoesNotExist:
        return JsonResponse({'error': 'No hay semestres'}, status=404)
    
