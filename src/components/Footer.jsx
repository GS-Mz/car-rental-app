import {
  CiFacebook,
  CiTwitter,
  CiLinkedin,
  CiInstagram,
  CiYoutube,
} from "react-icons/ci";

import { BsTelephoneFill } from "react-icons/bs";

import { footerInfo } from "../constants";
import { logo, googleplay, appstore, smartphones } from "../assets";

import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className="z-20">
      <div className="bg-black-200 text-white flex md-max:flex-wrap justify-center p-12 pt-64 relative ">
        <div className="translate-y-[-7rem] overflow-hidden absolute top-[-12vh] h-96 sm-max:h-full mb-6 w-[60%] sm-max:w-[70%] rounded-xl ">
          <div className="relative translate-y-28 h-72 sm-max:h-[64] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex sm-max:flex-col sm-max:items-center sm-max:justify-center sm-max:px-4">
            <div className="flex flex-col ml-14 justify-center py-10 w-1/2 mdlg:w-full mdlg:m-14 ">
              <h4 className={`${styles.aboutHeadText} text-white`}>
                Download LuxDrive <br /> App for Free
              </h4>
              <p className={`my-2 text-white-200 sm-max:text-center`}>
                For faster, easier booking and exclusive deals.
              </p>
              <div className="flex mt-6 sm-max:mt-0 sm-max:flex-row sm-max:flex-wrap sm-max:justify-center">
                <img
                  src={googleplay}
                  alt="Google Play Link"
                  className="w-32 mr-2 "
                />
                <img src={appstore} alt="Appstore Link" className="w-32 mr-2 sm-max:mt-[2px]" />
              </div>
            </div>
            <div className="w-1/2 relative mdlg:hidden">
            <img
              src={smartphones}
              alt="Smartphones"
              className="lg:w-[350px] w-[320px] absolute bottom-[-25px] lg:right-[80px] right-[40px]"
            />
            </div>
            
          </div>
        </div>

        <div className="flex flex-col w-48 md-max:min-w-[85%]">
          <div className="flex mb-6">
            <img src={logo} alt="LuxDrive Logo" className="w-6 h-6 mx-2" />
            <p className="font-semibold">LuxDrive</p>
          </div>
          <div className="text-grey mb-6">
            <p>Fake Street 123, </p>
            <p>Buenos Aires, Argentina</p>
          </div>
          <div className="flex">
            <div className="mr-2">
              <BsTelephoneFill />
            </div>

            <p className="text-sm">+54 1234567890</p>
          </div>
        </div>
        <div className="flex md-max:flex-wrap md-max:my-10">
          {footerInfo.map((data) => (
            <div key={data.title} className="mx-12 md-max:min-w-[24vw] md-max:my-4">
              <h4 className="font-semibold mb-6">{data.title}</h4>
              <ul className="text-grey">
                {data.links.map((link, index) => (
                  <li className="my-2" key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md-max:mx-12 md-max:my-10">
            <h4 className="mb-6">Follow Us</h4>
            <div className="flex gap-6">
              <a href="#">
                <CiFacebook size={30} />
              </a>
              <a href="#">
                <CiTwitter size={30} />
              </a>
              <a href="#">
                <CiLinkedin size={30} />
              </a>
              <a href="#">
                <CiInstagram size={30} />
              </a>
              <a href="#">
                <CiYoutube size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-200 p-6 text-grey border-t border-[#454545] grid justify-center">
        <p>Copyright © 2023 LuxDrive All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
