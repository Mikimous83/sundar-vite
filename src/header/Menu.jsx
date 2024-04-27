import './Menu.css'
import laptopsImage from './assets/LAPTOPS.png'
import computersImage from './assets/COMPUTADORAS.png'
import gamerImage from './assets/GAMER.png'
import partesPCImage from './assets/PARTESPC.png'
import monitoresImage from './assets/MONITORES.png'
import impresorasImage from './assets/IMPRESORAS.png'

const Menu = () => {
    return (
        <header>
            <div className="menu-container">
                <nav>
                    <ul>
                        <li><a href="/">Categorías</a></li>
                        <li><img src={laptopsImage} alt="Laptops y Notebooks"/><a href="/about">Laptos y NoteBooks</a></li>
                        <li><img src={computersImage} alt="Computadoras"/><a href="/contact">Computadoras</a></li>
                        <li><img src={gamerImage} alt="Zona Gamer"/><a href="/blog">Zona Gamer</a></li>
                        <li><img src={partesPCImage} alt="Partes de PC"/><a href="/blog">Partes de PC</a></li>
                        <li><img src={monitoresImage} alt="Monitores"/><a href="/blog">Monitores y Más</a></li>
                        <li><img src={impresorasImage} alt="Impresoras"/><a href="/blog">Impresoras</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Menu;
