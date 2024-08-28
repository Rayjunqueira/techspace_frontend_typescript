import * as C from './styles';

import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';

import logo from '../../Assets/reviewsection/logoand.png';

const Navegation = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleOnHome = () => {
    navigate("/");
    setIsMobileOpen(false);
  }

  const handleMenuClick = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleCloseClick = () => {
    setIsMobileOpen(false);
  };

  const handleContactClick = () => {
    navigate("/contact");
    setIsMobileOpen(false);
  }

  const handleMenuCourses = () => {
    navigate("/courses");
    setIsMobileOpen(false);
  } 

  const handleErrorfind = () => {
    navigate("/errorfind");
    setIsMobileOpen(false);
  }

  return (
    <C.Container>
      <C.NavContainer> 
        <C.Logo>
          <img src={logo} alt="" onClick={handleOnHome} /> 
        </C.Logo>
        <C.Titles>
          <li onClick={handleOnHome}>Página inicial</li>
          <li onClick={handleMenuCourses}>Cursos</li>
          <li onClick={handleContactClick}>Plataforma</li>
        </C.Titles>
      </C.NavContainer>
      <C.NavMobileContainer>
        <C.burgerMobile onClick={handleMenuClick}>
          <i><MenuIcon id='menuicon' /></i>
        </C.burgerMobile>
        <C.LogoMobile>
          <img src={logo} alt="" onClick={handleOnHome} /> 
        </C.LogoMobile>
      </C.NavMobileContainer>
      <C.MobileOpen isOpen={isMobileOpen}>
        <C.MobileOpenHeader />
        <C.CloseIconContainer onClick={handleCloseClick}>
          <i><ClearIcon id='closeicon' /></i>
        </C.CloseIconContainer>
        <C.ListMobile> 
          <li onClick={handleOnHome}>Página inicial</li>
          <li onClick={handleMenuCourses}>Cursos</li>
          <li onClick={handleContactClick}>Plataforma</li>
        </C.ListMobile>
        <C.MobileOpenFooter />
      </C.MobileOpen>
    </C.Container>
  )
}

export default Navegation;