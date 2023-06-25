import useTimeAgo from "@/hooks/useTimeAgo";
import Avatar from "../Avatar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Devit ({ avatar, userName, content, id, userId, createdAt, imgUrl }) {
    const timeago = useTimeAgo(createdAt)
    const router = useRouter()
    
    const handleArticleClick = (e) => {
        e.preventDefault()
        router.push(`/status/${id}`)
    }

    return (
        <>
            <article onClick={handleArticleClick}>
                <div>
                    <Avatar src={avatar} alt={userName}></Avatar>
                </div>
                <section>
                    <header>
                        <strong>{userName}</strong>
                        <span> · </span>
                        <Link href={`/status/${id}`}>
                            <time>{timeago}</time>
                        </Link>
                    </header>
                    <p>{content}</p>
                    {imgUrl && <img src={imgUrl}></img>}
                </section>
            </article>

            <style jsx>{`
                article {
                    padding: 10px 15px;
                    display: flex;
                    border-bottom: 1px solid #eee;
                }
                img {
                    height: auto;
                    width: 100%;
                    border-radius: 10px;
                    margin-top: 10px;
                }

                div {
                    padding-right: 10px;
                }
                p {
                    line-height: 1.3125;
                    margin: 0;
                }
                time {
                    color: #555;
                    font-size: 14px;
                }
            `}
            </style>
        </>
    )
}
