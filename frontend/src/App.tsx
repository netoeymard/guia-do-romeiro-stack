// HomePage.jsx
import { useLocation, useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import AppRoutes from './AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { navigateToAddress } from './utils/location';
import { useState } from 'react';

const tabConfig = [
  { label: 'Início', icon: <HomeIcon />, path: '/home' },
  { label: 'Mapa', icon: <RoomIcon />, path: '/map' },
  { label: 'Pesquisar', icon: <SearchIcon />, path: '/search' },
];

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const currentTab = tabConfig.findIndex(tab => location.pathname.startsWith(tab.path));
  const value = currentTab === -1 ? 0 : currentTab;

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    const tab = tabConfig[newValue];

    if (tab.label === 'Mapa') {
      navigateToAddress(
        'Basílica de São Francisco, Canindé - CE',
        () => {},
        () => {},
        (err) => console.error(err)
      )
    } else {
      navigate(tab.path);
    }
  };
  const shouldShowNavigation = location.pathname !== '/';

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <AppRoutes />
      </div>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: shouldShowNavigation ? 'block' : 'none',
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
          onChange={handleChange}
        >
          {tabConfig.map((tab, index) => (
            <BottomNavigationAction
              key={index}
              label={tab.label}
              icon={tab.icon}
              sx={{
                color: 'background.default',
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              }}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default App;
