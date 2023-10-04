import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Checkbox, Input } from '../../lib/components';
import { nseApi } from '../../lib/services';
import { useAppDispatch } from '../../lib/state';
import { LOGO_125x125 } from '../../lib/utils/constants';
import { setUserTokens } from '../../lib/utils/helper';
import * as Yup from 'yup';

/* eslint-disable-next-line */
export interface SigninProps {}

const signinSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email address is required')
    .email('Please enter a valid email address'),
  password: Yup.string().required('Passsword is required'),
});

export const Signin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // local states here below
  const [signinLoading, setSigninLoading] = useState(false);

  useEffect(() => {
    setUserTokens({ token: '', refreshToken: '' });
  }, []);

  return (
    <div className="flex justify-center flex-col space-y-8 p-2 md:p-0 max-w-lg w-full">
      <div className="w-full flex justify-center">
        <img className="w-16" src={LOGO_125x125} alt="logo" />
      </div>
      <div className="space-y-2">
        <h1 className="text-center font-bold text-2xl md:text-3xl">
          Sign-in to your account
        </h1>
        <p className="text-center text-sm text-gray-600">
          {"Don't"} have an account?
          <Link to={'/user/signup'} className="text-primary mx-1">
            Create a new one
          </Link>
        </p>
      </div>
      <div className="bg-white rounded-lg p-8 space-y-6 h-auto shadow-md">
        <Formik
          initialValues={{
            email: '',
            password: '',
            rememberMe: false,
          }}
          validationSchema={signinSchema}
          onSubmit={(values) => {
            // alert('login test');
            setSigninLoading(true);
            dispatch(
              nseApi.endpoints.signin.initiate({
                email: values.email,
                password: values.password,
              }),
            )
              .unwrap()
              .then((res) => {
                setUserTokens({
                  token: res.token,
                  refreshToken: res.refreshToken,
                });
                if (res.phone) {
                  navigate('/dashboard');
                } else {
                  navigate('/');
                }
              })
              .catch((err) => {
                toast(err.data?.message, {
                  type: 'error',
                });
              })
              .finally(() => {
                setSigninLoading(false);
              });
          }}
        >
          {(formik) => {
            const { setFieldValue } = formik;
            return (
              <Form>
                <div className="w-full space-y-4">
                  <div className="space-y-2">
                    <Field name="email">
                      {({ field, meta }: FieldProps) => (
                        <Input
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
                    <Field name="password">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          type="password"
                          label="Enter password"
                          marker="password"
                          name="password"
                          id="password"
                          isPasswordVisibility
                          value={field.value}
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(marker, value, event) => {
                            field.onChange(event);
                          }}
                          onBlur={(_marker, _value, e) => field.onBlur(e)}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <Field name="rememberMe">
                        {({ field }: FieldProps) => (
                          <Checkbox
                            label="Remember me"
                            checked={field.value}
                            onChange={(value) => {
                              setFieldValue('rememberMe', value);
                            }}
                          />
                        )}
                      </Field>
                    </div>
                    <Link
                      to={'/user/forgot-password'}
                      className="text-primary text-sm"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="space-y-2">
                    <Button
                      htmlType="submit"
                      type="primary"
                      block
                      loading={signinLoading}
                    >
                      Signin
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

export default Signin;
