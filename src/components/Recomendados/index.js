import PostCard from "components/PostCard"
import styles from "./Recomendados.module.css"


import posts from "json/posts.json"

function Recomendados({ postAtual }) {

    return (
        <div className={styles.recomendados}>
            <h2 className={styles.titulo}>
                Outros posts que você pode gostar:
            </h2>
            <ul className={styles.listaRecomendados}>
            {posts.map((post, index) => {
                if (post.id !== postAtual.id && index <= 4) {
                    return(
                        <li key={post.id}>
                            <PostCard post={post} mt={''} />
                        </li>
                    )
                }
            })}
            </ul>

        </div>
    )
}

export default Recomendados