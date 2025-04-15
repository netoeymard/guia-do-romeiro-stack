import { 
  Button, 
  Container, 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './styles.css'

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/home');
  };

  return (
    <div className='container'>
      <div className='welcome-title'>
        <div >
          <img src="/logo.png" alt="" />
        </div>
        <h1>
          VOCÊ QUE <br />
          ESTÁ <br />
          CHEGANDO
        </h1>
        <span>
          Seja bem vindo
        </span>
      </div>

      <div>
          
      <Button variant="contained" color="primary" onClick={handleRedirect}>
        Iniciar
      </Button>
      </div>

    </div>
  );
};

export default WelcomePage;
