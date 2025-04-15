import os
import uuid
from django.db import models

def rename_image_to_hash(instance, filename):
    ext = filename.split('.')[-1]
    # Gera um UUID único (hash)
    new_filename = f"{uuid.uuid4().hex}.{ext}"
    return os.path.join('entidades', new_filename)


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

class Entity(models.Model):
    name = models.CharField(max_length=255)
    street = models.CharField("Rua", max_length=255)
    number = models.CharField("Número", max_length=20)
    neighborhood = models.CharField("Bairro", max_length=255)
    complement = models.CharField("Complemento", max_length=255, blank=True, null=True)
    city = models.CharField("Cidade", max_length=255)
    state = models.CharField("Estado", max_length=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='entities')
    active = models.BooleanField("Ativo", default=True)
    recommended = models.BooleanField("Recomendado", default=False)
    views = models.PositiveIntegerField("Visualizações", default=0)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Entidade"
        verbose_name_plural = "Entidades"

class EntityPhoto(models.Model):
    entity = models.ForeignKey('Entity', related_name='photos', on_delete=models.CASCADE)
    photo = models.ImageField(upload_to=rename_image_to_hash)


    class Meta:
        verbose_name = "Imagem"
        verbose_name_plural = "Imagens"

    def __str__(self):
        return f'Foto de {self.entity.name}'
