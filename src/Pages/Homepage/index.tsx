import * as C from './styles';

import Section from '../../Components/Section';
import Herosection from '../../Components/Herosection';
import Reviewsection from '../../Components/Reviewsection';
import Contactsection from '../../Components/Contactsection';
import BusinessReview from '../../Components/BusinessReview';
import Contactlogos from '../../Components/Contactlogos';

type Props = {}

const Homepage = (props: Props) => {
  return (
    <C.Container>
      <Herosection />
      <Section />
      <Reviewsection />
      <Contactsection />
      <Contactlogos />
    </C.Container>
  )
}

export default Homepage;