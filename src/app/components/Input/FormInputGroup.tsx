import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import styled from 'styled-components'
import FormInputControl from './FormInputControl'

export default function FormInputGroup({ label, field, type = 'text', register, suffix, prefix, required = false, placeholder = null }: IFormInputGroup) {
  return (
    <FormGroup className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}
      <InputGroup>
        {prefix && <InputGroup.Text>{prefix}</InputGroup.Text>}
        <FormInputControl
          className="mb-0"
          type={type}
          formGroup={false}
          required={required}
          register={register}
          isInvalid={!!field}
          message={field?.message}
          placeholder={placeholder}
        />
        {suffix && <InputGroup.Text>{suffix}</InputGroup.Text>}
      </InputGroup>
      <Form.Control.Feedback type="invalid" className="d-block">
        {field?.message}
      </Form.Control.Feedback>
    </FormGroup>
  )
}


const FormGroup = styled(Form.Group)`
  .form-control{
    border-right:0;
  }
`
interface IFormInputGroup {
  register: any
  field: any
  type?: any
  label?: string
  prefix?: string
  suffix?: string
  placeholder?: string | any
  required?: boolean
}
