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

  // 여기 바꾸기
  const temperature = data.data.temperature
  // const temperature = 10
  // const temperature = 20
  // const temperature = 30
  const gradientClass = getGradientForTemperature(temperature)

  console.log(gradientClass)


  // retrieve weather data
  // const weather = data.data.ptyCode
  // const weather = 1 // 비
  const weather = 2 // 눈
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
  let keyword = [ '' ]
  let keyword2 = [ '' ]
  let keyword3 = [ '날이 덥습니다! 겉옷을 안챙겨도 괜찮습니다' ]

  // 여기에 옷추의 추천 키워드 추가 가능
  if (temperature >= 25) {
    type = 1
    keyword = [ '반팔', '민소매', '린넨옷' ]
    keyword2 = [ '반바지', '얇은 바지' ]
  } else if (temperature >= 18) {
    type = 2
    keyword = [ '얇은 셔츠', '긴팔', '니트', '후드' ]
    keyword2 = [ '슬랙스', '면바지', '청바지' ]
  } else if (temperature >= 9) {
    type = 3
    keyword = [ '맨투맨', '니트' ]
    keyword2 = [ '긴바지', '청바지' ]
    keyword3 = [ '가디건', '점퍼', '야상' ]

  } else if (temperature <= 8) {
    type = 4
    keyword = [ '히트택', '기모 맨투맨' ]
    keyword2 = [ '기모 바지' ]
    keyword3 = [ '가죽자켓', '코트', '롱패딩', '울코트' ]
  } else {
    type
  }

  return (
    <div className={ `${gradientClass} h-full` }>
      <SnowEffect fallingSpeed={ fallingSpeed } width={ width } height= { height }/>
      <div id="hero">
        <Hero temp = { temperature } />
      </div>
      <div id="temp" className='sticky top-0 z-50'>
        <Temp temp = { temperature } />
      </div>
      <div id="cart" className='fixed bottom-6 right-6 z-50 m-20'>
        <Cart />
      </div>
      <div id= "content" className='pb-10'>
        <Showcase type={ type } keyword={ keyword } keyword2 = { keyword2 } keyword3 = { keyword3 } />
      </div>
    </div>
  )
}
