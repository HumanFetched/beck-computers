import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button, Input, InputPhone } from '../../components';
import { LOGO_125x125 } from '../../utils/constants';
import { useAppDispatch } from '../../state';
import { CountryData } from 'react-phone-input-2';
import { nseApi } from '../../services';
import { toast } from 'react-toastify';

/* eslint-disable-next-line */
export interface VerifyPhoneProps {
  onVerifySuccess: (phone: string) => void;
}

export const VerifyPhone: React.FC<VerifyPhoneProps> = ({
  onVerifySuccess,
}) => {
  const dispatch = useAppDispatch();

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState({
    dialCode: '',
    phoneNumber: '',
  });
  const [loader, setLoader] = useState({
    otpSend: false,
    phoneVerify: false,
  });
  const [allowResendOtp, setAllowResendOtp] = useState({
    status: false,
    seconds: 15,
  });

  const handleInterval = () => {
    setAllowResendOtp((prevState) => ({
      ...prevState,
      status: false,
      seconds: 15,
    }));
    let intervalSeconds = 15;
    const interval = setInterval(() => {
      if (intervalSeconds <= 1) {
        clearInterval(interval);
        setAllowResendOtp((prevState) => ({
          ...prevState,
          status: true,
        }));
      }
      setAllowResendOtp((prevState) => ({
        ...prevState,
        seconds: prevState.seconds - 1,
      }));

      intervalSeconds = intervalSeconds - 1;
    }, 1000);
  };
  const resenOtp = () => {
    handleInterval();
    dispatch(
      nseApi.endpoints.sendPhoneNumberVerifyOtp.initiate({
        phoneNumber: phoneNumber.phoneNumber,
        dialCode: `+${phoneNumber.dialCode}`,
      }),
    )
      .unwrap()
      .then((res) => {
        setIsCodeSent(true);
        toast(res.message || 'OTP sent successfully', {
          type: 'success',
        });
      })
      .catch((err) => {
        toast(
          err.data.messsage || 'Some error occured, please try after some time',
          {
            type: 'error',
          },
        );
      })
      .finally(() => {
        setLoader({
          otpSend: false,
          phoneVerify: false,
        });
      });
  };

  return (
    <div className="space-y-6 py-0 md:py-20">
      <div className="flex flex-col justify-center w-full space-y-2">
        <div className="w-full flex justify-center">
          <img className="w-16" src={LOGO_125x125} alt="logo" />
        </div>
        <div className="space-y-2">
          {isCodeSent ? (
            <h1 className="text-center font-bold text-2xl md:text-3xl">
              Verify phone number
            </h1>
          ) : (
            <h1 className="text-center font-bold text-2xl md:text-3xl">
              Change phone number
            </h1>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center space-y-8 p-2 w-full">
        <div className="max-w-lg w-full">
          <div className="rounded-lg p-8 space-y-6 h-auto shadow-md">
            {!isCodeSent ? (
              <Formik
                initialValues={{
                  phoneNumber: '',
                  dialCode: '',
                }}
                onSubmit={(values) => {
                  setLoader({
                    otpSend: true,
                    phoneVerify: false,
                  });
                  const { phoneNumber, dialCode } = values;
                  dispatch(
                    nseApi.endpoints.sendPhoneNumberVerifyOtp.initiate({
                      phoneNumber: phoneNumber.replace(dialCode, ''),
                      dialCode: `+${dialCode}`,
                    }),
                  )
                    .unwrap()
                    .then((res) => {
                      handleInterval();
                      setIsCodeSent(true);
                      setPhoneNumber({
                        dialCode,
                        phoneNumber: phoneNumber.replace(dialCode, ''),
                      });
                      toast(res.message || 'OTP sent successfully', {
                        type: 'success',
                      });
                    })
                    .catch((err) => {
                      toast(
                        err.data.messsage ||
                          'Some error occured, please try after some time',
                        {
                          type: 'error',
                        },
                      );
                    })
                    .finally(() => {
                      setLoader({
                        otpSend: false,
                        phoneVerify: false,
                      });
                    });
                }}
              >
                {(formik) => {
                  const { values, setFieldValue } = formik;
                  return (
                    <Form>
                      <div className="w-full space-y-6">
                        <div className="space-y-2">
                          <InputPhone
                            inputProps={{
                              name: 'phoneNumber',
                              style: {
                                width: '100%',
                              },
                              autoFocus: true,
                            }}
                            label="Mobile Number"
                            placeholder="Enter your phone number"
                            enableAreaCodes
                            enableSearch
                            disableSearchIcon
                            value={values.phoneNumber}
                            onChange={(value, country) => {
                              const dialCode = (country as CountryData)
                                .dialCode;
                              setFieldValue('dialCode', dialCode);
                              setFieldValue('phoneNumber', value);
                            }}
                          />
                        </div>

                        <div className="space-y-2">
                          <Button
                            htmlType="submit"
                            type="secondary"
                            block
                            loading={loader.otpSend}
                          >
                            Send Verification Code
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <p className="text-center text-gray-700 text-sm">
                            Note: SMS Charges may apply
                          </p>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            ) : (
              <Formik
                initialValues={{
                  phoneNumber: `${phoneNumber.dialCode}${phoneNumber.phoneNumber}`,
                  dialCode: '',
                  otp: '',
                }}
                onSubmit={(values) => {
                  setLoader({
                    otpSend: false,
                    phoneVerify: true,
                  });
                  const { phoneNumber, dialCode, otp } = values;
                  dispatch(
                    nseApi.endpoints.verifyPhoneNumber.initiate({
                      phoneNumber: phoneNumber.replace(dialCode, ''),
                      dialCode: `+${dialCode}`,
                      otp: otp,
                    }),
                  )
                    .unwrap()
                    .then((res) => {
                      toast(
                        res.message || 'Phone number verified successfully',
                        {
                          type: 'success',
                        },
                      );
                      onVerifySuccess(phoneNumber);
                    })
                    .catch((err) => {
                      toast(
                        err.data?.message ||
                          'Some error occured, please try after some time',
                        {
                          type: 'error',
                        },
                      );
                    })
                    .finally(() => {
                      setLoader({
                        otpSend: false,
                        phoneVerify: false,
                      });
                    });
                }}
              >
                {(formik) => {
                  const { values, setFieldValue, handleChange } = formik;
                  return (
                    <Form>
                      <div className="w-full space-y-6">
                        <div className="space-y-2">
                          <InputPhone
                            inputProps={{
                              name: 'phoneNumber',
                              style: {
                                width: '100%',
                              },
                            }}
                            disabled
                            label="Mobile Number"
                            placeholder="Enter your phone number"
                            enableAreaCodes
                            enableSearch
                            disableSearchIcon
                            value={`${phoneNumber.dialCode}${phoneNumber.phoneNumber}`}
                            onChange={(value, country) => {
                              const dialCode = (country as CountryData)
                                .dialCode;
                              setFieldValue('dialCode', dialCode);
                              setFieldValue('phoneNumber', value);
                            }}
                          />
                        </div>

                        <div className="space-y-2">
                          <Input
                            label="Enter verification code sent to mobile phone"
                            marker="otp"
                            value={values.otp}
                            name="otp"
                            id="otp"
                            onChange={(marker, value, event) => {
                              handleChange(event);
                            }}
                            autoFocus
                          />
                        </div>

                        <div className="space-y-2 flex flex-col items-center">
                          {!allowResendOtp.status && (
                            <p className="center text-gray-700 text-sm">
                              00:
                              {allowResendOtp.seconds < 10
                                ? '0' + allowResendOtp.seconds
                                : allowResendOtp.seconds}
                            </p>
                          )}
                          <p className="text-center text-gray-700 text-sm">
                            Didn&apos;t receive the code?
                            <span
                              className={`text-secondary ${
                                allowResendOtp.status
                                  ? 'cursor-pointer'
                                  : 'cursor-not-allowed opacity-50'
                              }`}
                              onClick={() => {
                                if (allowResendOtp.status) resenOtp();
                              }}
                            >
                              {' '}
                              Resend OTP
                            </span>
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Button
                            htmlType="submit"
                            type="secondary"
                            block
                            disabled={!values.otp}
                            loading={loader.phoneVerify}
                          >
                            Verify Code
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <p className="text-center text-gray-700 text-sm">
                            Note: SMS Charges may apply
                          </p>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhone;
