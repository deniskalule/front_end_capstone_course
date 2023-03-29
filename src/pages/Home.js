import React from 'react';
import HeaderImage from '../assets/pizza.jpg'
import '../css/Home.css';
import { MenuList } from '../helpers/Specialslist';

function Home() {
  return (
    <main className='home'>
        <header className='header'> 
            <div className='container'>

                <div className='row'>
                    <div className='col-6 information'>
                        <h1 className="text-uppercase text-white mb-5">Little lemon</h1>
                        <h5 className='mb-4'>Mukono</h5>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt itaque officiis nemo nostrum, dignissimos aliquid vero esse inventore reprehenderit eaque,</p>

                        <a href="/booking_page"><button className='btn btn-sm shadow'>
                            Reserve a table <i className="ml-3 fa fa-arrow-circle-o-right
                            " aria-hidden="true"></i>
                        </button></a>
                    </div>
                    <div className='col-6 header-img'>
                        <img src={HeaderImage} className='thumbnai' alt="" />
                    </div>
                </div>
            </div>
        </header>

        {/* specials section */}
        <section className="specials container">
            <div className='top-header'>
                <h1 className='text-left text-uppercase'>SPECIALS</h1>
                <a href='/' className='btn btn-sm '>Order-now</a>
            </div>

            <div className='row menu-list m-2'>
                {MenuList.map((menuList, key) => {
                    return  <div className='col-lg-3 col-6'>
                        <div className="card">
                            <img className="card-img-top" src={menuList.image} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{menuList.name}</h4>
                                <p className='card-text'>$ {menuList.price}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
        {/* specials section */}

    </main>
  );  
}

export default Home;