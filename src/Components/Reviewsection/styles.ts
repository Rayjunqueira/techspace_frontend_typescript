import styled from "styled-components";

export const ReviewContainer = styled.div`
  margin: 40px 0;
`;

export const ReviewImg = styled.div `
  text-align: center; 
  margin: 20px 5px;
  padding: 20px;
  background-color: black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
`;

export const ReviewBusiness = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1px 0;
  padding: 10px;
  width: 100%;
`;

export const ReviewBusinessTitle = styled.div`
  margin-bottom: 10px;

  h4 {
    color: white;
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

export const BusinessLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 80px;
  }
`;

export const ReviewAba = styled.div `
  background-color: #fff;  
`;

export const ReviewText = styled.div`
  margin-bottom: 40px;
  text-align: center;

  h3 {
    color: black;
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
      background-color: #555;
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

  margin-bottom: 15px;
  text-align: center;

  h3 { 
    color: black;
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 1.4;
    font-weight: bold;
    margin: 0 10px;
  }
`;

export const StarImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  padding-top: 10px;
`;

export const ReviewRelates = styled.div`
  padding: 20px;
  background-color: #fff;
`;

export const ReviewRelatesTitle = styled.div`
  margin-bottom: 40px;
  text-align: center;

  h3 {
    color: black;
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
      background-color: #555;
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

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowLeft = styled.div`
  cursor: pointer;
  color: black;
  padding: 10px;
  font-size: 1.5rem;
`;

export const ArrowRight = styled(ArrowLeft)`
`;

export const UsersRelates = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px 0;
  scroll-behavior: smooth; 

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const UserRelate = styled.div`
  flex: 0 0 300px;
  color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  text-align: center;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: black;
  }

  p {
    font-size: 1rem;
    margin-bottom: 15px;
    color: black;
  }
`;

export const ReviewRating = styled.div`
  display: flex;
  justify-content: center;
  color: gold;
`;
 