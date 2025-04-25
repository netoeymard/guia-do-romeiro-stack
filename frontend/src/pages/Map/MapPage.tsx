import { MapContainer, TileLayer, Marker, useMap, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css'; 

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Routing({ from, to }: { from: L.LatLng, to: L.LatLng }) {
  const map = useMap();

  useEffect(() => {
    if (!from || !to) return;

    const routingControl = L.Routing.control({
      waypoints: [from, to],
      routeWhileDragging: false,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [from, to, map]);

  return null;
}

function LocateButton({ location }: { location: L.LatLng | null }) {
  const map = useMap();

  const handleClick = () => {
    if (location) {
      map.flyTo(location, 15); // voa até a localização com zoom 15
    } else {
      alert("Localização atual não disponível.");
    }
  };

  return (
    <button className="locate-button" onClick={handleClick}>
      📍
    </button>
  );
}

export default function MapPage() {
  const query = useQuery();
  const [userLocation, setUserLocation] = useState<L.LatLng | null>(null);
  const [destination, setDestination] = useState<L.LatLng | null>(null);

  const endereco = query.get("endereco");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(L.latLng(position.coords.latitude, position.coords.longitude));
      },
      () => {
        alert("Não foi possível obter a localização atual.");
      }
    );
  }, []);

  useEffect(() => {
    if (!endereco) return;

    const getCoordinatesFromAddress = async () => {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`);
      const data = await response.json();

      if (data.length > 0) {
        setDestination(L.latLng(data[0].lat, data[0].lon));
      } else {
        alert("Endereço não encontrado.");
      }
    };

    getCoordinatesFromAddress();
  }, [endereco]);

  const center = userLocation || L.latLng(-3.722, -38.5); // fallback inicial

  return (
    <div className="map-wrapper">
      <MapContainer center={center} zoom={13} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userLocation && <Marker position={userLocation} />}
        {destination && <Marker position={destination} />}
        {userLocation && destination && <Routing from={userLocation} to={destination} />}
        <LocateButton location={userLocation} />
      </MapContainer>
    </div>
  );
}
