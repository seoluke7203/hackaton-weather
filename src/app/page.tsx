export default function Home() {
  const isSummer = false

  return (
    <div
      className={ `flex flex-col items-center justify-center h-screen ${
        isSummer
          ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500'
          : 'bg-gradient-to-r from-blue-500 via-indigo-600 to-gray-800'
      }` }
    >
      <h1 className="text-6xl font-bold text-center text-white drop-shadow-lg">
        { isSummer ? 'text' : 'text' }
      </h1>
    </div>
  )
}
