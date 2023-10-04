import { Form, Formik } from 'formik';
import React, { useMemo, useState } from 'react';
import { Button, Checkbox, Input, Modal, Select } from '../../components';
import { LOGO_125x125, TOAST_ACTION } from '../../utils/constants';
import countryList from 'react-select-country-list';
import * as Yup from 'yup';
import { IUser } from '../../types';
import { omit } from 'lodash';
import VerifyPhone from '../VerifyPhone';
import { useAppDispatch } from '../../state';
import { nseApi } from '../../services';
import { toast } from 'react-toastify';

/* eslint-disable-next-line */
export interface ProfileSettingProps {
  user: IUser;
}

const profileSettingSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address'),
  firstName: Yup.string().required("First name can't be empty"),
  companyName: Yup.string(),
  country: Yup.string(),
  address: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  zipCode: Yup.string(),
  vatOrGstNumber: Yup.string(),
});

export const ProfileSetting: React.FC<ProfileSettingProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const countryOptions = useMemo(() => countryList().getData(), []);

  // local state here
  const [verifyPhoneModal, setVerifyPhoneModal] = useState(false);
  const [updateProfileLoading, setUpdateProfileLoading] = useState(false);

  return (
    <>
      <div className="w-full space-y-4">
        <div className="w-full flex justify-center">
          <img className="w-16" src={LOGO_125x125} alt="logo" />
        </div>
        <div className="space-y-2">
          <h1 className="text-center font-bold text-2xl md:text-3xl">
            Profile Information
          </h1>
        </div>
        <div className="md:px-8">
          <Formik
            key={JSON.stringify(user)}
            initialValues={
              {
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.email || '',
                phone: user.phone || '',
                companyName: user.companyName || '',
                country: user.country || '',
                address: user.address || '',
                city: user.city || '',
                state: user.state || '',
                zipCode: user.zipCode || '',
                vatOrGstNumber: user.vatOrGstNumber || '',
              } as IUser
            }
            validationSchema={profileSettingSchema}
            onSubmit={(values) => {
              const toastId = toast.loading('Updating...');
              setUpdateProfileLoading(true);
              const omitedFields = ['email', 'phone']; // Omit this fields from update request
              const filteredValues = omit(values, omitedFields);
              dispatch(
                nseApi.endpoints.updateUser.initiate({
                  ...filteredValues,
                }),
              )
                .unwrap()
                .then(() => {
                  toast.update(toastId, {
                    render: 'User updated successfully',
                    type: 'success',
                    toastId: TOAST_ACTION.UPDATE_USER,
                    isLoading: false,
                    autoClose: 2000,
                    closeOnClick: true,
                    closeButton: true,
                  });
                })
                .catch((err) => {
                  toast.update(toastId, {
                    render:
                      err.data?.message ||
                      'Some error occured in update operation. Please try again',
                    type: 'error',
                    isLoading: false,
                    autoClose: 2000,
                    closeOnClick: true,
                    closeButton: true,
                  });
                })
                .finally(() => {
                  setUpdateProfileLoading(false);
                });
            }}
          >
            {(formik) => {
              const { values, errors, handleChange, setFieldValue } = formik;
              return (
                <Form>
                  <div className="w-full space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Input
                          marker="firstName"
                          label="First name"
                          value={values.firstName}
                          name="firstName"
                          id="firstName"
                          errorMessage={errors.firstName}
                          onChange={(value, marker, event) => {
                            handleChange(event);
                          }}
                          autoFocus
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          marker="lastName"
                          label="Last name"
                          value={values.lastName}
                          name="lastName"
                          id="lastName"
                          onChange={(value, marker, event) => {
                            handleChange(event);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          marker="email"
                          label="Email address"
                          value={values.email}
                          name="email"
                          id="email"
                          readonly
                          disabled
                          isChecked={Boolean(user.email)}
                          onChange={(value, marker, event) => {
                            handleChange(event);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          marker="phone"
                          label="Mobile number"
                          value={values.phone}
                          name="phone"
                          id="phone"
                          readonly
                          isChecked={Boolean(user.phone)}
                          onChange={(value, marker, event) => {
                            handleChange(event);
                          }}
                          onClick={() => setVerifyPhoneModal(true)}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div className="space-y-2 col-span-3">
                        <Input
                          marker="companyName"
                          label="Company name"
                          value={values.companyName || ''}
                          name="companyName"
                          id="companyName"
                          onChange={(value, marker, event) => {
                            handleChange(event);
                          }}
                        />
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Select
                          marker="country"
                          label="Country / Region"
                          placeholder="Select your country"
                          value={values.country || countryOptions[0].value}
                          options={countryOptions}
                          onChange={(marker, data) => {
                            setFieldValue('country', data.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Input
                        marker="address"
                        label="Street address"
                        value={values.address}
                        name="address"
                        id="address"
                        onChange={(value, marker, event) => {
                          handleChange(event);
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Input
                          marker="city"
                          label="City"
                          value={values.city}
                          name="city"
                          id="city"
                          onChange={(value, marker, event) => {
                            handleChange(event);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          marker="state"
                          label="State / Province"
                          value={values.state}
                          name="state"
                          id="state"
                          onChange={(value, marker, event) => {
                            handleChange(event);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          marker="zipCode"
                          label="ZIP / Postal"
                          value={values.zipCode}
                          name="zipCode"
                          id="zipCode"
                          onChange={(value, marker, event) => {
                            handleChange(event);
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Input
                        marker="vatOrGstNumber"
                        label="VAT / GST number"
                        value={values.vatOrGstNumber}
                        name="vatOrGstNumber"
                        id="vatOrGstNumber"
                        onChange={(value, marker, event) => {
                          handleChange(event);
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Checkbox label="Use different address as billing address" />
                    </div>
                    <div className="w-full flex justify-center">
                      <Button
                        htmlType="submit"
                        className="px-24"
                        disabled={Object.keys(errors).length > 0}
                        loading={updateProfileLoading}
                      >
                        Complete
                      </Button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <Modal
        visible={verifyPhoneModal}
        setVisible={(status) => {
          setVerifyPhoneModal(status);
        }}
        widthClass="max-w-4xl"
        footer={false}
        isClosable={true}
        centered
      >
        <VerifyPhone
          onVerifySuccess={() => {
            setVerifyPhoneModal(false);
          }}
        />
      </Modal>
    </>
  );
};

export default ProfileSetting;
