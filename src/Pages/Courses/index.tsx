import * as C from './styles';

import React, { useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import CoursesInfo from '../../Components/CoursesInfo';

const Courses = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCourse = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <C.Container>
      <C.CourseContainer>
        <C.CoursesTittle>
          <h3 id='title-courses'>
            Escolha um dos nossos cursos
          </h3>
        </C.CoursesTittle>
        <C.CoursesList>
          {[
            {
              title: 'Desenvolvimento frontend',
              content: 'O desenvolvimento frontend é a arte de criar interfaces visuais interativas para os usuários. Aqui, você aprenderá a dominar HTML, CSS, e JavaScript para construir sites e aplicações web que são não apenas funcionais, mas também atraentes e intuitivos.',
              modules: ['HTML', 'CSS', 'JavaScript', 'React', 'Design Responsivo'],
              priceBefore: 'R$ 1.200,00',
              priceNow: 'R$ 799,00',
              installment: 'R$ 79,90 em 12x'
            },
            {
              title: 'Desenvolvimento backend',
              content: 'No desenvolvimento backend, você estará por trás dos bastidores, criando a lógica e infraestrutura que suportam aplicações web. Aprenda a trabalhar com servidores, bancos de dados, e APIs para garantir que tudo funcione de forma eficiente e segura.',
              modules: ['Lógica de Programação', 'Banco de Dados', 'APIs', 'Node.js', 'Segurança'],
              priceBefore: 'R$ 1.500,00',
              priceNow: 'R$ 999,00',
              installment: 'R$ 99,90 em 12x'
            },
            {
              title: 'Desenvolvimento mobile',
              content: 'Com o crescimento do uso de dispositivos móveis, o desenvolvimento mobile se tornou essencial. Neste curso, você aprenderá a criar aplicativos para Android e iOS, utilizando frameworks como React Native e Flutter para alcançar usuários em todas as plataformas.',
              modules: ['React Native', 'Flutter', 'Publicação na Play Store', 'Publicação na App Store'],
              priceBefore: 'R$ 1.800,00',
              priceNow: 'R$ 1.299,00',
              installment: 'R$ 129,90 em 12x'
            },
            {
              title: 'Cientista de dados & IA',
              content: 'A ciência de dados e a inteligência artificial estão revolucionando indústrias inteiras. Aqui, você aprenderá a analisar grandes volumes de dados, construir modelos preditivos e desenvolver soluções inteligentes que podem transformar negócios e vidas.',
              modules: ['Python', 'Estatística', 'Machine Learning', 'Deep Learning', 'Big Data'],
              priceBefore: 'R$ 2.000,00',
              priceNow: 'R$ 1.499,00',
              installment: 'R$ 149,90 em 12x'
            }
          ].map((course, index) => (
            <C.Course key={index} onClick={() => toggleCourse(index)}>
              <C.CourseTittle>
                <h3>
                  {course.title}
                  <i><KeyboardDoubleArrowDownIcon /></i>
                </h3>
              </C.CourseTittle>
              <C.CourseInfos className={activeIndex === index ? 'active' : ''}>
                <p>{course.content}</p>
                <C.ModulesList>
                  {course.modules.map((module, i) => (
                    <li key={i}>{module}</li>
                  ))}
                </C.ModulesList>
                <C.PriceInfo>
                  <span className="price-before">{course.priceBefore}</span>
                  <span className="price-now">por {course.priceNow}</span>
                  <C.ButtonInstallment>
                    <C.AddButton>Comprar</C.AddButton>
                  </C.ButtonInstallment>
                  <C.Installment>
                    <span className="installment">{course.installment}</span>
                  </C.Installment>
                </C.PriceInfo>
              </C.CourseInfos>
            </C.Course>
          ))}
        </C.CoursesList>
      </C.CourseContainer>
      <CoursesInfo />
    </C.Container>
  );
};

export default Courses;
