import './Slider.css'
import {useEffect, useRef, useState} from "react"
import {dataSlider} from './assets/Slider.js'

const Slider = () => {

    const listRef = useRef()

    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll('li > img')[currentIndex]

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: 'smooth'

            })
        }

    }, [currentIndex]);

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            })
        } else {
            const isLastSlide = currentIndex === dataSlider.length - 1;
            if (!isLastSlide) { //si el resultado es falso
                setCurrentIndex(curr => curr + 1);
            }
        }

    }

    const gotoSlider = (slideIndex) =>{
        setCurrentIndex(slideIndex); //actualizando el valor
    }

    return (
        <div className='main-container'>
            <div className='slider-container'>
                <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                <div className='container-images'>
                    <ul ref={listRef}>
                        {
                            dataSlider.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <img src={item.imgUrl}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {/*puntos debajo del slider*/}
            <div className='dots-container'>
                {
                    dataSlider.map((_, idx) => (
                        <div key={idx} className={`dot-container-item ${idx === currentIndex ? 'active': ''}`} //agregando clase por condicion
                            onClick={() =>gotoSlider(idx)}> {/*pasando el numero de index slider*/}
                            &#9865;
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
export default Slider