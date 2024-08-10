import React, { useRef, useContext } from 'react'
import './Header.css';

import { AuthContext } from '../../context/AuthContext';

import { Container, Row, Button } from 'react-bootstrap'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { RiAlignJustify } from "react-icons/ri";

import logo from '../../components/image/logo.jpg'

const nav__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/travel',
        display: 'Travel'
    },

]
const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const navigate = useNavigate()
    const { user, dispatch } = useContext(AuthContext)

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
    }

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')


    return <header className='header' ref={headerRef}>
        <Container>
            <Row>

                <div className='head d-flex align-items-center justify-content-between gap-4'>

                    <div className='logo'>
                        <marquee direction="right">
                            <img id="logo" src={logo} alt='' /><span>H</span>oly-day
                        </marquee>
                    </div>

                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                        <ul className='menu d-flex align-items-center gap-5'>
                            {
                                nav__links.map((item, index) => (
                                    <li className="nav_item" key={index}>
                                        <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link' : ''}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="nav_right d-flex align-items-center gap-4">
                        <div className="Menubar nav_btns d-flex align-items-center gap-2">

                            {
                                user ? (
                                    <>
                                        <h5 className='mb-0'>{user.username}</h5>
                                        <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                                    </>
                                ) : (
                                    <>
                                        <Button><Link className='Login' to='/login'>Login</Link></Button>
                                        <Button><Link className='Register' to='/register'>Register</Link></Button>
                                    </>
                                )
                            }

                        </div>
                        <span className="mobile_menu" onClick={toggleMenu}>
                            <i class="ri-menu-line"><RiAlignJustify /></i>
                        </span>
                    </div>
                </div>

            </Row>
        </Container>
    </header>
}
export default Header
