import React from 'react'
import 'react-dom';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
<Link to="/Inicio">
<strong><p>Inicio</p></strong>
</Link>
<Link to="/Segunda">
<strong><p>Segunda</p></strong>
</Link>
<Link to="/Tercera">
<strong><p>Tercera</p></strong>
</Link>
            </nav>
        </div>
    )
}

export default Navbar
