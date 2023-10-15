from django.contrib import admin
from .models import Estudiante
from .models import Aspirantes

# Register your models here.
admin.site.register(Estudiante)
admin.site.register(Aspirantes)