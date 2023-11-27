import { useState } from "react";
import DropdownListItems from "./DropdownListItems";

function DropdownList({list=[]}) {
    const [notHovered, setNotHovered] = useState(true)
    
    return (
      <div className="relative">
        <div
          className={` w-60 absolute z-10 -left-52 border rounded-lg bg-white shadow-xl text-sm hidden group-hover:block`}
        >
          {list.map((data, index) => (
            <li
              className={`p-3 px-4  flex justify-between group/list ${
                index === 0 && notHovered
                  ? "bg-blue-50  font-medium"
                  : " hover:bg-blue-50 hover:font-medium"
              } `}
              onMouseEnter={() => setNotHovered(false)}
              onMouseLeave={() => setNotHovered(true)}
            >
              <p>{data.item}</p>
              {data.items[0] != undefined? (
                <div
                  className={` ${
                    index === 0 && notHovered
                      ? "group-hover/list:visible  "
                      : " group-hover/list:visible invisible"
                  } `}
                >
                  <p className=" -rotate-90">
                    <img className="" src="./images/dropdown.svg" alt="" />
                  </p>
                  <DropdownListItems
                    items={data.items}
                    itemName={data.item}
                    style={` ${index === 0 && notHovered ? "visible" : ""}`}
                  />
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
        </div>
      </div>
    );
}

export default DropdownList;