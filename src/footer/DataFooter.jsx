import {useRef} from 'react';
import './CentralTelefonica.css'; // Asegúrate de tener un archivo CSS para los estilos
import {dataCentralTelfonica} from './assets/CentralTelefonica.js'; // Importa los datos

const CentralTelefonica = () => {
    const containerRef = useRef(null);

    const handleMouseEnter = () => {
        if (containerRef.current) {
            containerRef.current.classList.add('hovered');
        }
    };

    const handleMouseLeave = () => {
        if (containerRef.current) {
            containerRef.current.classList.remove('hovered');
        }
    };

    return (
        <div
            ref={containerRef}
            className="central-container-images central-slide"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {dataCentralTelfonica.map((data) => (
                <div key={data.id} className="central-item"> {/* Agregamos una clase central-item */}
                    <img src={data.image} /> {/* Movemos la imagen al principio */}
                    <div className="central-text-container">
                        <h2>{data.name}</h2>
                        <p>{data.number}</p>
                        <div className="central-description-container">
                            <p>{data.description}</p>
                            <ul>
                                <li>{data.p1}</li>
                                <li>{data.p2}</li>
                                <li>{data.p3}</li>
                                <li>{data.p4}</li>
                                <li>{data.p5}</li>
                                <li>{data.p6}</li>
                                <li>{data.p7}</li>
                                <li>{data.p8}</li>
                                <li>{data.p9}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="online-text-container">
                        <h2>{data.titulo}</h2>
                        <p>{data.email}</p>
                        <div className="online-description-container">
                            <p>{data.logo}</p>
                            <ul>
                                <li><img src={data.libro} alt=""/></li>
                                <li><img src={data.ccl} alt=""/></li>
                                <li><img src={data.garantia} alt=""/></li>
                                <li><img src={data.anos} alt=""/></li>

                            </ul>
                        </div>
                    </div>

                    <div className="tiendas-text-container">
                        <h2>{data.title}</h2>
                        <p>{data.subtitle}</p>
                        <div className="tiendas-description-container">
                            <p>{data.contacto}</p>
                            <ul>
                                <li>{data.ubicacion}</li>
                                <li>{data.address}</li>
                                <li>{data.telefono}</li>
                                <li>{data.correo}</li>

                            </ul>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
        ;


}

export default CentralTelefonica;
