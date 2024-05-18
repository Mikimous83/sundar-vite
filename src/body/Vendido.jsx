import { useEffect, useRef, useState } from 'react'
import { dataVendido } from './assets/Vendido.js'
import './Vendido.css'

const Vendido = () => {
    const listRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode?.querySelector('.slide');

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: 'smooth',
                inline: 'center'
            });
        }
    }, [currentIndex]);

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? dataVendido.length - 1 : prevIndex - 1));
        } else {
            setCurrentIndex((prevIndex) => (prevIndex === dataVendido.length - 1 ? 0 : prevIndex + 1));
        }
    };

    useEffect(() => {
        const startIndex = currentIndex;
        const endIndex = startIndex + 5;
        const visibleData = [...dataVendido.slice(startIndex, endIndex), ...dataVendido.slice(0, Math.max(0, 5 - (dataVendido.length - startIndex)))];
        setVisibleImages(visibleData);
    }, [currentIndex]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='sold-main-container'>
            <div className='sold-title-container'>
                <h1>Lo <span className='sold-mas'>Más</span> Vendido</h1>
            </div>
            <div ref={listRef} className="sold-slide-container">
                {visibleImages.map((item, index) => (
                    <div
                        key={index}
                        className={`sold-container-images sol-slide`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="sold-image-container">
                            <img src={item.imgUrl} alt={`Imagen ${index}`} className={hoveredIndex === index ? "sold-girado" : ""} />
                        </div>
                        <div className={`sold-image-detail ${hoveredIndex === index ? "sold-visible" : ""}`}>
                            <h3>{item.description}</h3>
                            <p><span className="sold-oferta">{item.oferta}</span> <span className="sold-precio">{item.precio}</span></p>
                            <br/>
                            <button className={`sold-button-comprar ${hoveredIndex === index ? "sold-button-hover" : ""}`} onClick={() => console.log("Comprar")}>Comprar</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='sold-nav-buttons'>
                <div className='sold-leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='sold-rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
            </div>
        </div>
    )
}

export default Vendido
