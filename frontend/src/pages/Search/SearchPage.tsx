import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import './style.css'
import { getAllPlaces } from '../../services/places.service';
import { useMemo, useState } from 'react';
import { Place } from '../../services/types';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { navigateToAddress } from '../../utils/location';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
  const query = useQuery();
  const categoria = query.get("categoria");

  const [isAllPlacesLoading, setIsAllPlacesLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState<Place[]>([]);

  useMemo(() => {

    _getAllPlaces(categoria || '');
  }
    , []);

  async function _getAllPlaces(search: string) {
    try {
      setIsAllPlacesLoading(true);
      const response = await getAllPlaces(search);

      setPlaces(response);
      setIsAllPlacesLoading(false);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao buscar as localizações.';
      toast.error(errorMessage);
      setIsAllPlacesLoading(false);
    }

  }
  return (
    <>
      <div className='search-container'>
        <div className='top-bar'>
          <TextField
            fullWidth
            placeholder="Pesquisar..."
            variant="outlined"
            size="small"
            defaultValue={categoria}
            onChange={(e) => _getAllPlaces(e.target.value)}
            slotProps={{
              input: {
                sx: {
                  color: '#EBE4C1'
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }
            }}
            sx={{
              m: 1,
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#EBE4C1',
                },
                '&:hover fieldset': {
                  borderColor: '#EBE4C1',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#EBE4C1',
                },
              },
              '& .MuiInputAdornment-root': {
                color: '#EBE4C1',
              },
            }}
          />
        </div>

        <div className='search-results'>
          <Paper sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.default',
            boxShadow: 'none'
          }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Onde você quer ir?
              </Typography>
            </Box>

            <List sx={{
              overflowY: 'auto',
              px: 1,
              flex: 1,
            }}>
              {isAllPlacesLoading ? (
                <CircularProgress />
              ) : places.map((place) => (
                <ListItem
                  key={place.id}
                  alignItems="flex-start"
                >
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      src={place.photos[0].photo}
                      alt={place.name}
                      sx={{ width: 72, height: 72, mr: 2 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="body1" fontWeight="bold">
                        {place.name}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">
                          {`${!Number(place.number) ? place.street: ''}, ${place.number} - ${place.neighborhood}, ${place.city} - ${place.state}`}
                        </Typography>
                      </>
                    }
                  />
                  <IconButton
                    edge="end"
                    color="secondary"
                    aria-label="ir para o mapa"
                    onClick={() => {
                      navigateToAddress(
                        `${!Number(place.number) ? place.street: ''} ${place.street}, ${place.number} - ${place.neighborhood}, ${place.city} - ${place.state}`,
                        () => setLoading(true),
                        () => setLoading(false),
                        (err) => console.error(err)
                      )
                    }}
                    sx={{
                      width: '40px',
                      alignSelf: 'center',
                      justifySelf: 'end',
                      float: 'right',
                      opacity: loading ? 0.5 : 1,
                      textAlign: 'end',
                    }}
                  >
                    <TurnRightIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </div>
      </div>
    </>
  );
}