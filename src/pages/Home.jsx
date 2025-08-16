import HeroSection from "../components/HeroSection";
import Video from "../components/Video";
import Caracteristicas from "../components/Caracteristicas";
import CallToAction from "../components/CallToAction";
import SliderProduto from "../components/SliderProduto";

import './Home.css';

export default function Home(){
    return(
        <div children="homeContainer">
            <HeroSection />
            <SliderProduto />
            <Video />
            <Caracteristicas />
            <CallToAction />
        </div>
    );
}