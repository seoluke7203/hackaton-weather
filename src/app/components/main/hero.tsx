export default async function Hero( { temp = 10 }: { temp: number } ) {



  const isSummer = true
  // const isSummer = false

  return (
    <div
      className= "flex flex-col items-center justify-center h-screen"
    >
      <div className="flex justify-center z-50">
        <div className="place-content-center">
          <h1 className="text-9xl font-bold text-center text-white drop-shadow-lg border-8 border-double p-10 rounded-full mr-16 glass">
            { temp }°C
          </h1>
        </div>
        <div>
          <h1 className="text-8xl font-bold text-center text-white drop-shadow-lg">
          오늘의 <br/> <span className="ml-20"><span className="text-blue-200">옷차</span>림</span>
          </h1>
        </div>
      </div>
    </div>
  )
}