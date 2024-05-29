import React from 'react'
import './GalleryImage.scss'
import { IProps } from '@/types/types'

const GalleryImage = ({children, styleImg}:IProps) => {
  return (
    <div className={styleImg}>
        <img src={children} alt="image" />
        <span></span>
    </div>
  )
}

export default GalleryImage