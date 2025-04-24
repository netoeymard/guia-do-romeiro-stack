export interface Photo {
    id: number;
    photo: string;
  }
  
  export interface Category {
    id: number;
    name: string;
  }
  
  export interface Place {
    id: number;
    photos: Photo[];
    category: Category;
    name: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string | null;
    city: string;
    state: string;
    active: boolean;
    recommended: boolean;
    views: number;
  }
  