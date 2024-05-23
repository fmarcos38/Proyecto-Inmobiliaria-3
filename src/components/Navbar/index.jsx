import React, { useState } from 'react';
import './styles.css';
import { Link, NavLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Logo from '../../Imagenes/Logo-Flor-2.jpg';

function NavbarConRedes() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className='cont-navbar'>
                {/* Logo */}
                <div className='cont-navbar-logo'>
                    <NavLink to='/' >
                        <img src={Logo} alt='img not found' className='logo-navbar' />
                    </NavLink>
                </div>
                {/* menu P.Grande */}
                <div className='cont-navbar-menuG'>
                    <ul className='ul-menuPG'>
                        <li>
                            <NavLink to='/venta' className={'link-navbar'}>
                                Venta
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/alquiler' className={'link-navbar'}>
                                Alquileres
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/destacadas' className={'link-navbar'}>
                                Destacadas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacto' className={'link-navbar'}>
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* Redes */}
                <div className='cont-navbar-redes'>
                    <div className='cont-items-redes'>
                        <LocationOnIcon className='iconoContact' />
                        <p>Sarmiento 2323</p>
                    </div>
                    <div className='cont-items-redes'>
                    <LocalPhoneIcon className='iconoContact'/>
                        <p>2234422665</p>
                    </div>
                    <div className='cont-items-redes'>
                        <AlternateEmailIcon className='iconoContact' />
                        <p>florm@gmail.com</p>
                    </div>
                    <div className='cont-items-redes'>
                        <a href='https://www.instagram.com/florm.bienesraices/'>
                            <InstagramIcon className='iconoContact' />
                        </a>
                        <a href='http://api.whatsapp.com/send?phone=2234422665'>
                            <WhatsAppIcon className='iconoContact' />
                        </a>
                    </div>
                </div>
                {/* menu hambur P.Chica */}
                <div
                    className={`menu-icon ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* menu desplegable P.chica*/}
                <div className="menu-desplegable">
                    {
                        isOpen && (
                            <ul className='na-lista-pChica'>
                                <li className='items-pChica'>
                                    <Link to='/' className='link-navbar'>Home</Link>
                                </li>
                                <li className='items-pChica'>
                                    <Link to='/venta' className='link-navbar'>Venta</Link>
                                </li>
                                <li className='items-pChica'>
                                    <Link to='/alquiler' className='link-navbar'>Alquiler</Link>
                                </li>
                                <li className='items-pChica'>
                                    <Link to='/nosotros' className='link-navbar'>Nosotros</Link>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavbarConRedes;


