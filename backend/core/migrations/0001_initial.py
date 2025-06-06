# Generated by Django 4.2.20 on 2025-04-15 20:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name="Entity",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("street", models.CharField(max_length=255, verbose_name="Rua")),
                ("number", models.CharField(max_length=20, verbose_name="Número")),
                (
                    "neighborhood",
                    models.CharField(max_length=255, verbose_name="Bairro"),
                ),
                (
                    "complement",
                    models.CharField(
                        blank=True,
                        max_length=255,
                        null=True,
                        verbose_name="Complemento",
                    ),
                ),
                ("city", models.CharField(max_length=255, verbose_name="Cidade")),
                ("state", models.CharField(max_length=2, verbose_name="Estado")),
                ("active", models.BooleanField(default=True, verbose_name="Ativo")),
                (
                    "recommended",
                    models.BooleanField(default=False, verbose_name="Recomendado"),
                ),
                (
                    "views",
                    models.PositiveIntegerField(
                        default=0, verbose_name="Visualizações"
                    ),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="entities",
                        to="core.category",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="EntityPhoto",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("photo", models.ImageField(upload_to="entity_photos/")),
                (
                    "entity",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="photos",
                        to="core.entity",
                    ),
                ),
            ],
        ),
    ]
