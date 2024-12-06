export default async function Page(props: { params: Promise<{ id: string}>}) {
  const { id } = await props.params
  return <h1>My Page { id }</h1>
}