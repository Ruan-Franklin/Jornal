from django.contrib import admin
from .models import Artigo, Autor

class AutorAdmin(admin.ModelAdmin):
    list_filter = ['nome', 'email']

class ArtigoAdmin(admin.ModelAdmin):
    list_filter = ['autor__nome', 'data_pub']

admin.site.register(Autor, AutorAdmin)
admin.site.register(Artigo, ArtigoAdmin)
