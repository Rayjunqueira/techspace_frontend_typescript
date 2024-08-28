import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: black;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  color: #fff;
  padding: 20px;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  i {
    margin-left: 1vh;
  }

  h4 {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    text-align: left;
    margin-right: 20px;
  }
`;

export const ContactForm = styled.form`
  flex: 1;
  padding: 20px;
  background-color: black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  max-width: 500px;
  width: 100%;

  input {
    width: 100%;
    padding: 3px;
    min-height: 40px; 
    max-height: 60px; 
    margin-bottom: 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 1rem; 
  }

  textarea {
    width: 100%;
    min-height: 80px; 
    max-height: 200px; 
    padding: 3px;
    margin-bottom: 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 1rem; 
    resize: vertical; 
  }

  button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: #ff914d;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover { 
      background-color: #ff914d;
    }
  }

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

