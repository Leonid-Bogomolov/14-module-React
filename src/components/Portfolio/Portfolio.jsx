import React from "react"
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio container">
      <div className="portfolio_header">
        <div className="portfolio_nominal">
          <span className="block-nominal">portfolio</span>
          <h2>Посмотрите мои web-разработки</h2>
        </div>
        <div className="portfolio_all">
          <div className="pagination">
            <div className="back circle portfolio_circle">
              <span>&#8249;</span>
            </div>
            <div className="forward circle portfolio_circle">
              <span>&#8250;</span>
            </div>
          </div>
          <button className="btn">Увидеть все работы &#8594;</button>
          </div>
      </div>
      <div className="portfolio_gallery">
        <div className="gallery_container gallery1">
          <div className="gallery_img game_of_pairs"></div>
          <div className="work-description">
            <p className="portfolio_title">Игровое web-приложение "Игра в пары"</p>
            <button className="btn">Посмотреть проект ↗</button>
          </div>
        </div>
        <div className="gallery_container gallery2">
          <div className="gallery_img shop"></div>
          <div className="work-description">
            <p className="portfolio_title">Web-приложение для Магазина</p>
            <button className="btn">Посмотреть проект ↗</button>
          </div>
        </div>
        <div className="gallery_container gallery3">
          <div className="gallery_img akvarel"></div>
          <div className="work-description">
            <p className="portfolio_title">Дизайн проект "Акварелный стиль"</p>
            <button className="btn">Посмотреть проект ↗</button>
          </div>
        </div>
      </div>
      <div className="pagination pagination640">
            <div className="back circle portfolio_circle">
              <span>&#8249;</span>
            </div>
            <div className="forward circle portfolio_circle">
              <span>&#8250;</span>
            </div>
          </div>      
    </section>
  )
};

export default Portfolio;
