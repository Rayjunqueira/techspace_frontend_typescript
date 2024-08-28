import * as C from './styles';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type Props = {}

const Contactlogos = (props: Props) => {
  return (
    <C.ContactLogos>
        <i><WhatsAppIcon /></i>
        <i><XIcon /></i>
        <i><FacebookIcon /></i> 
        <i><LinkedInIcon /></i>
    </C.ContactLogos>
   )
}

export default Contactlogos;