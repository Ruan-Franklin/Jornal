# Generated by Django 4.1.6 on 2023-02-05 12:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('jornal', '0002_alter_artigo_autor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artigo',
            name='autor',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='jornal.autor'),
        ),
    ]