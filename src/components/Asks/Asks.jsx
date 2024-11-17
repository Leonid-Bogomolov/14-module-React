import React from "react"
import "./Asks.css"
import Accordion from "../Accordion/Accordion";

const Asks = () => {

  return (
    <section id="asked" className="asks container">
      <div className="asks_nominal">
        <span className="block-nominal">asks</span>
        <h2>Часто задаваемые вопросы</h2>
      </div>
      <div className="asks_main">
        <div className="accordion">
          <Accordion text1='Какого вида web-работы вы выполняете?' text2='Фронтент-разработка сайтов и web-приложений для ведения дел и игровые, дизайн проработка проектов, тестирование готовых разработок.' config={{ alwaysOpen: true }} />
          <Accordion text1='Сроки выполнения работ?' text2='Как только, так сразу.' config={{ alwaysOpen: true }} />
        </div>
      </div>

    </section>
  )
};

export default Asks;
