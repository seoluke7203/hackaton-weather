

import Hero from '@/app/components/main/hero'
import Showcase from '@/app/components/main/showcase'
import Temp from '@/app/components/main/temp'
import Cart from '@/app/components/main/cart'
import { getGradientForTemperature } from '@/app/utils/gradientBackground'

export default async function Home() {

  let response = await fetch('http://localhost:8080/api/weather')
  let data = await response.json()
  console.log(data.data)

  const temperature = data.data
  const gradientClass = getGradientForTemperature(temperature)

  // Get the dynamic gradient class based on temperature
  console.log(gradientClass)

  return (
    <div className={ `${gradientClass} h-full` }>
      <div id="hero">
        <Hero temp = { data.data } />
      </div>
      <div id="temp" className='sticky top-0 z-50'>
        <Temp temp = { data.data } />
      </div>
      <div id="cart" className='fixed bottom-6 right-6 z-50 m-20'>
        <Cart />
      </div>
      <div id= "content" className='pb-10'>
        <Showcase />

      </div>

    </div>
  )
}
