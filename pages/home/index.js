import AppLayout from '@/components/AppLayout'
import Devit from '@/components/Devit'
import Create from '@/components/Icons/Create'
import Home from '@/components/Icons/Home'
import Search from '@/components/Icons/Search'
import { fetchLatestDevits } from '@/firebase/client'
import useUser from '@/hooks/useUser'
import { colors } from '@/styles/theme'
import Head from 'next/head'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function HomePage () {
    const [timeline, setTimeline] = useState([])
    const user = useUser()

    useEffect(() => { user && fetchLatestDevits().then(timeline => {
        setTimeline(timeline)
    })
    }, [user])

    return (
        <>
            <AppLayout>
                <Head>
                    <title>Inicio / Marti</title>
                </Head>
                <header>
                    <h2>Inicio</h2>
                </header>

                <section>
                    {timeline.map(({ id, userName, avatar, content, userId, createdAt }) => (
                        <Devit key={id} avatar={avatar} userName={userName} content={content} id={userId} userId={userId} createdAt={createdAt} />
                    ))}
                </section>

                <nav>
                    <span>
                        <Link href="/home">
                            <Home stroke="#09f" width={32} height={32}></Home>
                        </Link>
                    </span>
                    <span>
                        <Link href="/search">
                            <Search stroke="#09f" width={32} height={32}></Search>
                        </Link>
                    </span>
                    <span>
                        <Link href="/compose/tweet">
                            <Create stroke="#09f" width={32} height={32}></Create>
                        </Link>
                    </span>
                </nav>
            </AppLayout>
            <style jsx>
            {`
                header {
                    height: 49px;
                    position: sticky;
                    solid: #ccc;
                    top: 0;
                    border-bottom: 1px solid #eee;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    background: #ffffffaa;
                    backdrop-filter: blur(5px);
                }    

                h2 {
                    font-weight: 800;
                    font-size: 21px;
                    padding-left: 15px;
                }

                nav {
                    bottom: 0;
                    position: sticky;
                    height: 49px;
                    border-top: 1px solid #eee;
                    width: 100%;
                    background: #fff;
                    display: flex;
                }

                section {
                    flex: 1;
                }

                nav span {
                    align-items: center;
                    height: 100%;
                    display: flex;
                    flex: 1 1 auto;
                    justify-content: center;
                }

                nav span:hover {
                    background: radial-gradient(#0099ff22 15%, transparent 16%);
                    background-size: 180px 180px;
                    background-position: center;
                }

                nav span:hover > :global(svg) {
                    stroke: ${colors.primary}
                }
            `}
            </style>
        </>
    )
}