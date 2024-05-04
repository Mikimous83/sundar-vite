import {useEffect} from 'react';
import {dataNuevo} from './assets/Nuevo.js';
import './Nuevo.css';
import bannerNuevo from './assets/newbanner.jpg'
const Nuevo = () => {
    useEffect(() => {
        const galleryContainer = document.querySelector('.gallery-container');
        const galleryControlsContainer = document.querySelector('.gallery-controls');

        class Carousel {
            constructor(container, items) {
                this.carouselContainer = container;
                this.carouselArray = [...items];
                this.setupControls();
                this.updateGallery();
            }

            updateGallery() {
                this.carouselArray.forEach(el => {
                    el.classList.remove('gallery-item-1');
                    el.classList.remove('gallery-item-2');
                    el.classList.remove('gallery-item-3');
                    el.classList.remove('gallery-item-4');
                    el.classList.remove('gallery-item-5');
                });

                this.carouselArray.slice(0, 5).forEach((el, i) => {
                    el.classList.add(`gallery-item-${i + 1}`);
                });
            }


            setCurrentState(shouldAdvance) {
                if (shouldAdvance) {
                    this.carouselArray.push(this.carouselArray.shift()); // Avanzar
                } else {
                    this.carouselArray.unshift(this.carouselArray.pop()); // Retroceder
                }
                this.updateGallery();
            }

            setupControls() {
                const prevButton = document.createElement('button');
                prevButton.className = 'gallery-controls-button gallery-controls-previous';
                prevButton.innerText = '';
                prevButton.addEventListener('click', () => this.setCurrentState(false)); // Pasar false para retroceder

                const nextButton = document.createElement('button');
                nextButton.className = 'gallery-controls-button gallery-controls-next';
                nextButton.innerText = '';
                nextButton.addEventListener('click', () => this.setCurrentState(true)); // Pasar true para avanzar

                galleryControlsContainer.appendChild(prevButton);
                galleryControlsContainer.appendChild(nextButton);
            }


        }

        const galleryItems = document.querySelectorAll('.gallery-item');
        const exampleCarousel = new Carousel(galleryContainer, galleryItems);

        return () => {
            // Limpiar al desmontar
            galleryControlsContainer.innerHTML = '';
        };
    }, []); // Se ejecuta una vez después del montaje

    return (
        <>
            <div className='title-container'>
                <h1>Lo <span className='mas'>+</span> Nuevo en SUNDAR</h1>
            </div>
            <div className="image-container">
                <img src={bannerNuevo} alt="nuevo"/>
            </div>


            <div className="gallery">
                {dataNuevo.map((item, index) => (
                    <div key={index} className={`gallery-container gallery-item gallery-item-${index + 1}`}>
                        <img src={item.imgUrl} alt={`Imagen ${index + 1}`}/>
                        <div>
                            <p>{item.coment}</p>
                            <p className='precio'>{item.precio}<span
                                className='subrayar-precio'>{item.preciohist}</span></p>

                            <button className='button-comprar'>comprar</button>
                        </div>

                    </div>
                ))}
                <div className="gallery-controls"></div>
            </div>
        </>
    );


}

export default Nuevo;


