from django.contrib import admin
from .models import Category, Entity, EntityPhoto

class EntityPhotoInline(admin.TabularInline):
    model = EntityPhoto
    extra = 1

class EntityAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'active', 'recommended', 'views']
    inlines = [EntityPhotoInline]
    search_fields = ['name', 'category__name']

admin.site.register(Category)
admin.site.register(Entity, EntityAdmin)
