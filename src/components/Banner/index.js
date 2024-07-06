import style from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import minhafoto from "assets/minha_foto.png"

function Banner() {
    return (
        <div className={style.banner}>
            <div className={style.apresentacao}>
                <h1 className={style.titulo}>Olá Mundo!</h1>

                <p className={style.paragrafo}>
                    Olá a todos me chamo Henry Kanemoto sou aluno da divisão Front-end da escola Alura de programação
                </p>
            </div>

            <div className={style.imagens}>
            <img  className={style.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
            />
            <img   className={style.minhaFoto}
                src={minhafoto}
                alt="Foto do instrutor Antônio Evaldo"
            />
            </div>
        </div>
    )

}

export default Banner