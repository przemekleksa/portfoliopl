import React from 'react';
import './abilities.scss';

const Abilities = () => {
    return ( 
        <div className="abilities" id="stack">
            <div className="abilities-details">
                <div className="details">
                    <h3>Some About my Abilities</h3>
                    <p>
                    I have a lot of experiance using technologies like: <span>HTML, CSS, SCSS, Bootstrap, JavaScript</span>. <br />
                    I finished IT studies with great scores and lately I decided to expand my knowledge so I joined <span>Fullstack Developer Bootcamp</span>. I've learned a lot of new amazing technologies there, but also expanded my knowledge in technologies that I used before. Some of those new technologies are: <span>React, Redux, Python, Django, SQL</span>.<br />
                    In the past I've been using: PHP, Wordpress, Prestashop.<br /><br />
                    I can create fully RWD pages.
                    Coding a website based on Photoshop layout is not a hastle for me.<br />
                    Using english is pretty easy for me. I speak it fluently so I can work in an international environment.
                    </p>

                </div>
                <div className="stats">
                    <div className="technology">
                        <div className="experiance">
                            <span>HTML/CSS</span> - years of experiance <span>95%</span>
                        </div>
                        <div className="experiance-bar">
                            <div className="level">
                            </div>
                            <div className="fill">
                            </div>
                        </div>
                        <div className="experiance">
                            <span>Scss</span> - year of experiance <span>60%</span>
                        </div>
                        <div className="experiance-bar">
                            <div className="level" id="second-level">
                            </div>
                            <div className="fill" id="second-fill">
                            </div>
                        </div>
                        <div className="experiance">
                            <span>Bootstrap</span> - year of experiance <span>70%</span>
                        </div>
                        <div className="experiance-bar">
                            <div className="level" id="third-level">
                            </div>
                            <div className="fill" id="third-fill">
                            </div>
                        </div>
                        <div className="experiance">
                            <span>JavaScript</span> - half year of experiance <span>50%</span>
                        </div>
                        <div className="experiance-bar">
                            <div className="level" id="fourth-level">
                            </div>
                            <div className="fill" id="fourth-fill">
                            </div>
                        </div>
                        <div className="experiance">
                            <span>React</span> - half year of experiance <span>30%</span>
                        </div>
                        <div className="experiance-bar">
                            <div className="level" id="fifth-level">
                            </div>
                            <div className="fill" id="fifth-fill">
                            </div>
                        </div>
                        <div className="experiance">
                            <span>Python</span> - half year of experiance <span>30%</span>
                        </div>
                        <div className="experiance-bar">
                            <div className="level" id="sixth-level">
                            </div>
                            <div className="fill" id="sixth-fill">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
     );
}
 
export default Abilities;