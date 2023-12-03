
function useSortProducts(products=[], type){
    if(type == 2)
    {
        products.sort((a,b) => a.price - b.price)
    }
    else if(type == 1)
    {
        products.sort((a,b) => b.price - a.price)
    }
}

export default useSortProducts;