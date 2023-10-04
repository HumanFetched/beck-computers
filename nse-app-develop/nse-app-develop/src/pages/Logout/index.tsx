import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, userActions } from '../../lib/state';
import { setUserTokens } from '../../lib/utils/helper';

/* eslint-disable-next-line */
export interface LogoutProps {}

export const Logout: React.FC<LogoutProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userActions.reset());
    setUserTokens({ token: '', refreshToken: '' });
    navigate('/user/signin');
  }, []);

  return <div></div>;
};

export default Logout;
