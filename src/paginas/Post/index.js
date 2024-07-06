import "./Post.css"

import { Route, Routes, useParams } from "react-router-dom";

import posts from "json/posts.json"
import PostModelo from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";
import Recomendados from "components/Recomendados";

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === parseInt(parametros.id)
    })

    if (!post) {
        return (
            <NaoEncontrada />
        )
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <Recomendados postAtual={post}/>

                    </PostModelo>
                }>
                </Route>
            </Route>
        </Routes>
    )
}
