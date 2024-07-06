import { Link } from "react-router-dom"
import style from "./PostCard.module.css"
import BotaoPrinciapl from "components/BotaoPrincipal"

function PostCard({ post, mt}) {
    return (
        <Link to={`/posts/${post.id}`
            }>
            <div className={`
                ${style.post}
                ${style[mt]}
            `}>
                <img className={style.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Capa do post"
                />

                <h2 className={style.titulo}>
                    {post.titulo}
                </h2>
                <BotaoPrinciapl>Ler</BotaoPrinciapl>
            </div>
        </Link>

    )
}

export default PostCard