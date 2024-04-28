import {dataCategorias} from './assets/Categorias.js'
import {useRef} from 'react'
import './Categorias.css'

const Categorias = () => {
    const listRef = useRef()

    return (
        <div className='margen-container'>
            <br/>
            <div className='categorias-container'>
                <ul ref={listRef} className='categorias-list'>
                    {dataCategorias.map((item) => (
                        <li key={item.id} className='categorias-item'>
                            <img src={item.imagen} className='categorias-img'/>
                            <button className='loquiero-btn'>¡Lo quiero!</button>
                            <div className='subtitulo'>
                                {item.subtitulo}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Categorias
