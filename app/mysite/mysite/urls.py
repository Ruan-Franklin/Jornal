'''Este arquivo usa a função include
 para incluir as URLs geradas pelo arquivo jornal/urls.py. 
 A função de caminho é usada para definir o padrão de URL base para o aplicativo de jornal.
  Neste exemplo, o padrão de URL base é /api/, portanto, todos os URLs gerados pelo arquivo jornal/urls.py serão prefixados com /api/.'''
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('jornal.urls')),
]
