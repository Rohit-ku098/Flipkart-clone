
function TopStory({title, data=[]}) {
    return (
      <div className=" mx-4 my-2 text-xs text-gray-600">
        <h3 className="inline font-medium text-sm text-gray-500">{title.toUpperCase() }:</h3>
        {data.map((data) => (
          <p className="inline border-e px-1 border-gray-800">
            <a href={data.link}>{data.name}</a>
          </p>
        ))}
      </div>
    );
}

export default TopStory;