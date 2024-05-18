import {useEffect, useRef, useState} from 'react'
import {dataLatopGamer} from './assets/LatopGamer.js'
import bannerLatopGamer01 from './assets/latopg01.jpg'
import bannerLatopGamer02 from './assets/latopg02.jpg'
import bannerLatopGamer03 from './assets/latopg03.jpg'
import './LatopGamer.css'


const LatopGamer = () => {
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
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? dataLatopGamer.length - 1 : prevIndex - 1));
        } else {
            setCurrentIndex((prevIndex) => (prevIndex === dataLatopGamer.length - 1 ? 0 : prevIndex + 1));
        }
    };

    useEffect(() => {
        const startIndex = currentIndex;
        const endIndex = startIndex + 5;
        const visibleData = [...dataLatopGamer.slice(startIndex, endIndex), ...dataLatopGamer.slice(0, Math.max(0, 5 - (dataLatopGamer.length - startIndex)))];
        setVisibleImages(visibleData);
    }, [currentIndex]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='ltpg-main-container'>
            <div className='ltpg-title-container'>
                <h1>Laptops Gamer</h1>
            </div>
            <div className="latopgamer-container">
                <row>
                    <column className='latopgamer-banner'>
                        <img src={bannerLatopGamer01} alt="lg"/>
                        <img src={bannerLatopGamer02} alt="lg"/>
                        <img src={bannerLatopGamer03} alt='lg'/>
                    </column>
                </row>

            </div>
            <div ref={listRef} className="ltpg-slide-container">
                {visibleImages.map((item, index) => (
                    <div
                        key={index}
                        className={`ltpg-container-images ltpg-slide`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="ltpg-image-container">
                            <img src={item.imgUrl} alt={`Imagen ${index}`}/>
                        </div>
                        <div className={`ltpg-details-container ${hoveredIndex === index ? "ltpg-visible" : ""}`}>
                            <h3>{item.description}</h3>
                            <p><span className="ltpg-oferta">{item.oferta} </span><span
                                className="ltpg-subrayar-precio">{item.precio}</span></p>
                            <div className="ltpg-button-container">
                                <button
                                    className={`ltpg-button-comprar ${hoveredIndex === index ? "ltpg-button-hover" : ""}`}
                                    onClick={() => console.log("Comprar")}>Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='ltpg-nav-buttons'>
                <div className='ltpg-leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='ltpg-rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
            </div>
        </div>
    )
}

export default LatopGamer;
