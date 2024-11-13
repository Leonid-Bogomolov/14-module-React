import React from "react"
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_logo-block container">
        <div className="footer_logo">
          <p className="footer_name">ЛЕОНИД</p>
          <p className="footer_surname">БОГОМОЛО<span className="lastLetter">В</span></p>
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
      <div className="footer_main container">
        <div className="footer_call">
          <p className="block-nominal">Проверенная площадка для web-разработчиков </p>
          <div className="footer_transition">
            <h2>ДАВАЙТЕ <button className="hero_transition">&#8663;</button><br></br>РАБОТАТЬ ВМЕСТЕ</h2>
          </div>
          <div className="footer_transition1024">
            <h2 className="footer_transition-h2-1024">ДАВАЙТЕ <button className="hero_transition">&#8663;</button><br></br>РАБОТАТЬ ВМЕСТЕ</h2>
          </div>
        </div>
        <div className="footer_essence">
          <div className="essence-theme">
            <p className=" block-nominal p-title">Главная</p>
            <p className=" block-nominal footer_p-body">Обо мне</p>
            <p className=" block-nominal footer_p-body">Мои разработки</p>
            <p className=" block-nominal footer_p-body">Отзывы</p>
          </div>
          <div className="essence-theme">
          <p className=" block-nominal p-title">Клиенты</p>
          <p className=" block-nominal footer_p-body">Газпром</p>
          <p className=" block-nominal footer_p-body">Ростенологии</p>
          <p className=" block-nominal footer_p-body">Лукойл</p>
          <p className=" block-nominal footer_p-body">Камаз</p>
          </div>
          <div className="essence-theme">
          <p className=" block-nominal p-title">Portfolio</p>
          <p className=" block-nominal footer_p-body">Web-design</p>
          <p className=" block-nominal footer_p-body">Sites</p>
          <p className=" block-nominal footer_p-body">Testing</p>
          <p className=" block-nominal footer_p-body">Web-applications</p>
          <p className=" block-nominal footer_p-body">Plays</p>
          </div>
          <div className="essence-theme">
          <p className=" block-nominal p-title">Services</p>
          <p className=" block-nominal footer_p-body">Web-design</p>
          <p className=" block-nominal footer_p-body">Frontend</p>
          <p className=" block-nominal footer_p-body">Testing</p>
          </div>
        </div>
      </div>
      <div className="footer_footer container">
        <p className="footer_p">Terms & Conditions Privacy Policy</p>
        <div className="networks footer_networks">            
        <div className="social">
                    <a className="vk social-inside" href="https://vk.com/lenya_bogomolov"> </a>
                  </div>
                  <div className="social">
                    <a className="ok social-inside" href="https://ok.ru/feed"> </a>
                  </div>
                  <div className="social">
                    <a className="telegram social-inside" href="@l_v_bogomolov"> </a>
                  </div>
            </div>
        <p className="footer_p">&copy; 2024 Damien Braun Photography. All rights reserved</p>
      </div>
    </footer>
  )
};

export default Footer;
