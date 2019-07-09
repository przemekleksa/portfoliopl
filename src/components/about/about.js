import React from 'react';
import './about.scss';
import przemekleksa from './przemekleksa.jpeg';

const About = () => {
    return ( 
        <div className="about" id="about">
            <div className="title">
                <h2>About me</h2>
                <p>Get to know me</p>
            </div>
           <div className="personal-details">
                <div className="photo">
                    <img src={przemekleksa} alt="Przemek Leksa" />
                </div>
                <div className="details">
                    <h3>I'm Przemysław Leksa and <span>Frontend Developer</span></h3>
                    <p>Hi! My name is <span>Przemysław Leksa</span>. I'm a freelance Frontend Developer, and I'm very passionate and dedicated to my work. I'm currently looking for possibilities to start a full time Frontend Developer job.</p>
                    <div className="some-stats">
                        <div className="row">
                            <div>
                                Birthday:
                            </div>
                            <div>
                                20.09.1985
                            </div>
                            <div>
                                Age:
                            </div>
                            <div>
                                33
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                City:
                            </div>
                            <div>
                                Cracow, Poland
                            </div>
                            <div>
                                Interests:
                            </div>
                            <div>
                                Video games, Cars
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                Study:
                            </div>
                            <div>
                                IT at WSZiB Cracow
                            </div>
                            <div>
                                Degree:
                            </div>
                            <div>
                                Engineer
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                Mail:
                            </div>
                            <div>
                                <a href="mailto:przemyslawleksa@gmail.com">przemyslawleksa@gmail.com</a>
                            </div>
                            <div>
                                Phone:
                            </div>
                            <div>
                                +48 614 230 518
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                Courses:
                            </div>
                            <div>
                                Fullstack Bootcamp
                            </div>
                            <div>
                                Languages:
                            </div>
                            <div>
                                English C2
                            </div>
                        </div>
                        <a href="./Przemyslaw_Leksa_resume.pdf" download className="download-button">
                        <button>
                            
                            Download CV
                            
                        </button>
                        </a>
                    </div>
                </div>
           </div>
        </div>
     );
}
 
export default About;