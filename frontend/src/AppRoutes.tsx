// AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';

import WelcomePage from './pages/Welcome/WelcomePage';
import HomePage from './pages/Home/HomePage';
import MapPage from './pages/Map/MapPage';
import SearchPage from './pages/Search/SearchPage';
import ProfilePage from './pages/Profile/ProfilePage';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default AppRoutes;
