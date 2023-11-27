
function TopStorySection({children}) {
    return (
      <div className="p-2 border-t-2 border-b-2 border-gray-400">
        <h2 className=" text-lg font-medium text-gray-500 m-4 ">
          Top Stories : Brand Directory
        </h2>
        <div>
            {children}
        </div>
      </div>
    );
}

export default TopStorySection;