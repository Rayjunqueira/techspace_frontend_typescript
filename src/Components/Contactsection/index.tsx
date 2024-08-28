import * as C from './styles';

import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type Props = {}

const Contactsection = (props: Props) => {
  return (
    <C.ContactContainer>
      <C.ContactInfo>
        <h3>Dúvidas ou sugestões<i><LocalPostOfficeIcon /></i></h3>
        <h4>
          Entre em contato conosco, nosso suporte está sempre à disposição para esclarecer suas dúvidas e receber sugestões.
        </h4>
      </C.ContactInfo>
      <C.ContactForm>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" required />
        <button type="submit">Enviar</button>
      </C.ContactForm>

    </C.ContactContainer>
  )
}

export default Contactsection;
