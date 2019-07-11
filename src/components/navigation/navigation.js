import React, { Component } from 'react';
import './navigation.scss';

class Navigation extends Component {
    state = { 
        scrolled: false,
        mobileMenuOpen: false,
     }

     componentDidMount() {
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
            <nav className={this.state.scrolled ? 'scrolled' : ''}>
                {/* <ul className={this.state.scrolled && !this.state.mobileMenuOpen ? 'menu scrolled' : this.state.scrolled && this.state.mobileMenuOpen ? 'menu ' : 'menu mobile-hidden'}> */}
                <ul className={!this.state.mobileMenuOpen ? 'menu mobile-hidden' : 'menu'}>
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
                <button className={!this.state.mobileMenuOpen ? "hamburger hamburger--squeeze" : "hamburger hamburger--squeeze is-active"} type="button" onClick={this.toggleMenu}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
                </button>
            </nav>
         );
    }
}
 
export default Navigation;