import React from 'react';
import NewArrivalProducts from '../NewArrivalProducts/NewArrivalProducts';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import './Home.css'
import Navigation from '../Navigation/Navigation';
import BannerContent from '../BannerContent/BannerContent';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
    // initialize firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    return (
        <div className="container shadow" id="default-margin">
            <Navigation></Navigation>
            <div id="top-margin"><BannerContent></BannerContent></div>
            <div id="default-margin"><NewArrivalProducts></NewArrivalProducts></div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};
export default Home;