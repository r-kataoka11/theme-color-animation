import { AppDispatch } from '@/store'
import { error } from '@/store/themeColor'
import clsx from 'clsx'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './Form.module.css'

export const Form = () => {
  const [showError, setShowError] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  // エラーだけとりあえず表示させる
  const handleLogin = () => {
    setShowError(true)
    dispatch(error())
  }

  return (
    <>
      <div
        className={clsx(style.error, {
          [style.errorShow]: showError,
        })}
      >
        <p>Login Error!</p>
      </div>
      <div className={style.form}>
        <div className={style.inputWrap}>
          <input type="text" className={style.input} placeholder="Your Email" />
        </div>
        <div className={style.inputWrap}>
          <input
            type="password"
            className={style.input}
            placeholder="Password"
          />
        </div>
        <button className={style.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  )
}
