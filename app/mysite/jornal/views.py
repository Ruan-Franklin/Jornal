from rest_framework import viewsets
from .models import Autor, Artigo
from .serializers import AutorSerializer, ArtigoSerializer
'''
Este arquivo inclui dois ViewSets, um para cada modelo. O AutorViewSet lida com todas as operações para o modelo Autor e o ArtigoViewSet lida com todas as operações para o modelo Artigo. O atributo queryset define o queryset padrão para o ViewSet, que são todas as instâncias do modelo associado. O atributo serializer_class define o serializador a ser usado com o ViewSet. Observe que os serializadores não são definidos neste arquivo, eles precisam ser importados de um arquivo serializers.py separado.
'''

class AutorViewSet(viewsets.ModelViewSet):
    '''Classe para lidar com operações para o modelo de Autor'''
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer

class ArtigoViewSet(viewsets.ModelViewSet):
    queryset = Artigo.objects.all()
    serializer_class = ArtigoSerializer


