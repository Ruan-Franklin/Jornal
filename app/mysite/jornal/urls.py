'''
Este arquivo usa o DefaultRouter do rest_framework para gerar automaticamente as URLs para os ViewSets no arquivo views.py. O método register é usado para registrar cada ViewSet com um padrão de URL correspondente. Neste exemplo, o AutorViewSet é registrado com o padrão de URL /autores/ e o ArtigoViewSet é registrado com o padrão de URL /artigos/. A função include é usada para incluir as URLs geradas pelo roteador na lista urlpatterns.
'''
from django.urls import path, include
from rest_framework import routers
from .views import AutorViewSet, ArtigoViewSet

router = routers.DefaultRouter()
router.register(r'autores', AutorViewSet)
router.register(r'artigos', ArtigoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

