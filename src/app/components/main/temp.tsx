/* eslint-disable max-len */
export default function Temp( { temp = 10 }: { temp: number }) {
  return(
    <div className="absolute flex ">
      <div className="text-5xl font-bold glass text-center text-black m-6 p-8 border-8 border-double rounded-full">
        <div>{ temp }<span className="text-5xl">°C</span></div>
      </div>
    </div>
  )
}