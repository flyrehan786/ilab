import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrow from '../../assets/svgs/back.svg?react';

const BackBtn = ({ name, page, backToPrevious }) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    if (backToPrevious) {
      navigate(-1);
    } else {
      navigate(`/${page}`);
    }
  };
  return (
    <div onClick={handleBackClick} className={'flex items-center gap-x-2 cursor-pointer'}>
      <BackArrow />
      <span>{name}</span>
    </div>
  );
};

export default BackBtn;
