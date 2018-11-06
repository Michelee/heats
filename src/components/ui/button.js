import React from 'react'
import { Link } from 'gatsby'
import '../../styles/ui/button.scss'

const Button = props => (
  <Link
    to={props.url}
    className={`btn ${props.addClass}`}>
    {props.label}
  </Link>
)

export default Button;
