import { get } from 'lodash';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import ReactNumberFormat from 'react-number-format';

export default function FormInputMask({
  prefix = '',
  suffix = '',
  field,
  decimalScale = 0,
  placeholder = '',
  errors,
  control,
  required = false,
  ...props
}: IFormInputMask) {
  return (
    <>
      <Form.Group className='mb-3'>
        <Controller
          render={({ field: { onChange, value } }) => (
            <ReactNumberFormat
              className={`form-control${
                !!get(errors, field) ? ' is-invalid' : ''
              }`}
              thousandsGroupStyle='thousand'
              prefix={prefix}
              suffix={suffix}
              displayType='input'
              type='text'
              thousandSeparator={'.'}
              decimalSeparator=','
              allowNegative={true}
              value={value}
              decimalScale={decimalScale}
              placeholder={placeholder}
              onValueChange={(val: any) => onChange(val?.value)}
              {...props}
            />
          )}
          rules={{
            required: required,
          }}
          name={field}
          defaultValue={null}
          control={control}
        />
        {get(errors, field) && (
          <div className='invalid-feedback d-block'>
            {get(errors, field)?.message}
          </div>
        )}
      </Form.Group>
    </>
  );
}

interface IFormInputMask {
  prefix?: string;
  suffix?: string;
  errors: any;
  field: any;
  control: any;
  register: any;
  required?: boolean;
  placeholder?: string;
  decimalScale?: number;
}
