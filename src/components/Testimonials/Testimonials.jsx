import React from "react"
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials container">
      <div className="testimonials_header">
        <div className="testimonials_nominal">
          <span className="block-nominal">Testimonials</span>
          <h2>Отзывы моих клиентов</h2>
        </div>
        <div className="total">
          <div className="reviews">
            <span className="span18">Всего просмотров</span>
            <div className="counter">321</div>
          </div>
          <div className="testimonials_all">
            <div className="pagination">
              <div className="back circle services_circle">
                <span>&#8249;</span>
              </div>
              <div className="forward circle services_circle">
                <span>&#8250;</span>
              </div>
            </div>
            <button className="btn">Посмотреть все отзывы &#8594;</button>
          </div>
        </div>
      </div>
      <div className="testimonials_main">
        <div className="testimonials_card card-1">
          <div className="card_heard">
            <div className="personality">
              <p className="card_name">Сергей Якишев</p>
              <p className="card_country">Россия, Тамов</p>
            </div>
            <div className="networks card_networks">
              <div className="social">
                <a className="vk" href="https://vk.com/"> </a>
              </div>
              <div className="social">
                <a className="ok" href="https://ok.ru/"> </a>
              </div>
              <div className="social">
                <a className="telegram" href="https://t"> </a>
              </div>
            </div>
          </div>
          <div className="score">
            <div className="card_good"></div>
            <div className="card_good"></div>
            <div className="card_good"></div>
            <div className="card_good"></div>
            <div className="card_good"></div>
          </div>
          <div className="testimonial">
            <p className="card_p">Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.</p>
          </div>
        </div>
        <div className="testimonials_card card-2">
          <div className="card_heard">
            <div className="personality">
              <p className="card_name">Сергей Якишев</p>
              <p className="card_country">Россия, Тамов</p>
            </div>
            <div className="networks card_networks">
              <div className="social">
                <a className="vk" href="https://vk.com/"> </a>
              </div>
              <div className="social">
                <a className="ok" href="https://ok.ru/"> </a>
              </div>
              <div className="social">
                <a className="telegram" href="https://t"> </a>
              </div>
            </div>
          </div>
          <div className="score">
            <div className="card_good"></div>
            <div className="card_good"></div>
            <div className="card_good"></div>
            <div className="card_good"></div>
            <div className="card_good"></div>
          </div>
          <div className="testimonial">
            <p className="card_p">Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.</p>
          </div>
        </div>
        <div className="testimonials_card card-3">
          <div className="card_heard">
            <div className="personality">
              <p className="card_name">Сергей Якишев</p>
              <p className="card_country">Россия, Тамбов</p>
            </div>
            <div className="networks card_networks">
              <div className="social">
                <a className="vk" href="https://vk.com/"> </a>
              </div>
              <div className="social">
                <a className="ok" href="https://ok.ru/"> </a>
              </div>
              <div className="social">
                <a className="telegram" href="https://t.me"> </a>
              </div>
            </div>
          </div>
          <div className="score">
            <div className="card_good"></div>
            <div className="card_good"></div>
            <div className="card_good"></div>
            <div className="card_good"></div>
            <div className="card_good"></div>
          </div>
          <div className="testimonial">
            <p className="card_p">Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.</p>
          </div>
        </div>
      </div>
      <div className="pagination pagination640">
        <div className="back circle services_circle">
          <span>&#8249;</span>
        </div>
        <div className="forward circle services_circle">
          <span>&#8250;</span>
        </div>
      </div>
    </section>
  )
};

export default Testimonials;
