import { FC } from 'react'
import style from './Title.module.css'

interface TitleProps {
  children?: string
}

export const Title: FC<TitleProps> = ({ children }) => (
  <>
    <h1 className={style.h1}>{children}</h1>
  </>
)
