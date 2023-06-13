import useTimeAgo from "@/hooks/useTimeAgo";
import Avatar from "../Avatar";

export default function Devit ({ avatar, userName, content, id, userId, createdAt }) {
    const timeago = useTimeAgo(createdAt)

    return (
        <>
            <article>
                <div>
                    <Avatar src={avatar} alt={userName}></Avatar>
                </div>
                <section>
                    <header>
                        <strong>{userName}</strong>
                        <span> · </span>
                        <span>{timeago}</span>
                    </header>
                    <p>{content}</p>
                </section>
            </article>

            <style jsx>{`
                article {
                    padding: 10px 15px;
                    display: flex;
                    border-bottom: 1px solid #eee;
                }
                div {
                    padding-right: 10px;
                }
                p {
                    line-height: 1.3125;
                    margin: 0;
                }
                date {
                    color: #555;
                    font-size: 14px;
                }
            `}
            </style>
        </>
    )
}
