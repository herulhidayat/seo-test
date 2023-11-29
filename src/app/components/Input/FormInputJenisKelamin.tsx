import React from 'react';
import { Form } from 'react-bootstrap';
import RequiredInfo from '../Tooltip/RequiredInfo';

export default function FormInputJenisKelamin({
  register,
  error,
  required=true,
}: IFormInputJenisKelamin) {
  return (
    <Form.Group className='mb-3'>
      <Form.Label>Jenis Kelamin {required && <RequiredInfo />}</Form.Label>
      <div className='my-2'>
        <Form.Check
          inline
          label='Laki-Laki'
          value='Laki-Laki'
          type={'radio'}
          isInvalid={!!error}
          {...register}
        />
        <Form.Check
          inline
          label='Perempuan'
          value='Perempuan'
          type={'radio'}
          isInvalid={!!error}
          {...register}
        />
      </div>
      {error && (
        <div className='invalid-feedback d-block'>{error?.message}</div>
      )}
    </Form.Group>
  );
}

interface IFormInputJenisKelamin {
  register: any;
  error: any;
  required?:boolean
}
