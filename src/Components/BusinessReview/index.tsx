import * as C from './styles';

import logo1 from '../../Assets/logosbusiness/globo.png';
import logo2 from '../../Assets/logosbusiness/nu.png';
import logo3 from '../../Assets/logosbusiness/ifood.png';
import logo4 from '../../Assets/logosbusiness/sp.png';

type Props = {}

const BusinessReview = (props: Props) => {
  return (
        <C.ReviewBusiness>
            <C.ReviewBusinessTitle>
                <h4>Empresas que já contrataram nossos alunos</h4>
            </C.ReviewBusinessTitle>
            <C.BusinessLogos>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
            </C.BusinessLogos>
        </C.ReviewBusiness>
    )
}

export default BusinessReview;