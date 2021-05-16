import React,{ useState } from "react";
import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Preloader from "../components/Preloader";
import Center from "../components/Center";
import PreloaderContext from '../components/PreloaderContext';


const Home = (props) => {

    return ( 
        <React.Fragment>
            <PreloaderContext>
                <Preloader />
                <Wrapper />
                <Nav />
                <Center />
                <Footer />
            </PreloaderContext>
        </React.Fragment>
    );
}

export default Home;