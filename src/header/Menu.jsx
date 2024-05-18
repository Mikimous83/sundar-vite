import './Menu.css'
import Submenu from "./Submenu"
import submenuLatopsNoteBooks from "./Submenu/submenuLatopsNoteBooks.js"
import submenuComputadoras from "./Submenu/submenuComputadoras.js"
import submenuZonaGamer from "./Submenu/submenuZonaGamer.js"
import submenuPartesPC from "./Submenu/submenuPartesPC.js"
import submenuMonitores from "./Submenu/submenuMonitores.js"
import submenuImpresoras from "./Submenu/submenuImpresoras.js"

const Menu = () => {
    return (
        <header>
            <div className="menu-container">
                <nav>
                    <ul>
                        <li className="has-submenu"><a href="/">Categorías</a></li>
                        <Submenu
                            image={submenuLatopsNoteBooks.image}
                            link={submenuLatopsNoteBooks.link}
                            title={submenuLatopsNoteBooks.title}
                            columns={submenuLatopsNoteBooks.columns}
                        />
                        <Submenu
                            image={submenuComputadoras.image}
                            link={submenuComputadoras.link}
                            title={submenuComputadoras.title}
                            columns={submenuComputadoras.columns}
                        />
                        <Submenu
                            image={submenuZonaGamer.image}
                            link={submenuZonaGamer.link}
                            title={submenuZonaGamer.title}
                            columns={submenuZonaGamer.columns}
                        />
                        <Submenu
                            image={submenuPartesPC.image}
                            link={submenuPartesPC.link}
                            title={submenuPartesPC.title}
                            columns={submenuPartesPC.columns}
                        />
                        <Submenu
                            image={submenuMonitores.image}
                            link={submenuMonitores.link}
                            title={submenuMonitores.title}
                            columns={submenuMonitores.columns}
                        />
                        <Submenu
                            image={submenuImpresoras.image}
                            link={submenuImpresoras.link}
                            title={submenuImpresoras.title}
                            columns={submenuImpresoras.columns}
                        />

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Menu;
