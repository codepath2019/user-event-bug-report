import React, { useEffect, useState } from 'react';
import { propEq } from 'ramda';

const eventIsEnterKey = propEq('key', 'Enter');

const SimpleTextarea = ({
  onChange = () => {},
  onEnter = () => {},
  placeholder,
  value: parentValue,
}) => {
  const [ value, setValue ] = useState(parentValue);

  useEffect(() => {
    if (parentValue === value) return
    setValue(parentValue)
  }, [ parentValue ])

  const handleOnEnter = () => {
    onEnter(value);
  }

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={e => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
      onKeyDown={
        e => {
          if (eventIsEnterKey(e)) {
            e.preventDefault()
            handleOnEnter()
          }
        }
      }
    />
  )
}

export default SimpleTextarea;
