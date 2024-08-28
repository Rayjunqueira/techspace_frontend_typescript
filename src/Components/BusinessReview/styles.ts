import styled from "styled-components";

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
