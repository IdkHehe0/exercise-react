// import React from 'react'
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
// import '../Style/Navigation.css';

// export default function Navigation() {
//     const { theme, toggle, dark } = useContext(ThemeContext)
//     return (
//         <div>
//             <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
//                 <ul>
//                     <li><a className='active' href='#home'>Home</a></li>
//                     <li><a href='#news'>News</a></li>
//                     <li><a href='#about'>About</a></li>
//                     <li><a href='#contact'>Contact</a></li>
//                 </ul>
//                 <div style={{ position: 'relative' }}>
//                     <a className='switch-mode' href='#' onClick={toggle}
//                         style={{
//                             backgroundColor: theme.backgroundColor,
//                             color: theme.color,
//                             outline: 'none'
//                         }} data-testid="toggle-theme-btn"
//                     >
//                         Switch Nav to {!dark ? 'Dark' : 'Light'} mode
//                     </a>
//                 </div>
//             </nav>
//         </div>
//     )
// }
//*************************************************************************************************************************/
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from "react-materialize";
import '../Style/Navigation.css';

export default function Navigation() {
    return (
        <Navbar className="menu"
            alignLinks="right"
            brand={<span className="brand-logo">Player Cards</span>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
        >

            <ul className="hide-on-med-and-down-right">

                <li>
                    <Link to='/'>
                        <Icon left></Icon> Home
                    </Link>
                </li>

                <li to='/about'>
                    <Link to='/about'>
                        <Icon left></Icon> About
                    </Link>
                </li>

                <li to='/news'>
                    <Link to='/news'>
                        <Icon left></Icon> News
                    </Link>
                </li>

                <li href='/contact'>
                    <Link to='/contact'>
                        <Icon left></Icon> Contact
                    </Link>
                </li>

            </ul>

        </Navbar>
    )
}