import React from 'react'
import logo from '../images/logo.png'

const NavHome = () => {
    const handleScroll = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      };
  return (
<nav class="bg-purple dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} class="h-14 w-14" alt="Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">AuctionBay</span>
    </a>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     <a href='/signup'> <button type="button" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-cyan hover:bg-white">Connect Wallet</button></a>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-sticky">
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-purple md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
        <li>
          <a href="#home" onClick={handleScroll} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-cyan md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#about" onClick={handleScroll} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-cyan md:p-0 md:dark:text-blue-500">About</a>
        </li>
        <li>
          <a href="#services" onClick={handleScroll} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-cyan md:p-0 md:dark:text-blue-500">Services</a>
        </li>
        <li>
          <a href="#comments" onClick={handleScroll} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-cyan md:p-0 md:dark:text-blue-500">Comments</a>
        </li>
        <li>
          <a href="#contactus" onClick={handleScroll} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-cyan md:p-0 md:dark:text-blue-500">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default NavHome