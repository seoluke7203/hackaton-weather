import ItemLayout from '@/app/components/detail/itemLayout'

export default async function Page(props: { params: Promise<{ id: string}>}) {
  const { id } = await props.params
  const response = await fetch(`http://localhost:8080/api/products/${id}`)
  const result = await response.json()


  function cleanName(name: string) {
    let cleanedName = name.replace(/<\/?[^>]+(>|$)/g, '')
    cleanedName = cleanedName.replace(/[^가-힣ㄱ-ㅎㅏ-ㅣ\s]/g, '')
    return cleanedName
  }
  
  return(
    <div>
      <div className='w-full h-full'>
        <ItemLayout id={ result.id } name={ cleanName(result.name) } price={ result.price } image={ result.img } />
      </div>
    </div>
  )
}