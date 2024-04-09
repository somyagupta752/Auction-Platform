import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
import {data} from './data2';
const BidData = () => {
    const location = useLocation();
    const { description, image, title, bid } = location.state;
    if (!data || data.length === 0) return null;

    const numRows = Math.ceil(data.length / 3); // Calculate the number of rows needed
  
    const tableRows = [];
    for (let i = 0; i < numRows; i++) {
      const row = data.slice(i * 3, (i + 1) * 3); // Slice the data into rows of 3
      tableRows.push(row);
    }
  
  return (
    <>
    <section id="about">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 transform scale-x-(-1)">
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={image} alt="mockup" />
        </div> 
        <div class="mr-auto place-self-center lg:col-span-7 mr-6">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-cyan">{title}</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-white text-4xl">Current Bid : <span className='text-cyan'>${bid}</span></p>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-white">{description}</p>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-white">Number of Bidders : <span className='text-cyan'>{data.length}</span></p>
           
            <input type='number' className='mr-3'></input>
            <a href="#home" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-cyan hover:bg-white">
                Make a Bid
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#home" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-cyan hover:bg-white">
                Get History
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            
        </div>
                       
    </div>
    </section>
    <h1 className='text-left text-white text-xl'>Bidder History</h1>
  <table className="min-w-full divide-y divide-gray-200 ">
    <thead className="bg-gray-900">
      <tr className=''>
        <th className="px-6 py-3 text-center  text-xs font-medium text-white uppercase tracking-wider ">Timestamp</th>
        <th className="px-6 py-3 text-center  text-xs font-medium text-white uppercase tracking-wider ">Bidder Address</th>
        <th className="px-6 py-3 text-center  text-xs font-medium text-white uppercase tracking-wider">Amount</th>
      </tr>
    </thead>
    <tbody className="bg-gray-500 divide-y divide-gray-500">
      {data.map((item, index) => (
        <tr key={index} className={index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-500'}>
          <td className="px-6 py-4 whitespace-nowrap">{item.Timestamp}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.BidderAddress}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.Amount}</td>
        </tr>
      ))}
    </tbody>
  </table>

   </>
  )
}

export default BidData