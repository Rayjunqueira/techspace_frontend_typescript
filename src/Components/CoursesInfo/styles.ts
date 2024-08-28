import styled from "styled-components";

export const ContainerCourseInfo = styled.div`
  background-color: #000;
  padding: 20px;
`;

export const CoursesInfoBuy = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;

  h3 {
    color: #fff;
    margin-top: 10px;
  }

  i {
    color: #ff914d;
    font-size: 40px;
  }
`;

export const CourseInfo = styled.div`
  background-color: #111;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #222;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    grid-column: span 2;
  }

  @media (max-width: 480px) {
    grid-column: span 3;
  }
`;
