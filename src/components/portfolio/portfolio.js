import React from 'react';
import './portfolio.scss';
import pizza from './pizzaSingle.jpg';
import sass from './sassSingle.jpg';
import movie from './movieSingle.jpg';
import turism from './turismSingle.jpg';

const Portfolio = () => {
    return ( 
        <div className="portfolio" id="portfolio">
            <div className="title">
                <h2>Creative work</h2>
                <p>Check out my latest projects</p>
            </div>
            <div className="grid">
                <div className="project">
                    <div className="screen">
                        <img src={turism} alt="turism site screenshot" />
                        <div className="details">
                            <div className="title-tech">
                                <h3>Turism company landing page</h3>
                                <ul>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        Scss
                                    </li>
                                </ul>
                            </div>
                            <div className="buttons">
                            <a href="#home"><button>Live</button></a>
                            <a href="#home"><button>Github</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="screen">
                        <img src={movie} alt="movie agregator site screenshot" />
                        <div className="details">
                            <div className="title-tech">
                                <h3>Movie aggregator</h3>
                                <ul>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        Redux
                                    </li>
                                    <li>
                                        Scss
                                    </li>
                                </ul>
                            </div>
                            <div className="buttons">
                            <a href="#home"><button>Live</button></a>
                            <a href="#home"><button>Github</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="screen">
                        <img src={sass} alt="movie agregator site screenshot" />
                        <div className="details">
                            <div className="title-tech">
                                <h3>How developers work landing page</h3>
                                <ul>
                                    <li>
                                        Scss
                                    </li>
                                </ul>
                            </div>
                            <div className="buttons">
                            <a href="#home"><button>Live</button></a>
                            <a href="#home"><button>Github</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="screen">
                        <img src={pizza} alt="movie agregator site screenshot" />
                        <div className="details">
                            <div className="title-tech">
                                <h3>Movie aggregator</h3>
                                <ul>
                                    <li>
                                        JS
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                </ul>
                            </div>
                            <div className="buttons">
                            <a href="#home"><button>Live</button></a>
                            <a href="#home"><button>Github</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Portfolio;