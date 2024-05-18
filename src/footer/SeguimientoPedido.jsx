import "./SeguimientoPedido.css";

const SeguimientoPedido = () => {
    return (
        <div className='sp-amplitud'>
            <div className="sp-row">
                <div className="sp-column">
                    <h2><a href="#">SEGUIMIENTO DE PEDIDO</a></h2>
                    <p><a href="#">Revise su código de pedido</a></p>
                </div>
                <div className="sp-column">
                    <h2><a href="#">SUSCRÍBETE AL BOLETÍN</a></h2>
                    <input name="email" type="email" value=""
                           placeholder="Su dirección de correo electrónico" className="sp-input"/>
                    <button className="sp-button">SUSCRIBIR</button>
                </div>
                <div className="sp-column">
                    <h2><a href="#">SÍGANOS</a></h2>
                    <div className="sp-img-container">
                        <img src="./src/footer/assets/facebook.png" alt="Facebook" className="sp-img"/>
                        <img src="./src/footer/assets/social.png" alt="Instagram" className="sp-img"/>
                        <img src="./src/footer/assets/youtube.png" alt="YouTube" className="sp-img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeguimientoPedido;
