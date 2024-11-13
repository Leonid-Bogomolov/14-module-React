import React from "react"
import './Header.css'
import Humburger from "../Humburger/Humburger";

/*const [menuMobile, setMenuMobile] = useState(true)
const newMenuMobile = menuMobile ? '' : 'new__MenuMobile'*/

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
      {/*<div className="outHumburger" onClick={() => setMenuMobile(!menuMobile)}>*/}
      <div className="outHumburger">
        <Humburger />
      </div>
      
      {/*<div className={'menuMobile ${newMenuMobile}'}>*/}
      <div className="menuMobile">
        <div><a className="menu-item" href="#hero">Главная</a></div>
        <div><a className="menu-item" href="#about">Обо мне</a></div>
        <div><a className="menu-item" href="#services">Services</a></div>
        <div><a className="menu-item" href="#portfolio">Portfolio</a></div>
        <div><a className="menu-item" href="#asked">Задать вопрос</a></div>
        <div><a className="menu-item" href="#testimonials">Отзывы</a></div>
      </div>
    </header>
  )
};

export default Header;
