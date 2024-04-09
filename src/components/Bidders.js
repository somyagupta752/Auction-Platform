import React from 'react';
import './Bidder.css'
import Menu from './Menu';
import { useState } from 'react'
import items from './data';
import Categories from './Categories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
const Bidders = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [categories,setCategories]=useState(allCategories)
  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item)=> item.category===category)
    setMenuItems(newItems)
  }
return(
  <main>
  <section className='menu section'>
    <div className='title'>
      <h2>Current Bids</h2>
      <div className='underline'></div>
    </div>
    <Categories categories={categories} filterItems={filterItems} />
    <Menu items={menuItems} />
  
  </section>
</main>
)
    }
export default Bidders;
