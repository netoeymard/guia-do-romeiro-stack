from rest_framework import serializers
from .models import Category, Entity, EntityPhoto

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class EntityPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntityPhoto
        fields = ('id', 'photo')

class EntitySerializer(serializers.ModelSerializer):
    photos = EntityPhotoSerializer(many=True, read_only=True)
    # Caso queira incluir a categoria completa:
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Entity
        fields = '__all__'
