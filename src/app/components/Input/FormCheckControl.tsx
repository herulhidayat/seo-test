import React from 'react'
import { Form } from 'react-bootstrap'
import { UseFormRegisterReturn } from 'react-hook-form';

const FormCheckControl: React.FC<{
  isInvalid: boolean | undefined;
  register: UseFormRegisterReturn;
  type?: 'checkbox' | 'radio' | 'switch';
  className?: string;
}> = ({
  isInvalid,
  register,
  type = 'checkbox',
  className = '',
}) => {
  return (
    <Form.Check {...register} type={type} isInvalid={isInvalid} className={className} />
  )
}

export default FormCheckControl