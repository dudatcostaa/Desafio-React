/*Componente usado de base para SliderCliente e SliderProduto*/

import './Slider.css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { register } from 'swiper/element/bundle';
register();

import 'swiper/css';
import 'swiper/css/navigation'; //setinhas

export default function Slider({ titulo, itens, ComponenteItem }) {

    const [slidesPerView, setSlidesPerView] = useState(2.5);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setSlidesPerView(1);
            }
            else {
                setSlidesPerView(2.5);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div className="sliderContainer">
            <h2>{titulo}</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={slidesPerView}
                navigation
                loop
            > {itens.map((item, i) => (
                <SwiperSlide key={i}>
                    <ComponenteItem item={item} />
                </SwiperSlide>

            ))}
            </Swiper>

        </div>

    );
}