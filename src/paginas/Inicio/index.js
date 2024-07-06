import style from "./Incio.module.css";

import posts from "json/posts.json"
import PostCard from "components/PostCard";

export default function Inicio() {
    return (
            <ul className={style.posts}> 
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} mt="mt"/>
                    </li>
                ))}
            </ul>

    )
}