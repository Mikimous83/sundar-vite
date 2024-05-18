// Slider.jsx
import { useEffect, useRef, useState } from "react";
import './Slider.css';
import { dataSlider } from './assets/Slider.js'; // Importa dataSlider desde './assets/Slider.js'

const Slider = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll('li > img')[currentIndex];

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: 'smooth',
                block: 'center', // Centra la imagen verticalmente en la ventana
                inline: 'center' // Centra la imagen horizontalmente en la ventana
            });
        }
    }, [currentIndex]);

    const scrollToImage = (direction) => {
        setCurrentIndex(curr => {
            const newIndex = direction === 'prev'
                ? Math.max(0, curr - 1)
                : Math.min(dataSlider.length - 1, curr + 1);

            const listNode = listRef.current;
            const imgNode = listNode.querySelectorAll('li > img')[newIndex];
            if (imgNode) {
                imgNode.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            }

            return newIndex;
        });
    };

    const gotoSlider = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='main-container-slider'>
            <div className='container-images-slider'>
                <ul ref={listRef}>
                    {dataSlider.map((item, index) => (
                        <li key={index}>
                            <img src={item.imgUrl} alt={`Slide ${index}`} />
                        </li>
                    ))}
                </ul>
                <div className={`leftArrow-slider ${currentIndex === 0 ? 'disabled' : ''}`} onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className={`rightArrow-slider ${currentIndex === dataSlider.length - 1 ? 'disabled' : ''}`} onClick={() => scrollToImage('next')}>&#10093;</div>
            </div>

            <div className='dots-container-slider'>
                {dataSlider.map((_, idx) => (
                    <div key={idx}
                         className={`dot-container-item-slider ${idx === currentIndex ? 'active' : ''}`}
                         onClick={() => gotoSlider(idx)}>
                        &#9865;
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
