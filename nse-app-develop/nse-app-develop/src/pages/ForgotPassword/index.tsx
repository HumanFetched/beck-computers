import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Input } from '../../lib/components';
import { nseApi } from '../../lib/services';
import { useAppDispatch } from '../../lib/state';
import { LOGO_125x125 } from '../../lib/utils/constants';
import * as Yup from 'yup';

/* eslint-disable-next-line */
export interface ForgotPasswordProps {}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email address is required')
    .email('Please enter a valid email address'),
});

export const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // local states here below
  const [sendCodeLoading, setSendCodeLoading] = useState(false);

  return (
    <div className="flex justify-center flex-col space-y-8 p-2 md:p-0 max-w-lg w-full">
      <div className="w-full flex justify-center">
        <img className="w-16" src={LOGO_125x125} alt="logo" />
      </div>
      <div className="space-y-2">
        <h1 className="text-center font-bold text-2xl md:text-3xl">
          Reset Password
        </h1>
      </div>
      <div className="bg-white rounded-lg p-8 space-y-6 h-auto shadow-md">
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={forgotPasswordSchema}
          onSubmit={(values) => {
            setSendCodeLoading(true);
            dispatch(
              nseApi.endpoints.sendForgotPasswordCode.initiate({
                email: values.email,
              }),
            )
              .unwrap()
              .then(() => {
                toast('Code has been send on your email id', {
                  type: 'success',
                });
                navigate(`/user/reset-password?email=${values.email}`);
              })
              .catch(() => {
                toast('Something went wrong, Please try after some time', {
                  type: 'error',
                });
              })
              .finally(() => {
                setSendCodeLoading(false);
              });
          }}
        >
          {() => {
            return (
              <Form>
                <div className="w-full space-y-4">
                  <div className="space-y-2">
                    <Field name="email">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          type="email"
                          label="Enter email address"
                          marker="email"
                          name="email"
                          id="email"
                          value={field.value}
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(marker, value, event) => {
                            field.onChange(event);
                          }}
                          autoFocus
                        />
                      )}
                    </Field>
                  </div>

                  <div className="space-y-2">
                    <Button
                      htmlType="submit"
                      type="primary"
                      block
                      loading={sendCodeLoading}
                    >
                      Send code
                    </Button>
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

export default ForgotPassword;
