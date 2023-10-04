import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
/* eslint-disable-next-line */
export interface HomeProps { }


export const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/dashboard');
  }, []);

  return <></>;
};
