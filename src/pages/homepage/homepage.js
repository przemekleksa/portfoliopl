import React, { Component } from 'react';
import Menu from '../../components/menu/menu';
import './homepage.scss';
import przemek from './przemek.png';
import About from '../../components/about/about';
import Abilities from '../../components/abilities/abilities';
import Portfolio from '../../components/portfolio/portfolio';
import ContactForm from '../../components/contact/contact';
import Footer from '../../components/footer/footer';
import ScrollButton from '../../components/scroll/scroll';

class Homepage extends Component {
    state = {

    }
    
    render() {
        return ( 
            <div className="container">
                <Menu />
                <div className="welcome" id="home">
                    <div className="profile">
                        <div className="photo">
                            <img src={przemek} alt="Przemek Leksa" />
                        </div>
                        <div className="typewriter">
                            <h1>
                                Przemysław <span>Leksa</span>
                            </h1>
                            <h2>Frontend developer</h2>
                        </div>
                        
                    </div>
                </div>
                <ScrollButton />
                {/* <div className="rest"> */}
                
                    <About />
                    <Abilities />
                    <Portfolio />
                    <ContactForm />
                    <Footer />
                    
                {/* </div> */}

            </div>
        
     );
    }
    
}
 
export default Homepage;