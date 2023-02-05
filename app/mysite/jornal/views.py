from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .models import Autor, Artigo
from .serializers import AutorSerializer, ArtigoSerializer
'''
Este arquivo inclui dois ViewSets, um para cada modelo. O AutorViewSet lida com todas as operações para o modelo Autor e o ArtigoViewSet lida com todas as operações para o modelo Artigo. O atributo queryset define o queryset padrão para o ViewSet, que são todas as instâncias do modelo associado. O atributo serializer_class define o serializador a ser usado com o ViewSet. Observe que os serializadores não são definidos neste arquivo, eles precisam ser importados de um arquivo serializers.py separado.
'''

class AutorViewSet(viewsets.ModelViewSet):
    '''Classe para lidar com operações para o modelo de Autor'''
    queryset = Autor.objects.all()
    serializer_class = AutorSerializer

    def create(self,request, *args, **kwargs):
        '''Método para lidar com solicitações de post'''
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
    def update(self, request, *args, **kwargs):
        '''Método para lidar com solicitações de put para autor'''
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ArtigoViewSet(viewsets.ModelViewSet):
    queryset = Artigo.objects.all()
    serializer_class = ArtigoSerializer

    def create(self, request, *args,**kwargs):
        '''Método para lidar com solicitações de post'''
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers=self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def update(self, request, *args, **kwargs):
        '''Método para lidar com solicitações de put para artigo'''
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)


