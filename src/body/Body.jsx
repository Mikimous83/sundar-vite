import Slider from './Slider.jsx'
import Categorias from './Categorias.jsx'
// import Nuevo from './Nuevo.jsx'
import Vendido from './Vendido.jsx';
import LatopGamer from "./LatopGamer.jsx";
import Latops from "./Latops.jsx";

const Body = () => {
    return (
        <div>
            <Slider/>
            <Categorias/>
            {/*<Nuevo/>*/}
            <Vendido />
            <LatopGamer />
            <Latops />
        </div>
    )
}

export default Body

