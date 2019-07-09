import React, { Component } from 'react';
import './menu.scss';



class Menu extends Component {
    state = {
        scrolled: false,
        burger: false,
        mobileMenuOpen: false,
    }

    componentDidMount() {
        this.updateDimensions();
         window.addEventListener('scroll', () =>{
             const isTop = window.scrollY < 100
            if (!isTop) {
                this.setState({
                    scrolled: true,
                    })
            } else {
                this.setState({
                    scrolled: false,
                })
            }
         })
     }

     componentWillUnmount() {
         window.removeEventListener('scroll');
     }

     updateDimensions() {
        console.log(window.innerWidth);
         if(window.innerWidth < 1200) {
           this.setState({
               burger: true
           })
           } else {
               this.setState({
                   burger: false
               })
           }
         }
        
    toggleMenu = () => {
    if (this.state.mobileMenuOpen === false) {
        this.setState({
            mobileMenuOpen: true,
        })
    } else {
            this.setState({
                mobileMenuOpen: false,
            })
        }
    }

    render() {
        return ( 
        <nav className={this.state.scrolled && !this.state.burger ? 'scrolled' : this.state.mobileMenuOpen && this.state.burger ? 'transparent' : '' }>
                    <div className={this.state.burger && !this.state.mobileMenuOpen? 'burger' : this.state.mobileMenuOpen && this.state.burger ? 'burger background': 'no-show'} onClick={this.toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            {/* <ul className={this.state.scrolled ? 'menu scrolled' : 'menu'}> */}
            <ul className={this.state.scrolled && !this.state.burger ? 'menu scrolled' : !this.state.burger ? 'menu' : this.state.mobileMenuOpen ? 'menu mobile': 'no-show'}>
                <a href="#home" onClick={this.toggleMenu}>
                <li>
                    Home
                </li>
                </a>
                <a href="#about" onClick={this.toggleMenu}>
                <li>
                    About
                </li>
                </a>
                <a href="#stack" onClick={this.toggleMenu}>
                <li>
                    Stack
                </li>
                </a>
                <a href="#portfolio" onClick={this.toggleMenu}>
                <li>
                    Portfolio
                </li>
                </a>
                <a href="#contact" onClick={this.toggleMenu}>
                <li>
                    Contact
                </li>
                </a>
            </ul>
        </nav>
     );
    }
    
}
 
export default Menu;
