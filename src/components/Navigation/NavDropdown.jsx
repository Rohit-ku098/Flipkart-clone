export default function ({ hovered = true , className}) {
  return (
    <div className={`${!hovered && "hidden"} z-10`}>
      <div
        className={` bg-white shadow-gray-400 shadow-xl absolute right-16 top-12 rounded-lg  ${className}`}
      >
        <div className="p-3">
          <ul className="">
            <li className="flex py-2 hover:cursor-pointer hover:bg-gray-50">
              <img
                src="./images/notification.svg"
                alt=""
                className="inline me-3 "
                width={"20px"}
              />
              <p>Notification Preferences</p>
            </li>

            <li className="flex  py-2 hover:cursor-pointer hover:bg-gray-50">
              <img
                src="./images/helpcenter.svg"
                alt=""
                className="inline me-3"
                width={"20px"}
              />
              <p>24x7 Customer Care</p>
            </li>

            <li className="flex  py-2 hover:cursor-pointer hover:bg-gray-50">
              <img
                src="./images/advertise.svg"
                alt=""
                className="inline me-3"
                width={"20px"}
              />
              <p>Advertise</p>
            </li>

            <li className="flex  py-2 hover:cursor-pointer hover:bg-gray-50">
              <img
                src="./images/download.svg"
                alt=""
                className="inline me-3"
                width={"20px"}
              />
              <p>Download App</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
