import styled from "styled-components";

export const Container = styled.div `

`;

export const CourseContainer = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #fff;
  width: 100vw; 
  overflow-x: hidden; 
`;

export const CoursesTittle = styled.div`
  margin-bottom: 0vh;

  h3 {
    color: #333;
    font-size: 2rem;
    margin: 10px 0;
    position: relative;
    display: inline-block;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 50px;
      height: 2px;
      background-color: #ccc;
      top: 50%;
    }

    &::before {
      left: -60px;
    }

    &::after {
      right: -60px;
    }
  }

  hr {
    display: none; 
  }
`;

export const CourseTittle = styled.div`
  cursor: pointer;

  h3 {
    font-size: 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CoursesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const Course = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: calc(50% - 40px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CourseInfos = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;

  p {
    color: black;
    font-size: 1em;
    line-height: 1.5;
    margin-top: 10px;
  }

  &.active {
    max-height: 500px; 
  }
`;

export const ModulesList = styled.ul`
  margin-top: 15px;
  list-style-type: none;
  padding: 0;

  li {
    background-color: #f0f0f0;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    text-align: left;
    color: #333;
  }
`;

export const PriceInfo = styled.div`
  margin-top: 15px;
  text-align: left;

  .price-before {
    text-decoration: line-through;
    color: #999;
    font-size: 0.9em;
  }

  .price-now {
    display: block;
    font-size: 1.2em;
    color: #ff914d;
    margin: 5px 0;
  }

  .installment {
    font-size: 0.8em;
    color: #666;
  }
`;

export const ButtonInstallment = styled.div `
  text-align: center;
`;

export const Installment = styled.div `
  text-align: center;

  span {
    color: black;
  }
`;

export const AddButton = styled.button`
  background-color: #ff914d;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
  

  &:hover {
    background-color: #ff7a1c;
  }
`;
