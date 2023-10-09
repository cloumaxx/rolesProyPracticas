from followPractApp import views 
from django.urls import path
urlpatterns = [ 
    path('estudiantes/estudiantes_list/', views.estudiantes_list, name='listado_estudiantes'),

    path('estudiantes/<int:estudiante_id>/', views.estudiante_detail, name='detalle_estudiante'),
    
    path('estudiantes/crear_por_listado_estudiantes/', views.crearPorListadoEstudiantes, name='crear_por_listado_estudiantes'),

    path('aspirantes/crear_por_listado_aspirantes/', views.crearPorListadoAspirantes, name='crear_por_listado_aspirantes'),

    path('aspirantes/tablaCompletaPracticas_list/<str:semestreEntrada>/', views.tablaCompletaPracticas_list, name='tablaCompletaPracticas_list'),

    path('docentes/docentes_list/', views.docentes_monitores_list, name='docentes_monitores_list'),

    path('semestre/crear_semestre/', views.crearSemestre, name='crear_semestre'),

    path('semestre/semestres_list/', views.semestres_list, name='semestres_list'),

    path('programas/crear_programa/', views.crearPrograma, name='crear_programa'),

    path('coordinador/crear_coordinador/', views.crearCoordinador, name='crear_coordinador'),
]
