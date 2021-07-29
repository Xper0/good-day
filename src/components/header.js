import React from 'react';
import "./header.scss";
import {Link} from "react-scroll"


const Header = () => {

    const menu = ["HOME", "SERVICES", "FEATURES", "CONTACT"]
    return (
        <div className="header">
            <div className="header__content padding">
                <div className="header-logo">
                    <span className="header__text">Elena</span>
                </div>
                <div className="header-nav">
                    <nav>
                        <ul className="nav__list">
                            {menu.map( (item,index) =>
                               <Link
                                   to={item}
                                   smooth={true}
                                   duration={500}
                                   key={index}
                               >
                                   <li className="nav__item" >
                                       {item}
                                   </li></Link>
                            )}
                        </ul>
                    </nav>
                </div>
                <div className="header-info">
                    <h1 className="header-info__title">HAVE A GOOD DAY</h1>
                    <p className="header-info__desc">JUST FOR YOU ON THEMEFOREST</p>
                </div>
                <div className="header-control">
                    <button className="header-control__btn">GET YOUR COPY NOW</button>
                </div>
            </div>
            
        </div>
    );
};

export default Header;