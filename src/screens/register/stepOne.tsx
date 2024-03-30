import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { CustomTextInput } from '../../components/text-input';
import { Icons } from '../../assets/icons/const';
import { RegisterInformation } from '../../model/register';

export const StepOne = ({
  control,
}: {
  control: Control<RegisterInformation, any>;
}) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { value, onBlur, onChange } }) => (
          <CustomTextInput
            onChange={onChange}
            value={value}
            placeholder={'Nhập số điện thoại của bạn'}
            endIcon={Icons.Phone}
          />
        )}
        name={'phone'}
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { value, onBlur, onChange } }) => (
          <CustomTextInput
            onChange={onChange}
            value={value}
            placeholder={'Nhập tên hiển thị'}
            endIcon={Icons.User}
          />
        )}
        name={'displayName'}
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { value, onBlur, onChange } }) => (
          <CustomTextInput
            onChange={onChange}
            value={value}
            placeholder={'Nhập địa chỉ email'}
            endIcon={Icons.Mail}
          />
        )}
        name={'email'}
      />
    </>
  );
};
