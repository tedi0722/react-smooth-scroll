import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

class Navbar extends Component {


    render () {
        return (
            <nav className="navbar">
                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            to="section1"
                            smooth={true}
                            spy={true}
                            duration={500}
                        >
                            Section 1
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section2"
                            smooth={true}
                            spy={true}
                            duration={500}
                        >
                            Section 2
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section3"
                            smooth={true}
                            spy={true}
                            duration={500}
                        >
                            Section 3
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;