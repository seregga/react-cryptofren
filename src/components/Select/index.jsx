import { useState } from 'react';
import Select, { components } from 'react-select'

import style from './styles.module.scss'

export const SelectDefault = ({ defaultValue, options, change }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState(defaultValue || '')

  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div className={style.wrapper}>
      <Select
        name="mint"
        defaultValue={defaultValue}
        options={options}
        value={
          typeof value === 'string' || typeof value === 'number'
            ? options.reduce((acc, option) => (option.value === value ? option : acc), {})
            : value
        }
        menuPortalTarget={document.body}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleBlur}
        onChange={(e) => {
          change && change(e)
          setValue(e)
          setIsFocused(false)
        }}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  )
}