import styled from "styled-components";

export const ContactLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  i {
    font-size: 2rem;
    color: white;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #ff914d;
      transform: scale(1.2); 
    }
  }

  @media (max-width: 768px) {
    gap: 10px; 
    i {
      font-size: 1.5rem; 
    }
  }
`;
