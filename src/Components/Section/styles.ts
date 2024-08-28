import styled from 'styled-components';

export const SectionContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: #f5f5f5; 
`;

export const SectionTitle = styled.div`
  margin-bottom: 40px;

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

export const CoursesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
      background-color: #fff;

`;

export const Course = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 15px;

    i {
      margin-left: 8px;
      color: #007BFF; 
    }
  }

  p {
    font-size: 1rem;
    color: #666;
    text-align: left;
  }
`;
