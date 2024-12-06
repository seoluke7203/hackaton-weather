'use client'

import React, { useEffect } from 'react'

interface SnowEffectProps {
    fallingSpeed?: number
    width?: number
    height?: number
}

// 변수로 떨어지는 속도와 눈의 크기를 조절해 눈과 비를 표현함
// Math.random을 사용해 200개의 눈을 랜덤한 위치에서 랜덤한 속도로 떨어지게 함

const SnowEffect = ({ fallingSpeed = 15000, width = 0, height = 0 }: SnowEffectProps) => {

  useEffect(() => {
    const container = document.getElementById('snow-container')
    if (!container) return

    for (let i = 0; i < 200; i++) {
      const snow = document.createElement('div')
      snow.className = 'snow'
      snow.style.opacity = Math.random().toString()

      const startX = Math.random() * 100
      const endX = startX + (Math.random() * 20 - 10)
      const scale = Math.max(Math.random(), 0.5)

      snow.style.width = `${width}px`
      snow.style.height = `${height}px`

      const keyframe = [
        { transform: `translate(${startX}vw, 0) scale(${scale})` },
        { transform: `translate(${endX}vw, 100vh) scale(${scale})` },
      ]
      const option = {
        duration: fallingSpeed ,
        easing: 'linear',
        iterations: Infinity,
        delay: -Math.random() * 20 * 1000,
      }
      snow.animate(keyframe, option)

      container.appendChild(snow)
    }

    return () => {
      container.innerHTML = '' // Clean up snowflakes on component unmount
    }
  }, [])

  return <div id="snow-container" className="snow-overlay"></div>
}

export default SnowEffect
