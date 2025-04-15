from django.urls import path
from .views import (
    CategoryListAPIView,
    RecommendedEntityListAPIView,
    MostViewedEntityListAPIView,
    EntitySearchListAPIView,
    increment_views,
)

urlpatterns = [
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('entities/recommended/', RecommendedEntityListAPIView.as_view(), name='recommended-entities'),
    path('entities/most_viewed/', MostViewedEntityListAPIView.as_view(), name='most-viewed-entities'),
    path('entities/search/', EntitySearchListAPIView.as_view(), name='entity-search'),
    path('entities/<int:pk>/increment_views/', increment_views, name='increment-views'),
]
