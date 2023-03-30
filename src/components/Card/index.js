import './index.css'

const Card = (props) => {
  return (
    <div className="card">
        <div>
            <img src={ props.img } alt={ props.titulo } />
            <h4 className="bold">{ props.titulo }</h4>
        </div>
        <p>{ props.desc }</p>
    </div>
  );
}

export default Card;
