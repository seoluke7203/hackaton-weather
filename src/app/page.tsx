

import Hero from '@/app/components/main/hero'
import Showcase from '@/app/components/main/showcase'
import Temp from '@/app/components/main/temp'
import Cart from '@/app/components/main/cart'


export default function Home() {





  return (
    <div className=" bg-gradient-to-r  from-yellow-400 via-orange-300 to-pink-300">
      <div id="hero">
        <Hero temp = { 20 } />
      </div>
      <div id="temp" className='sticky top-0 z-50'>
        <Temp temp = { 20 } />
      </div>
      <div id="cart" className='fixed bottom-6 right-6 z-50 m-20'>
        <Cart />
      </div>
      <div id= "content">
        <Showcase />

      </div>

    </div>
  )
}
