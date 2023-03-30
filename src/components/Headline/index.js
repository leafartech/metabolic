import './index.css'

const Headline = (props) => {
    return (
        <div className="headline">
            <h2 className="bold">{ props.titulo }</h2>
            <p>{ props.subtitulo }</p>
        </div>
    )
}

export default Headline