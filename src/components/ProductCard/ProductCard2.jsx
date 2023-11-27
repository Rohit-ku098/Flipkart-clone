

function ProductCard2({
  imageUrl = "/images/Products/pendrive.webp",
  name = "Pendrives & SD Cards",
  price = "From ₹289",
}) {
  return (
    <div className=" w-52 h-72 p-1 border rounded flex justify-between items-center flex-col ">
      <div className="flex items-center justify-center  h-48 w-48   ">
        <img
          src={imageUrl}
          alt=""
          className=" hover:scale-105  max-w-full max-h-full "
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-3">
        <div>{name}</div>
        <div className="font-medium text-lg text-green-700">{price}</div>
      </div>
    </div>
  );
}

export default ProductCard2;