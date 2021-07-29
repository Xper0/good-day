import React from 'react';
import {data} from "../data/data";
import "./content.scss";
import {Element} from "react-scroll"
import ScrollAnimation from 'react-animate-on-scroll';



const Content = ( animate) => {
   // console.log(animate.anime)
    return (
        <main className="content ">
             <section
                className={ animate.anime ? "content__proff padding active" : "content__proff"}
            >
                 <ScrollAnimation animateIn="animate__lightSpeedInLeft"
                                  delay={10}
                 >
                <div className="cotentent-header">
                    {data.section1.map( (item,index) =>
                        <div className="content-header__desc professionals-content" key={index}>
                            <div>{item.icon}</div>
                            <h2 className="content-header__h2">{item.title}</h2>
                            <span className="content-header__line"></span>
                            <p className="content-header__p">{item.text}</p>
                    </div>)}
                </div>
                 </ScrollAnimation>
             </section>

            <Element name="SERVICES">
                <section
                    className={animate.anime ? "content__proff padding active" : "content__proff padding"}
                >
                    <ScrollAnimation  animateIn="animate__lightSpeedInLeft"
                                      delay={10}>
                    <div className="cotentent-header">
                        {data.section2.map((item, index) =>
                            <div className="content-header__desc responsive" key={index}>
                                <div className="content-header__img">{item.img}</div>
                                <h2 className="content-header__h2">{item.title}</h2>
                                <span className="content-header__line"/>
                                <p className="content-header__p">{item.text}</p>
                                <button className="content-header__btn bnt-left">{item.btn}</button>
                            </div>)}
                    </div>
                    </ScrollAnimation>
                </section>
            </Element>

            <section
                className={animate.anime ? "content__proff padding active" : "content__proff padding"}
            >
                <ScrollAnimation  animateIn="animate__lightSpeedInLeft"
                                  delay={10}>
                <div className="cotentent-header">
                    {data.section3.map( (item,index) =>
                        <div className="content-header__desc" key={index}>
                            <div className="content-header__img">{item.img}</div>
                            <h2 className="content-header__h2 title-left">{item.title}</h2>
                            <p className="content-header__p">{item.text}</p>
                            <button className="content-header__btn bnt-ground">{item.btn}</button>
                        </div>)}
                </div>
                </ScrollAnimation>
            </section>

            <Element name="FEATURES">
                <section
                    className={animate.anime ? "content__proff padding active" : "content__proff padding"}
                >
                    <ScrollAnimation  animateIn="animate__lightSpeedInLeft"
                                      delay={10}>
                    <div className="cotentent-header">
                        {data.section4.map( (item,index) =>
                            <div className="content-header__desc" key={index}>
                                <div className="content-header__img">{item.img}</div>
                                <h2 className="content-header__h2">{item.title}</h2>
                                <span className="content-header__line"/>
                                <p className="content-header__p">{item.text}</p>
                                <button className="content-header__btn btn-none">{item.btn}</button>
                            </div>)}
                    </div>
                    </ScrollAnimation>
                </section>
            </Element>

            <section
                className={animate.anime ? "content__proff padding active" : "content__proff padding"}
            >
                <ScrollAnimation  animateIn="animate__lightSpeedInLeft"
                                  delay={10}>
                <div className="cotentent-header">
                    {data.section5.map( (item,index) =>
                        <div className="content-header__desc" key={index}>
                            <div className="content-header__title">
                                {item.icon}
                                <h2 className="content-header__h2">{item.title}</h2>
                            </div>
                            <p className="content-header__p">{item.text}</p>
                            <button className="content-header__btn">{item.btn}</button>
                        </div>)}
                </div>
                </ScrollAnimation>
            </section>

            <Element name="CONTACT">
                <section
                    className={animate.anime ? "content__proff padding active" : "content__proff padding"}
                >
                    <ScrollAnimation  animateIn="animate__lightSpeedInLeft"
                                      delay={10}>
                    <div className="cotentent-header">
                        {data.section6.map( (item,index) =>
                            <div className="content-header__desc row" key={index}>
                                <div className="content-header__img">{item.img}</div>
                                <div className="content-header__desc margin">
                                    <h2 className="content-header__h2">{item.title}</h2>
                                    <p className="content-header__p">{item.text}</p>
                                    <button className="content-header__btn bnt-ground ">{item.btn}</button>
                                </div>
                            </div>)}
                    </div>
                    </ScrollAnimation>
                </section>
            </Element>

        </main>
    );
};

export default Content;