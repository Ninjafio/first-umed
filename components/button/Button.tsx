import React from 'react'
import { IProps } from '../../types/types'
import './Button.scss'

const Button = ({children, style, href}:IProps) => {
  return (
    <button className={style}><a href={href} target="_blank">{children}</a></button>
  )
}

export default Button