import { AppDispatch } from '@/store'
import { error } from '@/store/themeColor'
import { useDispatch } from 'react-redux'

export const Form = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleLogin = () => {
    dispatch(error())
  }

  return (
    <>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="password" />
      </div>
      <button onClick={handleLogin}>ログイン</button>
    </>
  )
}
