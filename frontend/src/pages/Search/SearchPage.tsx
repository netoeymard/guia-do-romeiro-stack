import { 
  Avatar, 
  Box, 
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

const churchList = [
  {
    id: 1,
    name: "Basílica Santuário de São Francisco das Chagas",
    distance: "0,27 mi",
    type: "Igreja católica",
    address: "Praça da Basílica, 21",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Bas%C3%ADlica_de_Canind%C3%A9.jpg"
  },
  {
    id: 2,
    name: "Igreja do Cristo Rei - Canindé",
    distance: "0,74 km",
    type: "Igreja católica",
    address: "Av. Francisco Cordeiro Campos, 22",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Igreja_do_Cristo_Rei_Canind%C3%A9.jpg/640px-Igreja_do_Cristo_Rei_Canind%C3%A9.jpg"
  },
  {
    id: 3,
    name: "Igreja Matriz de Nossa Senhora das Dores",
    distance: "0,23 km",
    type: "Igreja católica",
    address: "Av. Francisco Cordeiro Campos",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Igreja_Matriz_Canind%C3%A9_CE.jpg"
  },
  {
    id: 4,
    name: "Paróquia São José",
    distance: "1,3 km",
    type: "Igreja católica",
    address: "R. São João, 172",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Igreja_Sao_Jose.jpg"
  }
];

export default function SearchPage() {
  return (
    <>
      <div className='search-container'>
        <div className='top-bar'>
          <TextField
            fullWidth
            placeholder="Pesquisar..."
            variant="outlined"
            size="small"
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
                Onde você vai rezar?
              </Typography>
            </Box>

            <List sx={{ 
              overflowY: 'auto', 
              px: 1, 
              flex: 1,
            }}>
              {churchList.map((church) => (
                <ListItem 
                  key={church.id} 
                  alignItems="flex-start" 
                >
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      src={church.image}
                      alt={church.name}
                      sx={{ width: 72, height: 72, mr: 2 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="body1" fontWeight="bold">
                        {church.name}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">
                          {church.distance} - {church.type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {church.address}
                        </Typography>
                      </>
                    }
                  />
                  <IconButton 
                    edge="end" 
                    color="secondary" 
                    aria-label="ir para o mapa"
                    sx={{
                      width: '40px',
                      alignSelf: 'center',
                      justifySelf: 'end',
                      float: 'right',
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