import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import styles from './Nav.module.css'


function Nav() {


    return (
        <div>
            <nav>
                <Navbar className={styles.navbar}>
                    <NavItem>
                        <Link to="/about">
                            <li>About</li>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact">
                            <li>Contact</li>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/rooms">
                            <li>Rooms</li>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/restaurant">
                            <li>Restaurant</li>
                        </Link>
                    </NavItem>
                </Navbar>
            </nav>

        </div>
    );
}

export default Nav;
