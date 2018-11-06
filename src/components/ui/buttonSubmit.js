import React from 'react'
import '../../styles/ui/button-submit.scss'

const ButtonSubmit = ({ type = 'submit', label}) => (
  <button
    type={type}
    className='btn'>
    {label}
  </button>
)

export default ButtonSubmit;
