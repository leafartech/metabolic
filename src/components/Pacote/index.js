import Checkout from '../Checkout'
import './index.css'

const Pacote = (props) => {
    return (
        <div className="oferta">
            <div className="head">
                <h3>{ props.titulo }</h3>
                <img src={ props.img } alt={ props.titulo } />
            </div>
            <div className="body">
                <p className="desc">{ props.desc }</p>
                <p>{ props.economize }</p>
                <h5><span>POR</span> { props.valor }</h5>
                <h6><span>12x</span>{ props.dividido }</h6>
            </div>
            <div className="footer">
                <Checkout link={ props.url } />
                <p>Entrega em até 10 dias, via Transportadora</p>
            </div>
        </div>
    )
}

export default Pacote