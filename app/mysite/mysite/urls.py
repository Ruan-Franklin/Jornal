'''Este arquivo usa a função include
 para incluir as URLs geradas pelo arquivo jornal/urls.py. 
 A função de caminho é usada para definir o padrão de URL base para o aplicativo de jornal.
  Neste exemplo, o padrão de URL base é /api/, portanto, todos os URLs gerados pelo arquivo jornal/urls.py serão prefixados com /api/.'''
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('jornal.urls')),
]

#Adicione essa linha para servir arquivos estáticos durante o desenvolvimento

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

