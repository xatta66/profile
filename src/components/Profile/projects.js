import React from "react";
import './projects.css';
import CookiesBackImage from '../../assets/img/CookiesBackImage.png'

const Projects = React.forwardRef((props, ref) => (
        <div className="Profile" ref={ref}>
            <h1>Портфолио</h1>
            <div className="Projects">
                <div className="Cookies">
                    <h1>Cookies</h1>
                    <img alt="CookiesBackImage" src={CookiesBackImage} className="CookiesBackImage"/>
                    <div className="CookiesUrl">    
                        <a href="https://xatta66.github.io/cookies/" target="blank"><button className="CookiesButton">Перейти на сайт</button></a>
                        <a href="https://github.com/xatta66/cookies/" target="blank"><button className="CookiesButton">Репозиторий</button></a>
                    </div> 
                </div>
            </div>
        </div>
    )
);

export default Projects

