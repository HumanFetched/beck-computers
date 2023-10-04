import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Input } from '../../lib/components';
import { nseApi } from '../../lib/services';
import { useAppDispatch } from '../../lib/state';
import { LOGO_125x125, PASSWORD_MAX_LENGTH } from '../../lib/utils/constants';
import { getPasswordValidations, useQuery } from '../../lib/utils/helper';
import * as Yup from 'yup';

/* eslint-disable-next-line */
export interface ResetPasswordProps {}

const resetPasswordSchema = Yup.object().shape({
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
  code: Yup.string().required('Verification code is required'),
});

export const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const email = query.get('email');

  // local states here below
  const [resetPasswordLoading, setResetPasswordLoading] = useState(false);

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
            email: email,
            code: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={resetPasswordSchema}
          onSubmit={(values) => {
            if (!values.email) return;
            setResetPasswordLoading(true);
            dispatch(
              nseApi.endpoints.resetPassword.initiate({
                email: values.email,
                code: values.code,
                password: values.password,
              }),
            )
              .unwrap()
              .then(() => {
                toast('Password reset successfully', {
                  type: 'success',
                });
                navigate(`/user/signin`);
              })
              .catch(() => {
                toast('Something went wrong, Please try after some time!', {
                  type: 'error',
                });
              })
              .finally(() => {
                setResetPasswordLoading(false);
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
                          label="Enter email address"
                          marker="email"
                          name="email"
                          type="email"
                          id="email"
                          disabled={email ? true : false}
                          value={field.value}
                          errorMessage={meta.touched ? meta.error : ''}
                          onChange={(_marker, _value, event) => {
                            field.onChange(event);
                          }}
                          autoFocus
                        />
                      )}
                    </Field>
                  </div>
                  <div className="space-y-2">
                    <Field name="code">
                      {({ field, meta }: FieldProps) => (
                        <Input
                          label="Enter code"
                          marker="code"
                          name="code"
                          id="code"
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
                  <div className="space-y-2">
                    <Field name="password">
                      {({ field, meta }: FieldProps) => (
                        <>
                          <Input
                            label="Enter new password"
                            marker="password"
                            type="password"
                            name="password"
                            id="password"
                            value={field.value}
                            errorMessage={meta.touched ? meta.error : ''}
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
                          label="Confirm password"
                          marker="confirmPassword"
                          type="password"
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

                  <div className="space-y-2">
                    <Button
                      htmlType="submit"
                      type="primary"
                      block
                      loading={resetPasswordLoading}
                    >
                      Reset
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

export default ResetPassword;
