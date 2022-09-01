import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../app/assets/img/HomeIcon.jpg';
import { useState } from 'react';


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <Navbar dark color='primary' sticky='top' expand='md'>

        
            <NavbarBrand className='ms-5' href='/'>
            <img className='float-start' src={HomeIcon} alt='casino logo' />
            <h1 className='mt-1' >Las Vegas Casino Corp</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

            <Collapse isOpen={menuOpen} navbar>

                <Nav className='ms-auto' navbar>

                 <NavItem>
                    <NavLink className='nav-link' to='/'>
                        <i className='fa fa-home fa-lg' />Home
                    </NavLink>
                 </NavItem>


                </Nav>

            </Collapse>

        </Navbar>

    );

}

export default Header;