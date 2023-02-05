from django.db import models
'''
Este arquivo contém dois modelos Django: Autor e Artigo. O modelo Autor possui dois campos: nome e email. O modelo Article tem quatro campos: title, description, author e pub_date. O campo author é uma ForeignKey para o modelo Author, o que significa que cada artigo está associado a um único autor. O método __str__ retorna uma representação de string de cada modelo, que é usado na interface de administração do Django e em outros lugares.
'''

from django.db import models

class Autor(models.Model):
    '''Classe de modelo com os campos de um autor de um artigo.'''
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
                #O método construtor __str__ retorna uma representação de string de cada modelo, que é usado na interface de administração do DJango e e em outros lugares.
        return self.nome

class Artigo(models.Model):
    '''Classe de modelo com os campos de um artigo feito por um autor'''
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    #O campo autor é uma chave estrangeira para a classe autor, isso significa que o artigo tem um único autor.
    #Com on_delete cascade, ao excluir um registro em uma tabela, um registro relacionado em outra tabela é automaticamente excluído
    autor = models.ForeignKey(Autor, null=True, on_delete=models.CASCADE)
    data_pub = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        #O método construtor __str__ retorna uma representação de string de cada modelo, que é usado na interface de administração do DJango e e em outros lugares.
        return self.titulo