import { ReactSelectStyle } from '@app/styled/react-select/react-select.config'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'

const components = {
  DropdownIndicator: null,
}

const createOption = (label: string) => ({
  label,
  value: label,
})

function SelectCreatetableForm({
  control,
  fieldName,
  required,
  placeholder = 'Type something and press enter...',
  styles = ReactSelectStyle,
}: ISelectCreatetableForm) {
  const [inputValueLabel, setInputValueLabel] = useState<string>('')

  const handleInputChange = (inputValue: string) => {
    setInputValueLabel(inputValue)
  }

  return (
    <>
      <Controller
        control={control}
        defaultValue={''}
        name={fieldName}
        rules={{
          required: required,
        }}
        render={({ field: { onChange, value, ref } }) => (
          <>
            <CreatableSelect
              ref={ref}
              components={components}
              inputValue={inputValueLabel}
              isClearable
              isMulti
              menuIsOpen={false}
              value={value}
              onChange={(val: any) => {
                onChange(val)
              }}
              onInputChange={handleInputChange}
              onKeyDown={(event: any) => {
                if (!inputValueLabel) return
                switch (event.key) {
                  case 'Enter':
                  case 'Tab':
                    setInputValueLabel('')
                    const newValue: any = [...value, createOption(inputValueLabel)]
                    console.log(newValue)
                    onChange(newValue)
                    event.preventDefault()
                    break
                  default:
                    break
                }
              }}
              placeholder={placeholder}
              styles={styles}
            />
          </>
        )}
      />
    </>
  )
}

interface ISelectCreatetableForm {
  control: any;
  fieldName: any;
  required?: boolean;
  placeholder?: string;
  styles?: any;
}

export default SelectCreatetableForm