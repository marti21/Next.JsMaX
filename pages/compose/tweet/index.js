import AppLayout from '@/components/AppLayout'
import Button from '@/components/Button'
import { addDevit } from '@/firebase/client'
import useUser from '@/hooks/useUser'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

const COMPOSE_STATES = {
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
    USER_NOT_KNOWN: 0
}
export default function CompseTweet () {
    const user = useUser()
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
    const router = useRouter()
    
    const handleChange = (event) => {
        const {value} = event.target
        setMessage(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setStatus(COMPOSE_STATES.LOADING)
        addDevit({
            avatar: user.avatar,
            content: message,
            userId: user.uid,
            userName: user.username
        }).then(() => {
            router.push("/home")
        }).catch(err => {
            setStatus(COMPOSE_STATES.ERROR)
        })
    }

    const isButtonDisabled = message.length === 0 || status === COMPOSE_STATES.LOADING

    return <>
        <AppLayout>
            <Head>
                    <title>Crear Tweet</title>
            </Head>
            <form onSubmit={handleSubmit}>
                <textarea onChange={handleChange} placeholder='¿Qué esta pasando?' value={message}></textarea>
                <div>
                    <Button disabled={isButtonDisabled}>Twittear</Button>
                </div>
            </form>
            
        </AppLayout>
        <style jsx>{`
            div {
                padding: 15px;
            }
            textarea {
                outline: 0;
                width: 100%;
                border: 0;
                padding: 15px;
                resize: none;
                min-height: 200px;
                font-size: 21px;
            }
        `}</style>
    
    </>
}