import * as C from './styles';

import starimg from '../../Assets/reviewsection/starsection.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarRateIcon from '@mui/icons-material/StarRate';
import logo1 from '../../Assets/logosbusiness/globo.png';
import logo2 from '../../Assets/logosbusiness/nu.png';
import logo3 from '../../Assets/logosbusiness/ifood.png';
import logo4 from '../../Assets/logosbusiness/sp.png';

import { useRef, useState } from 'react';

type Props = {}

const Reviewsection = (props: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollLeft += scrollAmount;
      setScrollX(carouselRef.current.scrollLeft);
    }
  };

  return (
    <C.ReviewContainer>
      <C.ReviewImg>
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
      </C.ReviewImg>
      <C.ReviewRelates>
        <C.ReviewRelatesTitle>
          <hr />
          <h3>Depoimentos</h3>
          <hr />
        </C.ReviewRelatesTitle>
        <C.CarouselContainer>
          <C.ArrowLeft onClick={() => handleArrowClick('left')}>
            <ArrowBackIosIcon />
          </C.ArrowLeft>
          <C.UsersRelates ref={carouselRef}>
            <C.UserRelate>
              <h3>Jane Doe</h3>
              <p>Os cursos são bem estruturados e me ajudaram muito a avançar na minha carreira.</p>
              <C.ReviewRating>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
              </C.ReviewRating>
            </C.UserRelate>
            <C.UserRelate>
              <h3>John Smith</h3>
              <p>Excelente conteúdo e professores. Recomendo a todos que desejam aprender.</p>
              <C.ReviewRating>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
              </C.ReviewRating>
            </C.UserRelate>
            <C.UserRelate>
              <h3>Emily Johnson</h3>
              <p>Aprendi muito mais do que esperava. A estrutura do curso é fantástica!</p>
              <C.ReviewRating>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
              </C.ReviewRating>
            </C.UserRelate>
            <C.UserRelate>
              <h3>Michael Brown</h3>
              <p>Os materiais de apoio são excelentes e os professores são muito atenciosos.</p>
              <C.ReviewRating>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
              </C.ReviewRating>
            </C.UserRelate>
            <C.UserRelate>
              <h3>Alice Williams</h3>
              <p>Ótima experiência de aprendizado, o material didático é muito completo.</p>
              <C.ReviewRating>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
              </C.ReviewRating>
            </C.UserRelate>
            <C.UserRelate>
              <h3>Chris Evans</h3>
              <p>Os cursos excederam minhas expectativas. O suporte ao aluno é excepcional.</p>
              <C.ReviewRating>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
              </C.ReviewRating>
            </C.UserRelate>
            <C.UserRelate>
              <h3>Olivia Martinez</h3>
              <p>Aprendi muito com a abordagem prática e os casos de estudo fornecidos.</p>
              <C.ReviewRating>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
                <i><StarRateIcon /></i>
              </C.ReviewRating>
            </C.UserRelate>
          </C.UsersRelates>
          <C.ArrowRight onClick={() => handleArrowClick('right')}>
            <ArrowForwardIosIcon />
          </C.ArrowRight>
        </C.CarouselContainer>
      </C.ReviewRelates>
    </C.ReviewContainer>
  )
}

export default Reviewsection;
