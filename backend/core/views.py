from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q
from .models import Category, Entity
from .serializers import CategorySerializer, EntitySerializer

# Endpoint para listar todas as categorias
class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Endpoint para listar entidades recomendadas
class RecommendedEntityListAPIView(generics.ListAPIView):
    queryset = Entity.objects.filter(recommended=True)
    serializer_class = EntitySerializer

# Endpoint para listar as entidades mais visualizadas (views > 0) em ordem decrescente
class MostViewedEntityListAPIView(generics.ListAPIView):
    serializer_class = EntitySerializer

    def get_queryset(self):
        return Entity.objects.filter(views__gt=0).order_by('-views')

# Endpoint para listar todas as entidades com filtro que pesquisa no nome da entidade ou no nome da categoria
class EntitySearchListAPIView(generics.ListAPIView):
    serializer_class = EntitySerializer

    def get_queryset(self):
        query = self.request.query_params.get('q', '')
        return Entity.objects.filter(
            Q(name__icontains=query) | Q(category__name__icontains=query)
        )

# Endpoint para incrementar o contador de visualizações
@api_view(['POST'])
def increment_views(request, pk):
    try:
        entity = Entity.objects.get(pk=pk)
        entity.views += 1
        entity.save()
        return Response({'id': entity.id, 'views': entity.views}, status=status.HTTP_200_OK)
    except Entity.DoesNotExist:
        return Response({'error': 'Entidade não encontrada'}, status=status.HTTP_404_NOT_FOUND)
