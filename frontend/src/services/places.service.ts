import api from "./main";
import { Category, Place } from "./types";

export async function getAllCategories(): Promise<Category[]> {
    try {
        const response = await api.get<Place[]>(`/categories/`)
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar as categorias.');
    }
}

export async function getAllPlaces(search: string): Promise<Place[]> {
    try {
        const response = await api.get<Place[]>(`/entities/search/?q=${search}`)
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar as localizações.');
    }
}

export async function getRecomended(): Promise<Place[]> {
    try {
        const response = await api.get<Place[]>(`/entities/recommended/`)
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar os Recomendados.');
    }
}

export async function getMostViewd(): Promise<Place[]> {
    try {
        const response = await api.get<Place[]>(`/entities/most_viewed/`)
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar os Mais Visualizados.');
    }
}

export async function addView(id: number): Promise<void> {
    try {
        await api.post<Place[]>(`/entities/${id}/increment_views/`)
    } catch (error) {
        console.error('Erro ao adicionar visualização.', error);
    }
}