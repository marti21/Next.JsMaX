import Head from 'next/head'
import AppLayout from '@/components/AppLayout'
import { breakpoints, colors, fonts } from '@/styles/theme'
import Button from '@/components/Button'
import GitHub from '@/components/Icons/GitHub'
import { loginWithGitHub, onAuthStateChangedUser } from '@/firebase/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useUser, { USER_STATES } from '@/hooks/useUser'

export default function Home () {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleClick = () => {
    loginWithGitHub()
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <Head>
            <title>Marti app</title>
            <link rel='icon' href='/favicon.ico' />
      </Head>

      <AppLayout>
        <section>
          <img src='/logo.png' alt='Logo'></img>
          <h1>MartiApp</h1>
          <h2>Talk about developement<br />with developers</h2>
          <div>
            {
              user === USER_STATES.NOT_LOGGED &&
              <Button onClick={handleClick}>
                <GitHub fill='white' width={24} heigth={24}/>
                  Login with GitHub
              </Button>
            }
            {
              user === USER_STATES.NOT_KNOWN && <img src={'/spinner.gif'}></img>
            }

          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }
        section {
          display: grid;
          place-items: center;
          place-content: center;
          height: 100%;
        }
        div {
          margin-top: 16px;
        }
        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 16px;
        }
        h2 {
          font-size: 21px;
          color: ${colors.secondary};
          margin: 0;
        }
      `}</style>

    </>
  )
}
