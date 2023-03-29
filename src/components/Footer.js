import React from 'react';
import '../css/Footer.css';
import Logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className='container-fluid Footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 mb-4'>
            {/* logo */}

            <img src={Logo} width={200} alt='Footer_logo' />
          </div>
          <div className='col-lg-3 col-md-6 mb-4'>
            {/* quick links */}
            <h6 className='text-uppercase'>quick links</h6>
            <hr />
            <ul>
              <li><a href='/' className='navbar-items'>Home</a></li>
              <li><a href='/menu' className='navbar-items'>Menu</a></li>
              <li><a href='/about' className='navbar-items'>About</a></li>
              <li><a href='/reserve' className='navbar-items'>Reservations</a></li>
              <li><a href='/order' className='navbar-items'>Order online</a></li>
              <li><a href='/login' className='navbar-items'>Login</a></li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-6 mb-4'>
            <h6 className='text-uppercase'>Contact us</h6>
            <hr />
            <form action='' method='' encType=''>
              <h6>Subscribe to our newsletter</h6>
              <input type='email' name='email' className='rounded form-control' placeholder='eg. denisjotham@gmail.com'  />
              <button className='btn btn-danger btn-sm mt-3'>
                Subscribe
              </button>
            </form>
            <p className='mt-2'><i className="fas fa-phone    "></i> +256 776281096</p>
          </div>
          <div className='col-lg-3 col-md-6 mb-4'>
            <h6 className='text-uppercase'>Social media Links</h6>
            <hr />
            <ul>
              <li><a href='/'><i className="fas fa-facebook    mr-3"></i>Facebook</a></li>
              <li><a href='/'><i className="fas fa-youtube    mr-3"></i>Youtube</a></li>
              <li><a href='/'><i className="fas fa-twitter    mr-3"></i>Twitter</a></li>
              <li><a href='/'><i className="fas fa-instagram    mr-3"></i>Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;