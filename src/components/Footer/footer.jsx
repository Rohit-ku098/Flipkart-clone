
function Footer(){
    return (
      <footer className="bg-slate-950 w-full text-white text-xs">
        <div className=" flex  justify-between p-4 py-10 list-none ">
          <div className=" w-[calc(60%)] flex flex-wrap justify-around border-e border-slate-600 font-medium">
            <div>
              <h3 className="text-slate-500 text-sm font-semibold  mb-4">
                ABOUT
              </h3>
              <ul>
                <li>
                  <a href="#">contact Us</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Flipkart Stories</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Flipkart Wholesale</a>
                </li>
                <li>
                  <a href="#">Cleartrip</a>
                </li>
                <li>
                  <a href="#">Corporate Information</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-500 text-sm font-semibold   mb-4">
                HELP
              </h3>
              <ul>
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Cancellation & Returns</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Report Infringement</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-500 text-sm font-semibold  mb-4">
                CONSUMER POLICY
              </h3>
              <ul>
                <li>
                  <a href="#">Cancellation & Returns</a>
                </li>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Grievance Redressal</a>
                </li>
                <li>
                  <a href="#">EPR Compliance</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-500 text-sm font-semibold  mb-4">
                SOCIAL
              </h3>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-[calc(40%)] justify-around">
            <div className="">
              <h4 className="text-slate-500 text-sm mb-4">Mail Us:</h4>
              <li>Flipkart Internet Private Limited,</li>
              <li>Buildings Alyssa, Begonia &</li>
              <li>Clove Embassy Tech Village,</li>
              <li>Outer Ring Road, Devarabeensanahalli Village,</li>
              <li>Bengaluru, 560103,</li>
              <li>Karnataka, India</li>
            </div>
            <div>
              <h4 className="text-slate-500 text-sm mb-4">
                Registered Office Address:
              </h4>
              <li>Flipkart Internet Private Limited,</li>
              <li>Buildings Alyssa, Begonia &</li>
              <li>Clove Embassy Tech Village,</li>
              <li>Outer Ring Road, Devarabeensanahalli Village,</li>
              <li>Bengaluru, 560103,</li>
              <li>Karnataka, India</li>
              <li>CIN: U511********107</li>
              <li>
                Telephone: <a href="tel:044-45614700">044-45614700</a>
              </li>
            </div>
          </div>
        </div>
        <div className="flex justify-around border-t border-slate-600 p-6 list-none">
          <li className="flex ">
            <div className="me-1">
              <img src="/images/Footer/sell-image.svg" alt="" />
            </div>
            <p>Become a Seller</p>
          </li>
          <li className="flex ">
            <div className="me-1">
              <img src="/images/Footer/advertise.svg" alt="" />
            </div>
            <p>Advertise</p>
          </li>
          <li className="flex ">
            <div className="me-1">
              <img src="/images/Footer/gift-cards.svg" alt="" />
            </div>
            <p>Gift Cards</p>
          </li>
          <li className="flex ">
            <div className="me-1">
              <img src="/images/Footer/help-centre.svg" alt="" />
            </div>
            <p>Help Center</p>
          </li>
          <li className="flex ">
            <p> &#169; 2007-2023 Flipkart.com</p>
          </li>
          <li>
            <div>
              <img src="/images/Footer/payment-method.svg" alt="" />
            </div>
          </li>
        </div>
      </footer>
    );
}

export default Footer;