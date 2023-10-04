

from django.http import JsonResponse
from rest_framework.decorators import api_view
from followPractApp.models import DocenteMonitor
from followPractApp.serializers import DocenteSerializer


@api_view(['GET'])
def docentes_list(request):
    docentes = DocenteMonitor.objects.all()
    serializer = DocenteSerializer(docentes, many=True)
    return JsonResponse(serializer.data, safe=False)