import Avatar from '@/components/Avatar'
import Button from '@/components/Button'
import { addDevit, uploadImage } from '@/firebase/client'
import useUser from '@/hooks/useUser'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const COMPOSE_STATES = {
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
    USER_NOT_KNOWN: 0
}

const DRAG_IMAGE_STATES = {
    ERROR: -1,
    NONE: 0,
    DRAG_OVER: 1,
    UPLOADING: 2,
    COMPLETE: 3
}

export default function CompseTweet () {
    const user = useUser()
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
    const router = useRouter()
    
    const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
    const [task, setTask] = useState(null)
    const [imgUrl, setImgUrl] = useState(null)

    useEffect(() => {
        if(task){
            let onProgress = () => {}
            let onError = () => {}
            let onComplete = () => {
                console.log('onComplete')
                task.snapshot.ref.getDownloadURL().then(imgUrl => {
                    setImgUrl(imgUrl)
                })
            }
            task.on('state_change',
            onProgress,
            onError,
            onComplete)
        }
    }, [task])
    
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
            userName: user.username,
            imgUrl: imgUrl
        }).then(() => {
            router.push("/home")
        }).catch(err => {
            setStatus(COMPOSE_STATES.ERROR)
        })
    }

    const handleDragEnter = (e) => {
        //Para que no abra la imagen el navegador por defecto
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
    }

    const handleDragLeave = (e) => {
        //Para que no abra la imagen el navegador por defecto
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.NONE)
    }

    const handleDrop = (event) => {
        //Para que no abra la imagen el navegador por defecto
        event.preventDefault()
        console.log(event)
        //Leer el archivo
        console.log(event.dataTransfer.files[0])
        setDrag(DRAG_IMAGE_STATES.NONE)
        const file = event.dataTransfer.files[0]
        const task = uploadImage(file)
        setTask(task)
        //console.log(task)
    }

    const isButtonDisabled = message.length === 0 || status === COMPOSE_STATES.LOADING

    return <>
        <Head>
            <title>Crear Tweet</title>
        </Head>
        <section className='form-container'>
            <section className='avatar-container'>
                {user && <Avatar src={user.avatar}></Avatar>}
            </section>

            <form onSubmit={handleSubmit}>
                <textarea onChange={handleChange} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop} placeholder='¿Qué esta pasando?' value={message}></textarea>
                {imgUrl && <section className='remove-img'>
                    <button onClick={() => setImgUrl(null)}>x</button>
                    <img src={imgUrl}></img>
                    </section>}
                <div>
                    <Button disabled={isButtonDisabled}>Twittear</Button>
                </div>
            </form>
        </section>                    
        
        <style jsx>{`
            div {
                padding: 15px;
            }
            form {
                margin: 10px;
            }
            .remove-img {
                position: relative;
            }
            .form-container {
                display: flex;
                align-items: flex-start;
            }
            .avatar-container {
                margin-top: 20px;
                padding-left: 10px;
            }
            button {
                position: absolute;
                right: 15px;
                background: rgba(0, 0, 0, 0.3);
                height: 32px;
                width: 32px;
                top: 15px;
                color: #fff;
                border: 0;
                border-radius: 999px;
            }
            button:hover {
                background: rgba(255, 255, 255, 0.3);
            }
            img {
                border-radius: 10px;
                height: auto;
                width: 100%;
            }
            textarea {
                outline: 0;
                width: 100%;
                border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER ? "3px dashed #09f" : "3px solid transparent"};
                border-radois: 10px;
                padding: 15px;
                resize: none;
                min-height: 200px;
                font-size: 21px;
            }
        `}</style>
    
    </>
}