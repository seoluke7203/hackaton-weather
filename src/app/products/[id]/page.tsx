import ItemLayout from '@/app/components/detail/itemLayout'

export default async function Page(props: { params: Promise<{ id: string}>}) {
  const { id } = await props.params
  return(
    <div>
      <h1>My Page { id }</h1>
      <div className='w-full'>
        <ItemLayout name="test" price={ 1000 } image="https://via.placeholder.com/150" />
      </div>
    </div>
  )
}