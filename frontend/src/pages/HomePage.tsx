import { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RoomIcon from '@mui/icons-material/Room'; // For "Mappin"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import PageHome from './Home/HomePage'
import SearchPage from './Search/SearchPage';
import MapPage from './Map/MapPage';
import ProfilePage from './Profile/ProfilePage';

const HomePage = () => {
  const [value, setValue] = useState(0);

  const Pages = [
    PageHome,
    MapPage,
    SearchPage,
    ProfilePage
  ]

  return (
    <>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        flex: 1 
      }}>
        {Pages[value]()}
      </div>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0
        }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            backgroundColor: 'secondary.main',
            maxHeight: '48px',
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Início"
            icon={<HomeIcon />}
            sx={{
              color: 'background.default',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            }}
          />
          <BottomNavigationAction
            label="Localizar"
            icon={<RoomIcon />}
            sx={{
              color: 'background.default',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            }}
          />
          <BottomNavigationAction
            label="Pesquisar"
            icon={<SearchIcon />}
            sx={{
              color: 'background.default',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            }}
          />
          <BottomNavigationAction
            label="Perfil"
            icon={<PersonIcon />}
            sx={{
              color: 'background.default',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            }}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default HomePage;
