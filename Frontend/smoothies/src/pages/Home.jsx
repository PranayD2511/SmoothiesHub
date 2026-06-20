import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg from '../assets/Designer (2).png'


const Home = () => {
  return (
    <div className='h-screen'>
      <div className='h-3/4 flex flex-row justify-between mt-5 p-8'>
      <div className=''><img src={HeroImg} alt="" className='h-96 w-96 ml-12 rounded-2xl  shadow-2xl shadow-black '/></div>
      <div>
        <div className='flex flex-row gap-2 pr-32 mt-12'>
        <h1 className='text-5xl font-mono text-pink-500  text-shadow-black '>Fresh</h1> 
        <h1 className='text-5xl font-mono text-black  text-shadow-black '>Smoothies,</h1> 
        <h1 className='text-5xl font-mono text-pink-500  text-shadow-black '>Fresh</h1> 
        <h1 className='text-5xl font-mono text-black  text-shadow-black '>You</h1></div>
        <div className='text-xl mt-10 font-extralight'>
        Experience the perfect blend of taste and nutrition with our<br></br> freshly
        crafted smoothies. Made from handpicked fruits and natural <br></br>
         ingredients, every sip is packed with flavor, energy, and goodness.</div>
        <div>
          <button className='h-12 w-28 mt-10 border border-pink-500 bg-pink-500 rounded-2xl text-white font-mono '>View</button>
        </div>
      </div>
      </div>
      <div>Feature</div>
      <div>Location</div>
      <div>Footer</div>
      
    </div>
  )
}

export default Home