
function Titletext({title, isDropdown=false}){

    return (
      <div className="flex items-center gap-2 group">
        <div className="title font-medium">{title}</div>

        <div
          className={`dropdown pt-1 group-hover:rotate-180 ease-in-out ${
            isDropdown ? "" : "hidden"
          }`}
        >
          <img src="/images/dropdown.svg" alt="" />
        </div>
      </div>
    );
}

export default Titletext