import React from 'react'
import { useQRCode } from 'next-qrcode'

export default function QRCode({ password }: {password: string}) {
  const { Canvas } = useQRCode()

  return(
    <>
      <Canvas
        text={ password }
        options={ {
          errorCorrectionLevel: 'quartile',
          margin: 3,
          scale: 4,
          width: 300,
          color: {
            dark:'#000000', 
            light: '#FFFFFF',
          },
        } }
      />
    </>
  )
}