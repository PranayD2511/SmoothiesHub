import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg from '../assets/Designer (2).png'


const Home = () => {
  const smoothies_grid = [
    {
      title: "Fresh Ingredients",
      content: "Made with hand-picked fruits and natural ingredients for maximum freshness and flavor."
    },
    {
      title: "100% Natural",
      content: "No artificial colors, preservatives, or added sugars—just pure goodness in every sip."
    },
    {
      title: "Energy Boost",
      content: "Packed with vitamins, minerals, and antioxidants to keep you energized throughout the day."
    },
    {
      title: "Healthy Choice",
      content: "High in fiber and essential nutrients, making every smoothie both delicious and nutritious."
    },
    {
      title: "Fast Delivery",
      content: "Freshly prepared and delivered quickly to your doorstep while maintaining quality."
    },
    {
      title: "Custom Blends",
      content: "Mix your favorite fruits, toppings, and add-ons to create your perfect smoothie."
    },
    {
      title: "Eco-Friendly",
      content: "Served in recyclable and environmentally friendly packaging."
    },
    {
      title: "Premium Quality",
      content: "Every smoothie is crafted using carefully selected premium fruits and ingredients."
    }
  ]

  return (
    <div className='min-h-screen'>
      <div className='h-3/4 flex flex-row justify-between mt-5 p-8'>
        <div className=''><img src={HeroImg} alt="" className='h-96 w-96 ml-12 rounded-2xl  shadow-2xl shadow-black ' /></div>
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
      <div className='flex justify-center mt-10'>
        <div className='w-[1000px] '>
          <div className='flex flex-row justify-center '>
            <h1 className='text-pink-500 font-mono text-5xl'>
              Why have our
            </h1>
            <h1 className='pl-5 font-mono text-5xl'>
              Smoothies
            </h1>
            <h1 className='text-pink-500 font-mono text-5xl'>
              ?
            </h1>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smoothies_grid.map((smoothies, index) => (
              <div
                key={index}
                className="border border-pink-600 rounded-xl shadow shadow-pink-400 p-6"
              >
                <h1 className="text-center mb-5 text-pink-700 font-mono text-lg">
                  {smoothies.title}
                </h1>

                <p className="text-gray-600 text-sm leading-6">
                  {smoothies.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>Location</div>
      <div>Footer</div>

    </div>
  )
}

export default Home