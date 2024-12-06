const getGradientForTemperature = (temperature: number) => {

  if (temperature < 0) {
    return 'bg-gradient-to-r from-blue-500 to-blue-800'
  } else if (temperature <= 10) {
    return 'bg-gradient-to-r from-blue-300 to-blue-500'
  } else if (temperature <= 20) {
    return 'bg-gradient-to-r from-green-300 to-green-500'
  } else if (temperature <= 30) {
    return 'bg-gradient-to-r from-yellow-300 to-yellow-500'
  }
}





export { getGradientForTemperature }