import Hero from '@/app/components/main/hero'
import Showcase from '@/app/components/main/showcase'
import Temp from '@/app/components/main/temp'
import Cart from '@/app/components/main/cart'
import { getGradientForTemperature } from '@/app/utils/gradientBackground'
import SnowEffect from '@/app/utils/snowflakes'

export default async function Home() {

  let response = await fetch('http://localhost:8080/api/weather')
  let data = await response.json()
  console.log('Hello', data.data.temperature)

  const temperature = data.data.temperature
  const gradientClass = getGradientForTemperature(temperature)

  console.log(gradientClass)


  // retrieve weather data
  const weather = data.data.ptyCode
  let fallingSpeed = 15000
  let width = 1
  let height = 1

  // 0: 맑음 1: 비, 3: 눈
  if (weather == 1) {
    fallingSpeed = 1500
    width = 0.1
    height = 50
  } else if (weather == 2) {
    fallingSpeed = 15000
    width = 15
    height = 15
  } else {
    fallingSpeed = 0
    width = 0
    height = 0
  }

  let type = 0

  // 여기에 옷추의 추천 키워드 추가 가능
  if (temperature >= 25) {
    type = 1
  } else if (temperature >= 18) {
    type = 2
  } else if (temperature >= 9) {
    type = 3
  } else if (temperature <= 8) {
    type = 4
  } else {
    type
  }

  return (
    <div className={ `${gradientClass} h-full` }>
      <SnowEffect fallingSpeed={ fallingSpeed } width={ width } height= { height }/>
      <div id="hero">
        <Hero temp = { data.data.temperature } />
      </div>
      <div id="temp" className='sticky top-0 z-50'>
        <Temp temp = { data.data.temperature } />
      </div>
      <div id="cart" className='fixed bottom-6 right-6 z-50 m-20'>
        <Cart />
      </div>
      <div id= "content" className='pb-10'>
        <Showcase type={ type } />
      </div>
    </div>
  )
}
