import React,{useState} from 'react';
import '../css/Navbar.css';
import Logo from '../assets/logo.png';
// import ReorderIcon from '@material-ui/icons/Reorder';


function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
 
    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    };

  return (
    <nav className="Navbar  bg-light">
        <div className='nav shadow-sm'>
            <div className="navbar-brand">
                <img src={Logo} width={150} alt="logo"/>
            </div>
            
            <ul className="navbar-links">
                <li><a href='/' className='navbar-items'>Home</a></li>
                <li><a href='/menu' className='navbar-items'>Menu</a></li>
                <li><a href='/about' className='navbar-items'>About</a></li>
                <li><a href='/booking_page' className='navbar-items'>Reservations</a></li>
                <li><a href='/order' className='navbar-items'>Order online</a></li>
                <li><a href='/login' className='navbar-items'>Login</a></li>
                <button onClick={toggleNavbar}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
            </ul>
        </div>
        <div className='hiddenlinks' id={openLinks ? "open" : "close"}>
            <li><a href='/' className='navbar-items'>Home</a></li>
            <li><a href='/menu' className='navbar-items'>Menu</a></li>
            <li><a href='/about' className='navbar-items'>About</a></li>
            <li><a href='/booking_page' className='navbar-items'>Reservations</a></li>
            <li><a href='/order' className='navbar-items'>Order online</a></li>
            <li><a href='/login' className='navbar-items'>Login</a></li>
            
        </div>
    </nav>
  );
}

export default Navbar;