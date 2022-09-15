import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const NavBar = () => {

    const [nav, setNav] = useState(true);

    const handleClick = () => {
        setNav(!nav);
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='text-3xl font-bold text-vertPrimary'>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Ressources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleClick} className="block md:hidden">
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-noirBody ease-in-out duration-500 md:hidden' : 'fixed ease-in-out duration-700 left-[-100%]'}>
            <h1 className='text-3xl font-bold text-vertPrimary m-4'>REACT.</h1>
            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Ressources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
    </div>
  );
}

export default NavBar;