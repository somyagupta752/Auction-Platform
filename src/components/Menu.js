import React from 'react'
import './Bidder.css'
import { useState } from 'react';
import Bidding from './Bidding';
import {useNavigate} from 'react-router-dom'
const Menu = ({items}) => {
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false);
    return(
      <div className='section-center'>
          {items.map((menuItem)=>{
              const {id, title, bid, img, desc} = menuItem
              return(
                  <article key={id} className='menu-item'>
                      <img src={img} alt={title} className='photo' />
                      <div className='item-info'>
                          <header>
                              <h4>{title}</h4>
                              <h4 className='price'>${bid}</h4>
                          </header>
                          <p className='item-text'>{desc}</p>
                          
                      </div>
                     <div className='flex gap-2'> <button className='btn' onClick={() => {
          setModalOpen(true);
         
          
        }}>Bid</button>
        <button className='btn'  onClick={() => {
          navigate('/bidderdata',{state:{description:desc,image:img,title:title,bid:bid}})
          
        }}>Details</button>
        </div>
         
                  </article>
              )
          })}
           {modalOpen && <Bidding setOpenModal={setModalOpen} />}
      </div>
    )
  };

export default Menu
