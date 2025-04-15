import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PetsIcon from '@mui/icons-material/Pets'; // Representando "Zoo"
import ChurchIcon from '@mui/icons-material/Church';
import MuseumIcon from '@mui/icons-material/Museum';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; // Representando "Lazer"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import './style.css'

export default function HomePage() {
    const categorias = [
        { label: 'Hotéis', icon: <HotelIcon /> },
        { label: 'Restaurantes', icon: <RestaurantIcon /> },
        { label: 'Zoo', icon: <PetsIcon /> },
        { label: 'Igrejas', icon: <ChurchIcon /> },
        { label: 'Museu', icon: <MuseumIcon /> },
        { label: 'Lazer', icon: <SportsEsportsIcon /> },
        { label: 'Biblioteca', icon: <LocalLibraryIcon /> },
        { label: 'Hospital', icon: <LocalHospitalIcon /> },
    ];

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
                        <p><strong>Recomendados</strong></p>
                        <div className='categorias-list'>
                            {
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
            </div>
        </>
    );
}