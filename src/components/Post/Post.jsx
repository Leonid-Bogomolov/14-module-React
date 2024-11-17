import React, { useState } from "react";
import './post.css'

const Post = ({ post }) => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="post">
            <div className="humburger__filling" onClick={() => setShowMenu(!showMenu)}>
                <div className="humburger__core"></div>
                <div className="humburger__core"></div>
                <div className="humburger__core"></div>
            </div>
            <div className={showMenu ? "menu-container" : "hidden"}>
                <div className="menuMobile">
                    <div className="menu__crossburger" onClick={() => setShowMenu(!showMenu)}>
                        <div className="line-horizontal cross"></div>
                        <div className="line-vertical cross"></div>
                    </div>
                    <div>
                        <ul>
                            <li className="li-mobile"><a className="menu-item" href="#hero">Главная</a></li>
                            <li className="li-mobile"><a className="menu-item" href="#about">Обо мне</a></li>
                            <li className="li-mobile"><a className="menu-item" href="#services">Services</a></li>
                            <li className="li-mobile"><a className="menu-item" href="#portfolio">Portfolio</a></li>
                            <li className="li-mobile"><a className="menu-item" href="#asked">Задать вопрос</a></li>
                            <li className="li-mobile"><a className="menu-item" href="#testimonials">Отзывы</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post