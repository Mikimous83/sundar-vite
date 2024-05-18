import {useEffect, useRef, useState} from 'react'
import {dataLatops} from './assets/Latops.js'
import bannerLatop01 from './assets/latops01.jpg'
import bannerLatop02 from './assets/latops02.jpg'
import bannerLatop03 from './assets/latops03.jpg'
import './Latops.css'


const Latops = () => {
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
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? dataLatops.length - 1 : prevIndex - 1));
        } else {
            setCurrentIndex((prevIndex) => (prevIndex === dataLatops.length - 1 ? 0 : prevIndex + 1));
        }
    };

    useEffect(() => {
        const startIndex = currentIndex;
        const endIndex = startIndex + 5;
        const visibleData = [...dataLatops.slice(startIndex, endIndex), ...dataLatops.slice(0, Math.max(0, 5 - (dataLatops.length - startIndex)))];
        setVisibleImages(visibleData);
    }, [currentIndex]);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='latop-main-container'>
            <div className='latop-title-container'>
                <h1>Laptops</h1>
            </div>
            <div className="latop-container">
                <row>
                    <column className='latop-banner'>
                        <img src={bannerLatop01} alt="lg"/>
                        <img src={bannerLatop02} alt="lg"/>
                        <img src={bannerLatop03} alt='lg'/>
                    </column>
                </row>

            </div>
            <div ref={listRef} className="latop-slide-container">
                {visibleImages.map((item, index) => (
                    <div
                        key={index}
                        className={`latop-container-images latop-slide`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="latop-image-container">
                            <img src={item.imgUrl} alt={`Imagen ${index}`}/>
                        </div>
                        <div className={`latop-details-container ${hoveredIndex === index ? "latop-visible" : ""}`}>
                            <h3>{item.description}</h3>
                            <p><span className="latop-oferta">{item.oferta} </span><span
                                className="latop-subrayar-precio">{item.precio}</span></p>
                            <div className="latop-button-container">
                                <button
                                    className={`latop-button-comprar ${hoveredIndex === index ? "latop-button-hover" : ""}`}
                                    onClick={() => console.log("Comprar")}>Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='latop-nav-buttons'>
                <div className='latop-leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='latop-rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
            </div>
        </div>
    )
}

export default Latops;
