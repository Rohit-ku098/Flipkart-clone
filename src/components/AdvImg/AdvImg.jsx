
function AdvImg({imageUrl = ''}){
    return (

        <div className="w-[calc(66%-1rem)]  ms-4 mb-4 inline-block">
            <img src={imageUrl}  className="h-full w-full" />
        </div>
      
    )
}

export default AdvImg