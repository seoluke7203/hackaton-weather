export default function Hero( { temp = 10 }: { temp: number } ) {
  // const isSummer = true
  const isSummer = false

  return (
    <div
      className={ `flex flex-col items-center justify-center h-screen ${
        isSummer
          ? 'bg-gradient-to-r from-yellow-400 via-orange-300 to-pink-300'
          : 'bg-gradient-to-r from-blue-500 via-indigo-600 to-gray-800'
      }` }
    >
      <div className="flex justify-center">
        <div className="place-content-center">
          <h1 className="text-9xl font-bold text-center text-white drop-shadow-lg border-8 border-double p-10 rounded-full mr-20">
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