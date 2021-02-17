import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
     return(
         <nav className="nav-wrapper red darken-3">
             <div className="container">
                 <a className="brand-logo">poke time</a>
                 <ul className="right">
                     <li><Link to="/">home</Link></li>
                     <li><NavLink to="/about">about</NavLink></li>
                     <li><NavLink to="/contact">contact</NavLink></li>
                 </ul>
             </div>
         </nav>
     )
}

export default Navbar