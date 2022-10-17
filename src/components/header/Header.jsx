import React from "react";
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className="w-full flex justify-center">
      <img onClick={ handleClick } className="w-44  md:w-72 cursor-pointer" src="/durespo_logo.png" alt="Durespo logo" />
    </div>
  );
};

export default Header;
