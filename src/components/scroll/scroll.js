import React, { Component } from 'react';
import './scroll.scss';

class ScrollButton extends Component {
    state = { 
        scrolled: false
     }
    componentDidMount() {
        // this.updateDimensions();
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
    render() { 
        return ( 
            <a href="#home">
                <div className={this.state.scrolled ? 'scroll' : 'scroll no-scroll'}>
                <svg width="40px" height="40px" enableBackground="new 0 0 444.819 444.819" version="1.1" viewBox="0 0 444.819 444.819"  xmlns="http://www.w3.org/2000/svg">
	            <path d="m433.97 278.66l-185.58-185.87c-7.419-7.044-16.08-10.566-25.977-10.566-10.088 0-18.652 3.521-25.697 10.566l-185.86 185.87c-7.233 7.23-10.848 15.892-10.848 25.98 0 10.28 3.619 18.843 10.848 25.693l21.411 21.413c6.854 7.23 15.42 10.852 25.697 10.852 10.278 0 18.842-3.621 25.697-10.852l138.76-138.47 138.76 138.47c6.848 7.228 15.413 10.852 25.7 10.852 10.082 0 18.747-3.624 25.975-10.852l21.409-21.412c7.043-7.043 10.567-15.608 10.567-25.693 0-10.09-3.614-18.751-10.851-25.978z"/>
                    </svg>
                </div>
            </a>
         );
    }
}
 
export default ScrollButton;