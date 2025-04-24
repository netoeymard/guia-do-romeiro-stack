import { Input } from '@mui/material';
import './style.css'

export default function SearchPage() {
  return (
    <>
      <div className=''>
        <div className='top-bar'>
          <div className="welcome-text">
            <Input about='search' placeholder='Pesquisar...' className='search-input' />
          </div>
        </div>
      </div>
    </>
  );
}