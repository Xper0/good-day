import React, {useState} from 'react';
import "./footer.scss";
import {animateScroll as scroll} from "react-scroll"

const Footer = () => {
    const [showBtnArrow, setShowBtnArrow] = useState(false)
    function checkScroll(){
        if(window.scrollY >= 250 ){
            setShowBtnArrow(true)
        }else{
            setShowBtnArrow(false)
        }
    }
    window.addEventListener("scroll", checkScroll)

    return (
        <div className="footer ">
            <div className="footer-container padding">
                <div className="footer__title">
                    <h2 className="footer__h2">this template was featured on </h2>
                </div>
                <div className="footer__sponsors">
                    <span className="Belinda">TechCrunch</span>
                    <span className="NexaRegular">Promail</span>
                    <span className="Cabin-Regular">Mashable</span>
                    <span className="NexaHeavy">atlaspix</span>
                </div>
            </div>
            <div className="footer__info padding">
                <div className="footer__copyright">
                    <span>Elenea © copyright 2013 - Unsubscribe here</span>
                </div>
                <div className="footer__social">
                    <svg width="20" height="20"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" fill="#787B80"
                    >
                        <path d="M160,224v64h90.528c-13.216,37.248-48.8,64-90.528,64c-52.928,0-96-43.072-96-96c0-52.928,43.072-96,96-96
			             c22.944,0,45.024,8.224,62.176,23.168l42.048-48.256C235.424,109.824,198.432,96,160,96C71.776,96,0,167.776,0,256
			             s71.776,160,160,160s160-71.776,160-160v-32H160z"/>
                    </svg>
                    <svg width="20" height="20"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 155.139 155.139" fill="#787B80"
                         >
	                    <path id="f_1_"  d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
		                  c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
		                  v20.341H37.29v27.585h23.814v70.761H89.584z"/>
                    </svg>
                    <svg width="20" height="20"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" fill="#787B80" >
                        <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
			              c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
			              c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
			              c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
			              c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
			              c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
			              C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
			              C480.224,136.96,497.728,118.496,512,97.248z"/>
                    </svg>
                </div>
                <button id={showBtnArrow ? "back2Top": ""} onClick={() => scroll.scrollToTop({
                    duration : 700
                })} >&#10149;</button>
            </div>
        </div>
    );
};

export default Footer;