import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '../../lib/components';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../../lib/state';
import { nseApi } from '../../lib/services';
import { LOGO_125x125, PASSWORD_MAX_LENGTH } from '../../lib/utils/constants';
import { toast } from 'react-toastify';
import { getPasswordValidations } from '../../lib/utils/helper';
import { RefreshIcon } from '@heroicons/react/solid';

/* eslint-disable-next-line */
export interface SignupProps {}

interface ICaptcha {
  id: string;
  captcha: string;
}

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email address is required')
    .email('Please enter a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(
      PASSWORD_MAX_LENGTH,
      `Must be ${PASSWORD_MAX_LENGTH} characters or more`,
    )
    .matches(/[a-z]+/, 'at least 1 lowercase')
    .matches(/[A-Z]+/, 'at least 1 uppercase')
    .matches(/[@$!%*#?&]+/, 'at least 1 special character'),
  confirmPassword: Yup.string()
    .required('Confirm your new password')
    .oneOf(
      [Yup.ref('password'), null],
      'Confirm paasword must match with password',
    ),
  captcha: Yup.string().required('Captcha is required'),
});

export const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // local states here below
  const [signupLoading, setSignupLoading] = useState(false);
  const [captcha, setCaptcha] = useState<ICaptcha>({
    id: '',
    captcha: '',
  });

  useEffect(() => {
    getCaptcha();
  }, []);

  const getCaptcha = () => {
    dispatch(nseApi.endpoints.getCaptcha.initiate())
      .unwrap()
      .then((res) => {
        setCaptcha({
          id: res.id,
          captcha: res.captcha,
        });
      });
  };

  return (
    <div className="flex justify-center flex-col space-y-8 p-2 md:p-0 max-w-lg w-full">
      <div className="w-full flex justify-center">
        <img className="w-16" src={LOGO_125x125} alt="logo" />
      </div>
      <div className="space-y-2">
        <h1 className="text-center font-bold text-2xl md:text-3xl">
          Create an account
        </h1>
        <p className="text-center text-sm text-gray-600">
          Already have an account?
          <Link to={'/user/signin'} className="text-primary mx-1">
            Sign-in
          </Link>
        </p>
      </div>
      <div className="bg-white rounded-lg p-8 h-auto shadow-md">
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            captcha: '',
          }}
          validationSchema={signupSchema}
          onSubmit={(values) => {
            // alert("signup called");
            setSignupLoading(true);
            if (values.password !== values.confirmPassword) {
              toast('Confirm paasword must match with password', {
                type: 'error',
              });
              setSignupLoading(false);
              return;
            }
            dispatch(
              nseApi.endpoints.signup.initiate({
                email: values.email,
                password: values.password,
                captcha: {
                  captcha_id: captcha.id,
                  captcha_ans: values.captcha,
                },
              }),
            )
              .unwrap()
              .then((res) => {
                navigate(`/user/verify-email?email=${values.email}`);
                toast(res.message, {
                  type: 'success',
                });
              })
              .catch((err) => {
                getCaptcha();
                toast(
                  err?.data?.message ||
                    'Something went wrong, Please try after some time',
                  {
                    type: 'error',
                  },
                );
              })
              .finally(() => {
                setSignupLoading(false);
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
                          label="Email address"
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
                      {({ field }: FieldProps) => (
                        <>
                          <Input
                            type="password"
                            label="Password"
                            marker="password"
                            name="password"
                            id="password"
                            value={field.value}
                            onChange={(marker, value, event) => {
                              field.onChange(event);
                            }}
                            onBlur={(_marker, _value, e) => field.onBlur(e)}
                          />
                          <div>
                            <ul className="w-full list-none">
                              <li
                                className={`text-xs ${
                                  getPasswordValidations(field.value, 'length')
                                    ? 'text-green-400'
                                    : 'text-red-400'
                                }`}
                              >
                                at least {PASSWORD_MAX_LENGTH} charcters
                              </li>

                              <li
                                className={`text-xs ${
                                  getPasswordValidations(field.value, '1Lower')
                                    ? 'text-green-400'
                                    : 'text-red-400'
                                }`}
                              >
                                at least 1 lowercase
                              </li>

                              <li
                                className={`text-xs ${
                                  getPasswordValidations(field.value, '1Upper')
                                    ? 'text-green-400'
                                    : 'text-red-400'
                                }`}
                              >
                                at least 1 uppercase
                              </li>

                              <li
                                className={`text-xs ${
                                  getPasswordValidations(
                                    field.value,
                                    '1Special',
                                  )
                                    ? 'text-green-400'
                                    : 'text-red-400'
                                }`}
                              >
                                at least 1 special character
                              </li>
                            </ul>
                          </div>
                        </>
                      )}
                    </Field>
                  </div>
                  <div className="space-y-2">
                    <Field name="confirmPassword">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          type="password"
                          label="Re-enter Password"
                          marker="confirmPassword"
                          name="confirmPassword"
                          id="confirmPassword"
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

                  {/* Captcha */}
                  {captcha.captcha && (
                    <div className="grid grid-cols-6 gap-2">
                      <div
                        className="space-y-2 col-span-2 flex justify-center"
                        dangerouslySetInnerHTML={{
                          __html: `${captcha.captcha}`,
                        }}
                      ></div>
                      <div
                        onClick={() => getCaptcha()}
                        className="cursor-pointer col-span-1 self-end"
                      >
                        <RefreshIcon className={`h-5 w-5 text-gray-600`} />
                      </div>
                      <div className="col-span-3 flex items-center">
                        <Field name="captcha">
                          {({ field, meta }: FieldProps) => (
                            <div>
                              <Input
                                type="text"
                                marker="captcha"
                                name="captcha"
                                id="captcha"
                                placeholder="Enter Captcha"
                                value={field.value}
                                errorMessage={meta.touched ? meta.error : ''}
                                onChange={(marker, value, event) => {
                                  field.onChange(event);
                                }}
                                onBlur={(_marker, _value, e) => field.onBlur(e)}
                              />
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Button
                      htmlType="submit"
                      type="primary"
                      block
                      loading={signupLoading}
                    >
                      Next
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
