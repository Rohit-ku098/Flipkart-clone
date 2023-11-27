
export default function ({hovered=true}){
    return (
      <div className={`${!hovered && "hidden"} z-10`}>
        <div className=" w-fit bg-white shadow-gray-400 shadow-xl absolute top-12 rounded-lg  ">
          <div className="flex  gap-16 border-b-2 p-4 hover:cursor-pointer">
            <div className="">New Customer?</div>
            <div className="font-bold text-blue-600 ">Sign Up</div>
          </div>
          <div>
            <ul className="">
              <li className="flex py-2 hover:cursor-pointer hover:bg-gray-50">
                <img
                  src="./images/profile.svg"
                  alt=""
                  className="inline mx-3 "
                  width={"20px"}
                />
                <p>My profile</p>
              </li>

              <li className="flex  py-2 hover:cursor-pointer hover:bg-gray-50">
                <img
                  src="./images/fkplus.svg"
                  alt=""
                  className="inline mx-3"
                  width={"20px"}
                />
                <p>Flipkart Plus Zone</p>
              </li>

              <li className="flex  py-2 hover:cursor-pointer hover:bg-gray-50">
                <img
                  src="./images/orders.svg"
                  alt=""
                  className="inline mx-3"
                  width={"20px"}
                />
                <p>Orders</p>
              </li>

              <li className="flex  py-2 hover:cursor-pointer hover:bg-gray-50">
                <img
                  src="./images/wishlist.svg"
                  alt=""
                  className="inline mx-3"
                  width={"20px"}
                />
                <p>Wishlist</p>
              </li>

              <li className="flex  py-2 hover:cursor-pointer hover:bg-gray-50">
                <img
                  src="./images/rewards.svg"
                  alt=""
                  className="inline mx-3"
                  width={"20px"}
                />
                <p>Rewards</p>
              </li>

              <li className="flex  py-2 hover:cursor-pointer hover:bg-gray-50">
                <img
                  src="./images/giftCard.svg"
                  alt=""
                  className="inline mx-3"
                  width={"20px"}
                />
                <p>Gift Cards</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}