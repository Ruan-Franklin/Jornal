# Generated by Django 4.1.6 on 2023-02-05 12:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('jornal', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artigo',
            name='autor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='jornal.autor'),
        ),
    ]
