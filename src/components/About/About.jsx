import React from "react"
import './About.css'

const About = () => {
  return (
    <section id="about" className="about container">
      <div className="about_header">
        <div className="about_nominal">
          <span className="block-nominal">About</span>
          <h2>Я Леонид</h2>
        </div>
        <button className="about_more btn">Узнать больше &#8594;</button>
      </div>
      <div className="about_main">
        <div className="about_img"></div>
        <div className="about_essence">
          <article className="Introduction">
            <div className="about_h3">
              <div className="about_star"></div>
              <h3>&nbsp; Introduction</h3>
            </div>
            <p>Желание сочетать творческую деятелность с материальным благосостоянием привело меня к тому, что бы реализоваться на поприще wed-разработчика.<br></br>
              Начинал с освоения web-дизайна, но пришёл к выводу, что было бы лучше предлагать задуманное в виде законченного продукта, а значит необходимости
              освоения профессии fronted-разработчика.
            </p>
          </article>
          <div id="about_contacts" className="about_contacts">
            <div className="about_h3">
              <div className="about_star"></div>
              <h3>&nbsp; Contact Information</h3>
            </div>
            <div className="connection">
              <div className="subConnection">
                <p>Эл.адрес: &nbsp;xxxxxx@yandex.ru</p>
                <p>Номер телефона: &nbsp;+7 000 000 0000</p>
              </div>
              <div className="subSubConnection">
                <div className="networks">
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
                <button className="btnContacts btn">Ваши предложения</button>
                <button className="btnContacts btn">Скачать резюме</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
