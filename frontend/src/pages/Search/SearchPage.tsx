import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './style.css'

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
      </div>
    </>
  );
}