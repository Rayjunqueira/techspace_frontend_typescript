import * as C from './styles';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

type Props = {}

const Section = (props: Props) => {
  return (  
    <C.SectionContainer>
      <C.SectionTitle>
        <hr />
        <h3>Nossos cursos</h3>
        <hr />
      </C.SectionTitle>
      <C.CoursesSection>
        <C.Course>
          <h3>Desenvolvedor frontend</h3>
          <p>O desenvolvimento frontend é a arte de criar interfaces visuais interativas para os usuários. Aqui, você aprenderá a dominar HTML, CSS, e JavaScript para construir sites e aplicações web que são não apenas funcionais, mas também atraentes e intuitivos.</p>
        </C.Course>
        <C.Course>
          <h3>Desenvolvedor backend</h3>
          <p>No desenvolvimento backend, você estará por trás dos bastidores, criando a lógica e infraestrutura que suportam aplicações web. Aprenda a trabalhar com servidores, bancos de dados, e APIs para garantir que tudo funcione de forma eficiente e segura.</p>
        </C.Course>
        <C.Course>
          <h3>Desenvolvedor mobile</h3>
          <p>Com o crescimento do uso de dispositivos móveis, o desenvolvimento mobile se tornou essencial. Neste curso, você aprenderá a criar aplicativos para Android e iOS, utilizando frameworks como React Native e Flutter para alcançar usuários em todas as plataformas.</p>
        </C.Course>
        <C.Course>
          <h3>Cientista de dados & IA</h3>
          <p>A ciência de dados e a inteligência artificial estão revolucionando indústrias inteiras. Aqui, você aprenderá a analisar grandes volumes de dados, construir modelos preditivos e desenvolver soluções inteligentes que podem transformar negócios e vidas.</p>
        </C.Course>
      </C.CoursesSection>
    </C.SectionContainer> 
  )
} 

export default Section;