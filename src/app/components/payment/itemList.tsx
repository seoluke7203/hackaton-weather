export default function ItemList() {
  return (
    <div>
      <div className="flex place-items-center text-center p-4 bg-gray-200 text-black rounded-md">
        <div className="w-1/4 ml-3">
          <img src="https://via.placeholder.com/150" alt="product" />
        </div>
        <div className="w-1/4 ml-2">
          <h3 className="text-lg overflow-hidden mb-4">상품명</h3>
          <h3 className="text-xl font-semibold overflow-hidden mb-4">무신사 자켓</h3>

        </div>
        <div className="w-1/4 ml-2">
          <h3 className="text-lg overflow-hidden mb-4">상품 금액</h3>
          <p className="text-xl font-semibold ">10000</p>
        </div>
        <div className="w-1/4 ml-2">
          <h3 className="text-lg overflow-hidden mb-4">배송비</h3>
          <p className="text-2xl font-semibold ">무료</p>
        </div>
      </div>
    </div>
  )

}