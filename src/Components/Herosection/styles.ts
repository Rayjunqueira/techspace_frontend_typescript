import styled from "styled-components";

export const HerosectionContainer = styled.div`
    padding: 20px; 
`;

export const HeroTittle = styled.div`
    text-align: center;
    margin: 0 auto;
    max-width: 1200px; 

    h3 {
        color: #ff914d;
        font-family: "Ultra", sans-serif;
        font-size: 1.8rem;
        text-transform: uppercase;
        margin-bottom: 20px; 
    }

    p {
        color: #fff;
        font-size: 1rem; 
        line-height: 1.6; 
        max-width: 800px;
        margin: 0 auto; 
    }
    
    @media (min-width: 768px) {
        h3 {
            font-size: 2.3rem; 
        }
        p {
            font-size: 1.1rem; 
        }
    }

    @media (min-width: 1200px) {
        h3 {
            font-size: 3.5rem; 
                    font-family: "Ultra", sans-serif;
        }
        p {
            font-size: 1.8rem; 
        }
    }
`;

export const ButtonHeroContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  button {
    background-color: #ff914d;
    color: white;
    font-size: 1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #e57c3b;
      transform: scale(1.05);
    }

    &:active {
      background-color: #cc692e;
      transform: scale(0.95);
    }
  }

  @media (min-width: 768px) {
    button {
      font-size: 1.2rem;
      padding: 12px 24px;
    }
  }

  @media (min-width: 1200px) {
    button {
      font-size: 1.5rem;
      padding: 15px 30px;
    }
  }
`;

export const ExtraInfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; 
  margin-top: 50px;
`;

export const InfoExtra = styled.div`
  background-color: #1e1e1e; 
  color: #fff; 
  border-radius: 10px;
  padding: 20px; 
  width: 100%; 
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  text-align: center; 
  
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    margin: 0;

    i {
      margin-right: 10px;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    width: 45%; 
  }

  @media (min-width: 1200px) {
    width: 30%; 
  }
`;
