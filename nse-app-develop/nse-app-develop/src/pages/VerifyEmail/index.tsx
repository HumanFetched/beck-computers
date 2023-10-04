import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button, Input } from '../../lib/components';
import { nseApi } from '../../lib/services';
import { useAppDispatch } from '../../lib/state';
import { LOGO_125x125 } from '../../lib/utils/constants';
import { useQuery } from '../../lib/utils/helper';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface VerifyEmailProps {}

const verifyCodeValidationSchema = Yup.object().shape({
  code: Yup.string().required('Verification code is required'),
});

export const VerifyEmail = () => {
  const dispatch = useAppDispatch();

  const query = useQuery();
  const email = query.get('email');
  const navigate = useNavigate();

  // local states here below
  const [verifyEmailLoading, setVerifyEmailLoading] = useState(false);

  const [codeErrorMessage, setCodeErrorMessage] = useState('');

  const handleResendCode = (email: string | null) => {
    setCodeErrorMessage('');
    if (!email) {
      toast('Invalid query params', {
        type: 'error',
      });
      return;
    }
    dispatch(
      nseApi.endpoints.resendEmailVerification.initiate({
        email: email || '',
      }),
    )
      .unwrap()
      .then(() => {
        toast('Verification code send successfully', {
          type: 'success',
        });
      })
      .catch(() => {
        toast(
          'Some error occured while resending confirmation. Please try after some time',
          {
            type: 'error',
          },
        );
      });
  };

  return (
    <div className="flex justify-center flex-col space-y-8 p-2 md:p-0 max-w-lg w-full">
      <div className="w-full flex justify-center">
        <img className="w-16" src={LOGO_125x125} alt="logo" />
      </div>
      <div className="space-y-2">
        <h1 className="text-center font-bold text-2xl md:text-3xl">
          Verify your email
        </h1>
      </div>
      <div className="bg-white rounded-lg p-8 space-y-6 h-auto shadow-md">
        <p className="text-gray-700 text-md">
          A verification code has been sent to your registered email address.{' '}
        </p>
        <Formik
          initialValues={{
            code: '',
          }}
          validationSchema={verifyCodeValidationSchema}
          onSubmit={(values) => {
            setVerifyEmailLoading(true);
            setCodeErrorMessage('');
            if (!email) {
              toast('Email id required', {
                type: 'error',
              });
              return;
            }
            dispatch(
              nseApi.endpoints.verifyEmail.initiate({
                code: values.code,
                email,
              }),
            )
              .unwrap()
              .then(() => {
                setCodeErrorMessage('');
                toast('Email verified successfully !', {
                  type: 'success',
                });
                navigate(`/user/signin`);
              })
              .catch((err) => {
                setCodeErrorMessage(err.data?.message);
                toast(err.data?.message, {
                  type: 'error',
                });
              })
              .finally(() => {
                setVerifyEmailLoading(false);
              });
          }}
        >
          {(formik) => {
            const { handleChange, values, errors } = formik;
            return (
              <Form>
                <div className="w-full space-y-4">
                  <div className="space-y-2">
                    <Input
                      label="Enter code to verify your email."
                      marker="code"
                      name="code"
                      id="code"
                      value={values.code}
                      errorMessage={errors.code || codeErrorMessage}
                      onChange={(marker, value, event) => {
                        handleChange(event);
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Button
                      htmlType="submit"
                      type="primary"
                      block
                      loading={verifyEmailLoading}
                    >
                      Verify
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p
                      className="text-primary-500 text-center text-sm cursor-pointer"
                      onClick={() => handleResendCode(email)}
                    >
                      Resend Code
                    </p>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default VerifyEmail;
