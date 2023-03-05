'''Este arquivo contém dois serializadores, um para cada modelo. O AutorSerializer serializa o modelo Autor e o ArtigoSerializer serializa o modelo Artigo. A classe Meta para cada serializador especifica o modelo a ser usado e os campos a serem incluídos na serialização. Neste exemplo, o valor '__all__' para campos inclui todos os campos do modelo na serialização. O ArtigoSerializer inclui o AutorSerializer como serializador para o campo de autor e define read_only=True para indicar que o campo de autor não deve ser incluído em operações de gravação.'''

from rest_framework import serializers
from .models import Autor, Artigo

class AutorSerializer(serializers.ModelSerializer):
    '''Classe para serialização de autores'''
    class Meta:
        model = Autor
        fields = '__all__'

#Classe meta específica o modelo a ser usado e os campos a serem incluídos 
#All inclui todos os campos do modelo na serialização

class ArtigoSerializer(serializers.ModelSerializer):
    #source indica que o campo "nome_autor" é derivado do campo "autor.nome"
    nome_autor = serializers.CharField(source='autor.nome')
    '''Classe para especificação '''
    class Meta:
        model = Artigo
        fields = ['id', 'titulo', 'descricao', 'data_pub', 'autor','nome_autor']

#Classe meta específica o modelo a ser usado e os campos a serem incluídos 

# to_representation é um método que converte objetos Python em representações nativas do Python
# As representações nativas do Python podem facilmente ser convertidas em JSON, XML ou outros formatos.

#Nesse caso, iremos adicionar o campo "nome" do autor no dicionário que representa o artigo

def to_representation(self, instance):
    rep = super().to_representation(instance)
    rep['nome_autor'] = instance.autor.nome
    return rep 