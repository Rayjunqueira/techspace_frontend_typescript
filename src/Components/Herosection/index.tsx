import * as C from './styles';

import WorkIcon from '@mui/icons-material/Work';
import PaymentsIcon from '@mui/icons-material/Payments';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Herosection = (props: Props) => {
  const navigate = useNavigate();

  const handleOnCourses = () => {
    navigate("/courses");
  }

  return (  
   <C.HerosectionContainer>
        <C.HeroTittle>
          <h3>100% Atualizado no mercado!</h3>
          <p>Transforme sua carreira com nossos cursos de tecnologia de ponta.</p>
        </C.HeroTittle>
        <C.ButtonHeroContainer>
          <button onClick={handleOnCourses}>Começar agora</button>
        </C.ButtonHeroContainer>
        <C.ExtraInfoSection>
          <C.InfoExtra>
            <h4><i><WorkIcon /></i>Oportunidade de emprego</h4>
          </C.InfoExtra>
          <C.InfoExtra>
            <h4><i><PaymentsIcon /></i>Reembolso instantaneo</h4>
          </C.InfoExtra>
          <C.InfoExtra>
            <h4><i><WatchLaterIcon /></i>Horário flexível</h4>
          </C.InfoExtra>
        </C.ExtraInfoSection>
   </C.HerosectionContainer>
  ) 
} 

export default Herosection;