import clsx from 'clsx';
import { useState } from 'react';

import { Button } from 'components/Button';
import { SelectDefault } from 'components/Select';

import useWindowSize from 'hooks/useWindowSize';

import 'swiper/css'
import style from './styles.module.scss'

export const SelectWithValue = ({ value, setValues, defaultValue }) => {
  const [isDisabled, setDisabled] = useState(false)

  const { width } = useWindowSize()

  const handleNextValue = () => {
    if (value >= 1 && value <= 4) {
      setValues(prev => (Number(prev) + 1))
    }
  }

  const handlePrevValue = () => {
    if (value >= 2 && value <= 5) {
      setValues(prev => (Number(prev) - 1))
    }
  }

  const data = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
  ]
  const changeValue = (opt) => {
    if (opt.value) {
      setValues(opt?.value)
    }
  }

  const customValidation = (e) => {
    const inputValue = e?.target?.value
    if (Number(inputValue) >= 1 && Number(inputValue) <= 5) {
      setValues(inputValue)
    } else if (inputValue !== '') {
      if (Number(inputValue) < 1) {
        setValues(1)
      } else if (Number(inputValue) > 5) {
        setValues(5)
      }
    }
  }

  const checkValidNumbers = (e) => {
    if (e.charCode < 49) {
      setValues(1)
    } else if (e.charCode > 53) {
      setValues(5)
    }
  }

  return (
    <>
      {width > 768 ?
        <div className={style.content}>
          <Button.WithArrow className={style.prev} onClick={handlePrevValue}/>
          <div className={style.box}>
            <div className={clsx(style.select, { [style.centerForOne]: Number(value) === 1 })}>
              <input
                disabled={isDisabled}
                defaultValue={defaultValue}
                value={value}
                onChange={(e) => {
                  if(e.target.value.length > 1) {
                    setValues(prev => prev)
                  } else {
                    setValues(e.target.value)
                  }
                }}
                onKeyPress={checkValidNumbers}
              />
            </div>
          </div>
          <Button.WithArrow className={style.next} onClick={handleNextValue}/>
        </div> :
        <SelectDefault defaultValue={data[0]} change={changeValue} options={data}/>
      }
    </>
  )
}