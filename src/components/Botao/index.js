import './index.css'

const Botao = (props) => {
    return (
        <a href="#ofertas" className="botao bold">{ props.cta }</a>
    )
}

export default Botao