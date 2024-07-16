import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                    <h1>Portfolio</h1>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link
                            onClick={closeMenu}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="hero"
                            >
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                                onClick={closeMenu}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                to="projects"
                                >
                                Projects
                            </Link>
                    </li>
                    <li className='nav-item'>
                            <Link
                                onClick={closeMenu}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                to="skills"
                                >
                                Skills
                            </Link>
                    </li>
                    <li className='nav-item'>
                            <Link
                                onClick={closeMenu}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                to="contact"
                                >
                                Contact Me
                            </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar