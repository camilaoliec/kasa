import React from "react"
import { Link } from "react-router-dom";
import './Card.scss'

function Card({ id, title, picture}) {
    return (
        <Link to={`/property/${id}`} className="card-link">
            <div 
            className="card" 
            style={{ 
                backgroundImage: `url(${picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
                >
                <h2 className="card__title">{title}</h2>
            </div>
        </Link>
    )
}

export default Card