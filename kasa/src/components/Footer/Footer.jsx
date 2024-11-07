import React from 'react';
import LogoFooter from '../../assets/logo-footer.png';

function Footer() {
    return (
        <footer>
            <img src={LogoFooter} alt='Logo' />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </footer>
    )
}

export default Footer