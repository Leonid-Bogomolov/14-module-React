import React, { useRef } from 'react';
import './Accordion.css'

const Accordion = ({ text1, text2, config }) => {
    const headerRef = useRef(null);
    const handleClick = () => {
        const elHeader = headerRef.current.closest('.accordion__header');
        if (!elHeader) return;
        if (!config.alwaysOpen) {
            // Используем config из пропсов
            const elOpenItem = document.querySelector('.accordion__item_show');
            if (elOpenItem && elOpenItem !== elHeader.parentElement) {
                elOpenItem.classList.toggle('accordion__item_show');

            }
        } elHeader.parentElement.classList.toggle('accordion__item_show');
    };
    return (
        <div className="accordion__item">
            <div ref={headerRef} className="accordion__header" onClick={handleClick}>
                <h3 className="ask">
                    <p className='textAsk'>{text1}</p>
                    <p className='markDown'>&#8250;</p>
                    <p className='markTop'>&#8249;</p>
                </h3>
            </div>
            <div className="accordion__body">{text2}</div> </div>);
};
export default Accordion;