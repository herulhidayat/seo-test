import { ReactSelectStyle } from '@app/styled/react-select/react-select.config';
import { get } from 'lodash';
import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

export default function SelectStatic({
  control,
  errors,
  fieldName,
  placeholder='Pilih...',
  options,
  defaultValue='',
  className='',
  required=false,
  isClearable = false,
  additionalOptions = {}
}: ISelectStatic) {
  return (
    <>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={fieldName}
        rules={{
          required: required,
        }}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            className={className}
            placeholder={placeholder}
            styles={ReactSelectStyle}
            classNamePrefix={`${get(errors, fieldName) ? 'is-invalid' : ''}`}
            ref={ref}
            value={options.filter((c: any) => c.value == value)}
            onChange={(val: any) => onChange(val?.value)}
            options={options}
            isClearable={isClearable}
            {...additionalOptions}
          />
        )}
      />
      {get(errors, fieldName) && (
        <div className="invalid-feedback d-block">
          {get(errors, fieldName)?.message}
        </div>
      )}
    </>
  );
}

type OptionSelect = {
  label: string;
  value: string | number | any;
}
interface ISelectStatic {
  control: any;
  errors: any;
  fieldName: string;
  placeholder?:string;
  options: OptionSelect[];
  defaultValue?:any
  className?:string
  required?:boolean
  isClearable?:boolean,
  additionalOptions?: any,
}
