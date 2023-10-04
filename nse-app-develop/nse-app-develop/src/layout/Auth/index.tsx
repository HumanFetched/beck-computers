import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  ForgotPassword,
  Logout,
  ResetPassword,
  Signin,
  Signup,
  VerifyEmail,
} from '../../pages';

/* eslint-disable-next-line */
export interface AuthLayoutProps {}

export const AuthLayout: React.FC<AuthLayoutProps> = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default AuthLayout;
