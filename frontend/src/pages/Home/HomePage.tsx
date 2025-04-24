import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PetsIcon from '@mui/icons-material/Pets'; // Representando "Zoo"
import ChurchIcon from '@mui/icons-material/Church';
import MuseumIcon from '@mui/icons-material/Museum';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; // Representando "Lazer"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { CircularProgress } from '@mui/material';


import './style.css'
import { getAllCategories, getMostViewd, getRecomended } from '../../services/places.service';
import { useMemo, useState } from 'react';
import { Place } from '../../services/types';
import { Avatar } from '@mui/material';
import { toast } from 'react-toastify';

const catIcons = [
    { label: 'Hotéis', icon: <HotelIcon /> },
    { label: 'Restaurantes', icon: <RestaurantIcon /> },
    { label: 'Zoo', icon: <PetsIcon /> },
    { label: 'Igrejas', icon: <ChurchIcon /> },
    { label: 'Museu', icon: <MuseumIcon /> },
    { label: 'Lazer', icon: <SportsEsportsIcon /> },
    { label: 'Biblioteca', icon: <LocalLibraryIcon /> },
    { label: 'Hospital', icon: <LocalHospitalIcon /> },
];

export default function HomePage() {
    const [isCatLoading, setIsCatLoading] = useState(true);
    const [isMostViewdLoading, setIsMostViewdLoading] = useState(true);
    const [isRecomendedLoading, setIsRecomendedLoading] = useState(true);

    const [categorias, setCategorias] = useState<typeof catIcons>([]);
    const [recomendados, setRecomendados] = useState<Place[]>([]);
    const [maisVistos, setMaisVistos] = useState<Place[]>([]);


    useMemo(() => {
        _getAllCategories();
        _getMostViewd();
        _getRecomended();
    }, []);

    async function _getAllCategories() {
        try {
            setIsCatLoading(true);
            const response = await getAllCategories();

            const newCategories = response.map((category, i) => {
                return {
                    label: category.name,
                    icon: catIcons[i].icon
                }
            })

            setCategorias(newCategories);
            setIsCatLoading(false);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erro ao buscar as localizações.';
            toast.error(errorMessage)
            setIsCatLoading(false);
        }

    }

    async function _getMostViewd() {
        try {
            setIsMostViewdLoading(true);
            const response = await getMostViewd();

            setMaisVistos(response);
            setIsMostViewdLoading(false);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erro ao buscar as localizações.';
            toast.error(errorMessage)
            setIsMostViewdLoading(false);
        }

    }

    async function _getRecomended() {
        try {
            setIsRecomendedLoading(true);
            const response = await getRecomended();

            setRecomendados(response);
            setIsRecomendedLoading(false);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erro ao buscar as localizações.';
            toast.error(errorMessage)
            setIsRecomendedLoading(false);
        }

    }

    return (
        <>
            <div className='home-container'>
                <div className='browm-ball'>
                    <div className="welcome-text">
                        <h2>Bem Vindo!</h2>
                        <p>Visitante</p>
                    </div>
                </div>

                <div className='categorias-container'>
                    <div>
                        <p><strong>Categorias</strong></p>
                        <div className='categorias-list'>
                            {
                                isCatLoading ? (
                                    <CircularProgress />
                                ) :
                                    categorias.map((categoria, index) => (
                                        <div key={index} className="category-item">
                                            <div className="category-icon">{categoria.icon}</div>
                                            <span>{categoria.label}</span>
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </div>

                <div className='categorias-container'>
                    <div>
                        <p><strong>Destino Populares</strong></p>
                        <div className='categorias-list'>
                            {
                                isMostViewdLoading ? (
                                    <CircularProgress />
                                ) :
                                    maisVistos.map((place, index) => (
                                        <div key={index} className="category-item">
                                            <Avatar
                                                variant="rounded"
                                                src={place?.photos[0].photo}
                                                alt={place.name}
                                                sx={{ width: 72, height: 72, mr: 2 }}
                                            />
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </div>

                <div className='categorias-container'>
                    <div>
                        <p><strong>Recomendados</strong></p>
                        <div className='categorias-list'>
                            {
                                isRecomendedLoading ? (
                                    <CircularProgress />
                                ) :
                                    recomendados.map((place, index) => (
                                        <div key={index} className="category-item">
                                            <Avatar
                                                variant="rounded"
                                                src={place?.photos[0].photo}
                                                alt={place.name}
                                                sx={{ width: 72, height: 72, mr: 2 }}
                                            />
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}