
function ProductCard({
  imageUrl = "",
  name = "",
  price = "",
}) {
  return (
    <div className=" w-48 p-1 border rounded flex justify-between items-center flex-col ">
      <div className="flex items-center justify-center  h-44 w-44   ">
        <img
          src={imageUrl}
          alt=""
          className=" hover:scale-105  max-w-full max-h-full "
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-3">
        <div>{name}</div>
        <div className="font-medium">{price}</div>
      </div>
    </div>
  );
}

export default ProductCard