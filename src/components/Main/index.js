import Botao from '../Botao'
import Card from '../Card'
import Garantia from '../Garantia'
import Headline from '../Headline'
import Pacote from '../Pacote'
import Slider from '../Slider'
import Text from '../Text'
import './index.css'

const Main = () => {
    return (
        <main>
            <section>
                <div className="content">
                    <Headline
                        titulo="Veja abaixo resultados reais"
                        subtitulo="Obtidos depois do Metabolic Fire. Arrasta pro lado."
                    />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src='../images/testimonials/1.png' alt='imagem' title='imagem' />
                    </div>
                    {/* <Slider /> */}
                </div>
                <img className="mt-sm" src="./images/prod2.png" alt="" />
            </section>
            <section className="mt-sm pb">
                <div className="content">
                    <Headline
                        titulo="Por que ele funciona tão bem?"
                        subtitulo="Saiba mais sobre o Metabolic Fire."
                    />
                    <p className="mt">O segredo está na pote!</p>
                    <p>Elaborada por um <span className="bold">especialista da área da saúde</span>, ela engloba enzimas e nutrientes que aceleram o seu metabolismo e estimulam o corpo a usar a <span className="bold">gordura como principal fonte de energia</span>, fazendo a pessoa perder peso de forma eficaz e duradoura.</p>
                </div>
                <img src="./images/bg2.png" alt="" />
                <Botao cta="QUERO MEU METABOLIC" />
            </section>
            <section className="pb">
                <Headline
                    titulo="Benefícios do Metabolic Fire"
                />
                <div className="mt-sm"></div>
                <Card
                    img="./images/cards/1.png"
                    titulo="Acelera o metabolismo"
                    desc="O metabolismo acelerado faz com que a pessoa queime as calorias mais rapidamente, concentrando menos gorduras, de forma que fica mais difícil ganhar peso."
                />
                <Card
                    img="./images/cards/2.png"
                    titulo="Efeito barriga chapada"
                    desc="Por acelerar o metabolismo e queimar a gordura localizada, reduz drasticamente a gordura abdominal."
                />
                <Card
                    img="./images/cards/3.png"
                    titulo="Diminui o apetite"
                    desc="Os ativos presentes em seus compostos diminuem o apetite e reduzem a absorção de açúcares e gorduras no organismo."
                />
                <Card
                    img="./images/cards/4.png"
                    titulo="Regula o intestino"
                    desc="Por ser composto por diversas fibras inteligentes, seu intestino começará a trabalhar de forma correta. Ajuda quem sofre com intestino preguiçoso."
                />
                <Botao cta="QUERO MEU METABOLIC" />
            </section>
            <section>
                <Headline
                    titulo="Conheça a fórmula!"
                    subtitulo=""
                />
                <Text />
                <img className="lastImg" src="./images/bg3.png" alt="" />
            </section>
            <section className="" id="ofertas">
                <Headline
                    titulo="Em dúvida sobre comprar pela internet?"
                    subtitulo="Fique tranquilo, comprar o Metabolic Fire é fácil, prático e totalmente seguro!"
                />
                <div className="mt-sm"></div>
                <Pacote
                    titulo="Pacote 3 meses"
                    img="./images/pote.png"
                    desc="Contém 1 unidade de Metabolic Fire com 60 cápsulas"
                    valor="157"
                    dividido="14"
                    url="https://seguro.onfirecompany.com.br/r/BDS8I6NGZ3"
                />
                <Pacote
                    titulo="Pacote 3 meses"
                    img="./images/pote2.png"
                    desc="Contém 3 unidades de Metabolic Fire com 180 cápsulas"
                    valor="387"
                    dividido="33"
                    economize="84"
                    url="https://seguro.onfirecompany.com.br/r/CO01VE2HYX"
                />
                <Pacote
                    titulo="Pacote 5 meses"
                    img="./images/pote3.png"
                    desc="Contém 5 unidades de Metabolic Fire com 300 cápsulas"
                    valor="467"
                    dividido="39"
                    economize="318"
                    url="https://seguro.onfirecompany.com.br/r/O7YTVJMYFD"
                />
                <p style={{ color: "#fff", textAlign: "center" }}>Ao escolher o melho pacote para você e clicar no botão "COMPRAR AGORA", você será redirecionado para uma das maiores e mais seguras plataformas de pagamento, a Yampi.</p>
            </section>
            <section className="pb mt-neg">
                <Garantia />
                <Card
                    img="./images/cards/5.png"
                    titulo="Mais informações"
                    desc="Se você ainda tiver alguma dúvida a respeito do produto, pode enviar mensagem no Whatsapp do número (73) 9 9959-9911. Em minuitos, alguém da nossa equipe vai te responder e te ajudar."
                />
                <div className="mt"></div>
                <Botao cta="QUERO MEU METABOLIC" />
            </section>
        </main>
    )
}

export default Main
