import React, {useState} from "react";
import arrowIcon from "../../assets/APropos-arrow.png"
import "./Collapse.scss";

function Collapse({ title, children }) {
    const [isOpen, setIsopen] = useState(false);
    
    const toggleCollapse = () => {
        setIsopen(!isOpen);
    };
    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img
                    src={arrowIcon}
                    alt="togle arrow"
                    className={`arrow-icon ${isOpen ? "open" : ""}`}
                />
            </div>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    )
}

export default Collapse