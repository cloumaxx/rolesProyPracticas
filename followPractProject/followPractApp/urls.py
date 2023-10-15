from followPractApp import views 
from django.urls import path
urlpatterns = [ 
    path('estudiantes/estudiantes_list/', views.estudiantes_list, name='listado_estudiantes'),

    path('estudiantes/<int:estudiante_id>/', views.estudiante_detail, name='detalle_estudiante'),
    
    path('estudiantes/crear_por_listado_estudiantes/', views.crearPorListadoEstudiantes, name='crear_por_listado_estudiantes'),

    path('aspirantes/crear_por_listado_aspirantes/', views.crearPorListadoAspirantes, name='crear_por_listado_aspirantes'),

    path('aspirantes/tablaCompletaPracticas_list/<str:semestreEntrada>/', views.tablaCompletaPracticas_list, name='tablaCompletaPracticas_list'),

    path('docentes/docentes_list/', views.docentes_monitores_list, name='docentes_monitores_list'),

    path('docentes/<int:docente_id>/estudiantes/',
         views.docente_estudiantes_list, name='docenteEstudiante_list'),
    
    path('docentes/asignar_estudiantes_docentes',
         views.asignar_random_estudiantes_docentes,
         name='asignacion_doc_est'),

    path('docentes/ver_monitorias',
         views.all_asignaciones_list,
         name='lista_asignaciones'),

    path('semestre/crear_semestre/', views.crearSemestre, name='crear_semestre'),

    path('semestre/semestres_list/', views.semestres_list, name='semestres_list'),

    path('programas/crear_programa/', views.crearPrograma, name='crear_programa'),
    
    path('programas/programas_list/', views.programa_list, name='programa_list'),

    path('coordinador/crear_coordinador/', views.crearCoordinador, name='crear_coordinador'),

    path('coordinador/coordinador_list/', views.coordinador_list, name='coordinador_list'),
]
