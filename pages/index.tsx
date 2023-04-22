import { Form } from '@/components/Form/Form'
import { Title } from '@/components/Title/Title'
import { RootState } from '@/store'
import style from '@/styles/Home.module.css'
import { Noto_Sans_JP } from 'next/font/google'
import Head from 'next/head'
import { useSelector } from 'react-redux'

const notoSans = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Home() {
  const themeColor = useSelector((state: RootState) => state.themeColor.color)

  return (
    <>
      <Head>
        <meta name="theme-color" content={themeColor} />
      </Head>
      <main className={`${notoSans.className} ${style.main}`}>
        <Title>Login</Title>
        <Form />
      </main>
    </>
  )
}
