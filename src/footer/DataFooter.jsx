// DataFooter.jsx
import {useRef} from 'react';
import './DataFooter.css';
import {dataCentral} from './assets/DataFooter'; // No necesitas especificar la extensión del archivo

const DataFooter = () => {
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
        <div className='todo-width'>
            <div
                ref={containerRef}
                className="central-container-images central-slide"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {dataCentral.map((data) => (
                    <div key={data.id} className="central-item">
                        <img src={data.image} alt={data.name}/>
                        <div className="text-container">
                            <h2>{data.name}</h2>
                            {data.number && <p>{data.number}</p>}
                            {data.description && <p>{data.description}</p>}
                            {data.details && (
                                <div className="central-description-container">
                                    <ul>
                                        {data.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {data.email && <p>Email: {data.email}</p>}
                            {data.subtitle && <p>{data.subtitle}</p>}
                            {data.location && <p>{data.location}</p>}
                            {data.address && <p>{data.address}</p>}
                            {data.phone && <p>Phone: {data.phone}</p>}
                            {data.contact && <p>Contact: {data.contact}</p>}
                            {data.logos && (
                                <div className="logos-container">
                                    {data.logos.map((logo, index) => (
                                        <img key={index} src={logo} alt={`Logo ${index + 1}`}/>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DataFooter;
