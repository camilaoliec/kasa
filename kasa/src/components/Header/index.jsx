import { NavLink } from 'react-router-dom';
import LogoHeader from '../../assets/Header-logo.png';


function Header() {
    return (
        <nav>
            <img src={LogoHeader} alt='Logo' />
            <div className="nav-links">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                    end
                >
                        Accueil
                </NavLink>
                <NavLink
                    to="/APropos" 
                    className={({ isActive}) => isActive ? "active" : ""}
                >
                    A Propos
                </NavLink>
            </div>
        </nav>
    )
}

export default Header