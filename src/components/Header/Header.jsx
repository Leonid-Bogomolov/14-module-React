import React from "react"
import './Header.css'
import AppMenuburger from "../MenuBurger/MenuBurger";

const Header = () => {
  return (
    <header className="header container">
      <div className="logo">
        <p className="name">ЛЕОНИД</p>
        <p className="surname">БОГОМОЛОВ</p>
      </div>
      <div className="menu">
        <div><a className="menu-item" href="#hero">Главная</a></div>
        <div><a className="menu-item" href="#about">Обо мне</a></div>
        <div><a className="menu-item" href="#services">Services</a></div>
        <div><a className="menu-item" href="#portfolio">Portfolio</a></div>
        <div><a className="menu-item" href="#asked">Задать вопрос</a></div>
        <div><a className="menu-item" href="#testimonials">Отзывы</a></div>
      </div>
      <button className="header_contacts btn">Связаться со мной</button>
      <div className="outHumburger">
        <AppMenuburger />
      </div>
    </header>
  )
};

export default Header;
