import React from "react"
import './Services.css'

const Services = () => {
  return (
    <section id="services" className="services container">
      <div className="services_header">
        <div className="services_nominal">
          <span className="block-nominal">services</span>
          <h2>Мои web-предложения</h2>
        </div>
        <div className="services_all">
          <div className="pagination">
            <div className="back circle services_circle">
              <span>&#8249;</span>
            </div>
            <div className="forward circle services_circle">
              <span>&#8250;</span>
            </div>
          </div>
          <button className="btn">Увидеть все предложения &#8594;</button>
        </div>
      </div>
      <div className="services_main">
        <ul className="services_content">
          <li className="services_li">
            <div className="hero_iconStar"></div>
            <h3>&nbsp;&nbsp;&nbsp;Создание сайтов</h3>
          </li>
          <li className="services_li">
            <div className="hero_iconStar"></div>
            <h3>&nbsp;&nbsp;&nbsp;Создание специализированных приложений</h3>
          </li>
          <li className="services_li">
            <div className="hero_iconStar"></div>
            <h3>&nbsp;&nbsp;&nbsp;Создание игровых приложений</h3>
          </li>
          <li className="services_li">
            <div className="hero_iconStar"></div>
            <h3>&nbsp;&nbsp;&nbsp;Тестирование готового софта</h3>
          </li>
          <li className="services_li">
            <div className="hero_iconStar"></div>
            <h3>&nbsp;&nbsp;&nbsp;Дизайнерская проработка проектов</h3>
          </li>
        </ul>
        <div className="services_img"></div>
      </div>
      <div className="services_main1024">
        <div className="pagination pagination640">
          <div className="back circle services_circle">
            <span>&#8249;</span>
          </div>
          <div className="forward circle services_circle">
            <span>&#8250;</span>
          </div>
        </div>
        <ul className="services_content">
          <li className="services_li">
            <div className="hero_iconStar"></div>
            <p>&nbsp;&nbsp;Создание сайтов</p>
          </li>
          <li className="services_li">
            <div className="hero_iconStar"></div>
            <p>&nbsp;&nbsp;Создание специализированных приложений</p>
          </li>
          <li className="services_li">
            <div className="hero_iconStar"></div>
            <p>&nbsp;&nbsp;Создание игровых приложений</p>
          </li>
          <li className="services_li">
            <div className="hero_iconStar"></div>
            <p>&nbsp;&nbsp;Тестирование готового софта</p>
          </li>
          <li className="services_li">
            <div className="hero_iconStar"></div>
            <p>&nbsp;&nbsp;Дизайнерская проработка проектов</p>
          </li>
        </ul>
        <div className="services_img"></div>
      </div>
    </section>
  )
};

export default Services;
