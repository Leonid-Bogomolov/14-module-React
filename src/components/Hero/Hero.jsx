import React from "react"
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero_fictitious"></div>
      <div className="hero_content">
        
        <div className="hero_vizitka container">
          <div className="hero_who">
            <p className="hero-activity">Web-разработчик</p>
            <h1 className="hero-name">ЛЕОНИД БОГОМОЛОВ</h1> 
          </div>
          <div>
            <h2>ДАВАЙТЕ <button className="hero_transition">&#8663;</button><br></br>РАБОТАТЬ ВМЕСТЕ</h2>
          </div>
        </div>

        <div className="hero_albums">
          <div className="hero_iconStar"></div>
          <a className="hero_item" href="#gggg">Frontend-разработка</a>
          <div className="hero_iconStar"></div>
          <a className="hero_item" href="https://www.behance.net/mppf1pmpf17015">Web-дизайн</a>
          <div className="hero_iconStar"></div>
          <a className="hero_item" href="#fff">Тестирование</a>
          <div className="hero_iconStar"></div>
          <a className="hero_item" href="#fff">Реестры и каталоги</a>
          <div className="hero_iconStar"></div>
          <a className="hero_item" href="#fff">Навигационный сервис</a>
          <div className="hero_iconStar"></div>
          <a className="hero_item" href="#fff">Магазин</a>
          <div className="hero_iconStar"></div>
          <a className="hero_item" href="#fff">игры</a>
          <div className="hero_iconStar"></div>
        </div>

        <div className="hero_banner container">
          <div className="hero_img-1">
            <div className="hero_img-1-1">
              <div className="hero_img-1-1-1"></div>
              <div className="hero_img-1-1-2"></div>
            </div>

            <div className="hero_img-1-3"></div>

            <div className="hero_img-1-2">
              <div className="hero_img-1-2-1"></div>
              <div className="hero_img-1-2-3"></div>
            </div>
            <div className="hero_img-2">
              <div className="hero_img-2-1"></div>
            </div>
            <div className="hero_img-3">
              <div className="hero_img-3-1"></div>
            </div>
          </div>          
        </div>
      </div>
    </section>
  )
};

export default Hero;
