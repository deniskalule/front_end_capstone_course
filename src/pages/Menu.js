import React from 'react';
import '../css/Menu.css';
import { MenuList } from '../helpers/Specialslist'

function Menu() {

  return <div className="menu">
    <div className="container">
      <h4 className="text-center">Our Menu</h4>
      {/* items section */}
      <div className='row menulist'>
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
    </div>
  </div>
  
}

export default Menu