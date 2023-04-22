import { AppDispatch } from '@/store'
import { error } from '@/store/themeColor'
import { useDispatch } from 'react-redux'
import style from './Form.module.css'

export const Form = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleLogin = () => {
    dispatch(error())
  }

  return (
    <div className={style.form}>
      <div className={style.inputWrap}>
        <input type="text" className={style.input} placeholder="Your Email" />
      </div>
      <div className={style.inputWrap}>
        <input type="password" className={style.input} placeholder="Password" />
      </div>
      <button className={style.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
