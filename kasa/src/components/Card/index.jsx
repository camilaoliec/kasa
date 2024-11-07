import React from "react"
import './Card.scss'

function Card({ title, picture}) {
    return (
        <div className="card" style={{ backgroundImage: `url(${picture})` }}>
            <h2 className="card__title">{title}</h2>
        </div>

    )
}

export default Card