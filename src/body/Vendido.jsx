import './Vendido.css';
import {useEffect, useRef, useState} from "react";
import {dataVendido} from './assets/Vendido.js';

const Slider = () => {
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
        <div className='main-container'>
            <div className='title-container'>
                <h1>Lo <span className='mas'>Más</span> Vendido</h1>
            </div>
            <div ref={listRef} className="slide-container">
                {visibleImages.map((item, index) => (
                    <div
                        key={index}
                        className={`container-images slide ${hoveredIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={item.imgUrl} alt={`Imagen ${index}`}/>
                    </div>
                ))}
            </div>

            <div className='nav-buttons'>
                <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
            </div>
        </div>
    );
};

export default Slider;
