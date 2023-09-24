from followPractApp import views 
from django.urls import path
urlpatterns = [ 
    path('estudiantes/', views.estudiantes_list, name='listado_estudiantes'),

    path('estudiantes/<int:estudiante_id>/', views.estudiante_detail, name='detalle_estudiante'),
    
    path('estudiantes/crear_por_listado_estudiantes/', views.crearPorListadoEstudiantes, name='crear_por_listado_estudiantes'),

    path('aspirantes/crear_por_listado_aspirantes/', views.crearPorListadoAspirantes, name='crear_por_listado_aspirantes'),

    path('aspirantes/tablaCompletaPracticas_list/<str:semestreEntrada>/', views.tablaCompletaPracticas_list, name='tablaCompletaPracticas_list'),
]
