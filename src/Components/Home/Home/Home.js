import React from 'react';
import Brand from '../Brand/Brand';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
           <Header></Header>
           <Brand></Brand>
           <Services></Services>
           <Works></Works>
           <Feedback></Feedback>
           <Footer></Footer>
        </div>
    );
};

export default Home;