import './index.css'

const Text = () => {
  return (
    <div className="text">
        <p>
            A fórmula do Metabolic Fire é feita com ingredientes de <span className="bold">altíssima qualidade, 100% naturais e que não possui efeitos colaterais</span>:
        </p>
        <ul>
            <li>
                <img src="./images/check.png" alt="Check" />
                <p>Cromo</p>
            </li>
            <li>
                <img src="./images/check.png" alt="Check" />
                <p>Taurina</p>
            </li>
            <li>
                <img src="./images/check.png" alt="Check" />
                <p>Cafeína</p>
            </li>
            <li>
                <img src="./images/check.png" alt="Check" />
                <p>Tirosina</p>
            </li>
            <li>
                <img src="./images/check.png" alt="Check" />
                <p>Enzima Q10</p>
            </li>
            <li>
                <img src="./images/check.png" alt="Check" />
                <p>Vitamina B6</p>
            </li>
        </ul>
        <p></p>
        Combinados nas medidas e proporções ideais no Metabolic Fire ele te ajuda a <span className="bold">perder aquela gordurinha indesejada</span>.
    </div>
  );
}

export default Text;
