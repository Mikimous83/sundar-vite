import DataFooter from "./DataFooter.jsx"
import Piepagina from "./PiePagina.jsx"
import SeguimientoPedido from "./SeguimientoPedido.jsx";

const Footer = () => {

    return (
        <div>
            <SeguimientoPedido/>
            <DataFooter/>
            <Piepagina/>
        </div>
    )
}

export default Footer