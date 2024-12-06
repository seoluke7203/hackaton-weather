

import Hero from '@/app/components/main/hero'
import Showcase from '@/app/components/main/showcase'
import Temp from '@/app/components/main/temp'
import Cart from '@/app/components/main/cart'
import { getGradientForTemperature } from '@/app/utils/gradientBackground'
import SnowEffect from '@/app/utils/snowflakes'

export default async function Home() {

  let response = await fetch('http://localhost:8080/api/weather')
  let data = await response.json()
  console.log(data.data)

  const temperature = data.data
  const gradientClass = getGradientForTemperature(temperature)

  console.log(gradientClass)


  // retrieve weather data
  const weather = 2
  let fallingSpeed = 15000
  let width = 1
  let height = 1

  // 1: 비, 2: 눈
  if (weather == 1) {
    fallingSpeed = 1500
    width = 0.1
    height = 50
  } else if (weather == 2) {
    fallingSpeed = 15000
    width = 10
    height = 10
  }

  return (
    <div className={ `${gradientClass} h-full` }>
      <SnowEffect fallingSpeed={ fallingSpeed } width={ width } height= { height }/>
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
