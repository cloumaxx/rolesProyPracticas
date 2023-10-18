from django import forms
from .models import DocenteMonitor

class DocenteMonitorForm(forms.ModelForm):
    class Meta:
        model = DocenteMonitor
        fields = '__all__'
