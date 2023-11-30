function DropdownListItems({ items,itemName, style }) {
  return (
    <div key={itemName}>
      <div
        className={` ${style}  w-60  min-h-full absolute top-0 left-full z-10  border rounded-lg bg-white shadow-lg text-sm `}
      >
        <div className="p-3 px-4 ">More in {itemName}</div>
        {items.map((data, index) => (
          <li className="p-3 px-4 font-normal flex justify-between ">
            <p>{data}</p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default DropdownListItems;
