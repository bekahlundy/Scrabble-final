import React from 'react';

const Input = ({className, placeholder, onChange}) => {
  return(
  <div>
    <input
      className={className}
      placeholder={placeholder}
      onChange={onChange}>
      </input>
  </div>
)
}

export default Input;
