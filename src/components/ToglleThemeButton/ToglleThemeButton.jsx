import React, { useRef, useState } from "react";
import './toglleThemeButton.css'

const ToglleThemeButton = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className="toglle-btn-wrapper">
            <input className="toglle-input" type="checkbox" id="light" checked={!darkTheme} onChange={() => console.log("заглушка")}/>
            <input className="toglle-input" type="checkbox" id="dark" checked={darkTheme} onChange={() => console.log("заглушка")}/>
            <button className="toglle-btn"
                onClick={() => setDarkTheme(!darkTheme)}
            >
                <div className="dark"></div> / <div className="light"></div>
            </button>
        </div>
    )
}

export default ToglleThemeButton