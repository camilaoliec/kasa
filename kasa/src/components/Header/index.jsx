import { Link } from 'react-router-dom';
import LogoHeader from '../../assets/Header-logo.png';

function Header() {
    return (
        <nav>
            <img src={LogoHeader} alt='Logo' />
            <div className='menu'>
                <Link to="/">Accueil</Link>
                <Link to="/A Propos">A Propos</Link>
            </div>
        </nav>
    )
}

export default Header