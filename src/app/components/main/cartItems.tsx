export default function CartItems() {
  return (
    <div>
      <div className="flex p-1">
        <div className="w-1/3">
          <img src="https://via.placeholder.com/150" alt="product" />
        </div>
        <div className="w-2/3 ml-2">
          <h3 className="text-xl font-semibold overflow-hidden mb-4">상품 이름</h3>
          <p className="text-gray-500">Price: $10</p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  )
}