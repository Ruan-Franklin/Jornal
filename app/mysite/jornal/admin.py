from django.contrib import admin

from .models import Artigo, Autor

admin.site.register(Autor)
admin.site.register(Artigo)