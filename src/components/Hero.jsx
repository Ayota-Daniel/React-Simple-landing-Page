import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='uppercase text-vertPrimary font-bold p-2'>Grow  with data analytics</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-5 '>Grow with data</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['BTB','BTC','SASS']} 
                typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your Data analytics to increase revenue for BTB, BTC, & SASS platform</p>
            <button className='bg-vertPrimary w-[200px] rounded-md font-medium mx-auto my-5 py-3 text-black'>Get Startted</button>
        </div>
    </div>
  );
}

export default Hero;