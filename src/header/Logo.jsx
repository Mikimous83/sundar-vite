import logoImage from './assets/logo.png'
import favoritesImage from './assets/FAVORITOS.png'
import tiendasImage from './assets/TIENDAS.png'
import ayudaImage from './assets/AYUDA.png'
import sesionImage from './assets/SESION.png'
import carritoImage from './assets/CARRITO.png'

const Logo = () => {
    return (
        <div className='logo-container'>
            <div className='item'>
                <img src={logoImage} alt='logo' style={{ width: '150px', height:'50px' }} />
                <a href="/about">SUNDAR SAC</a>
            </div>
            <div className='item'>
                <input type="text" placeholder="Buscar..."/>
            </div>
            <div className='item'>
                <img src={favoritesImage} alt='favoritos' style={{ width: '30px', height: '30px' }}/>
                <a href="/about">Mis Favoritos</a>
            </div>
            <div className='item'>
                <img src={tiendasImage} alt='tiendas' style={{ width: '30px', height: '30px' }}/>
                <a href="/about">Nuestras Tiendas</a>
            </div>
            <div className='item'>
                <img src={ayudaImage} alt='ayuda' style={{ width: '30px', height: '30px' }}/>
                <a href="/about">Necesitas Ayuda</a>
            </div>
            <div className='item'>
                <img src={sesionImage} alt='sesion' style={{ width: '30px', height: '30px' }}/>
                <a href="/about">Iniciar Sesión</a>
            </div>
            <div className='item'>
                <img src={carritoImage} alt='carrito' style={{ width: '30px', height: '30px' }}/>
                <a href="/about">Mi Carrito</a>
            </div>
        </div>
    )
}

export default Logo
