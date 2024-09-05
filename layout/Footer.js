import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPeriscope,
  FaYoutube,
  FaMobileAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer px-4 w-full bg-blue-900 pt-[25px] text-gray-200">
      <div className="max-w-[1380px] mx-auto  pt-[40px] md:h-[300px] min-h-[300px]  text-xl border-t-[3px] border-orange-900 flex flex-col justify-between">
        <div className="flex flex-col items-center md:flex-row justify-end gap-[25px]">
          <div className="max-w-[70%] text-start md:max-w-auto ">
            <span className="tasty text-[25px] mr-4">
              <Link to="/">Tasty</Link>
            </span>
            lore loremlorem loreml oremlol loremlorem loremlorem loremlorem
            lorem lorem loremlorem loremloreml loremloreml loremloreml loremlorem loremloreml loremloreml loremloreml
          </div>

          <div className="min-w-[15%] text-center">
            <div>
              <ul>
                <li className="hover:ml-[5px] duration-500 my-[7px]">
                  <Link to="/food">Food</Link>
                </li>
                <li className="hover:ml-[5px] duration-500 my-[7px]">
                  <Link to="/drinks">Drinks</Link>
                </li>
                <li className="hover:ml-[5px] duration-500 my-[7px]">
                  <Link to="/vegan">Vegan Food</Link>
                </li>
                <li className="hover:ml-[5px] duration-500 my-[7px]">
                  <Link to="/sweet">Sweet</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="min-w-[25%]">
            <div className="flex items-center gap-3 md:justify-center">
              <span>
                <FaPeriscope className="text-green-800" />
              </span>
              <span>Latakia</span>
            </div>
            <div className="flex items-center gap-3 md:justify-center ">
              <span>
                <SiGmail className="text-orange-600" />
              </span>
              <span>wasimdaoud05@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 md:justify-center">
              <span>
                <FaMobileAlt className="text-gray-400" />
              </span>
              <span>099551038</span>
            </div>
          </div>

          <div className="min-w-[25%]">
            <div className="flex items-center gap-3 md:justify-end">
              <span>
                <Link to="/">
                  <FaFacebookSquare className="text-blue-800" />
                </Link>
              </span>
              <span>***************</span>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <span>
                <Link to="/">
                  <FaYoutube className="text-red-800" />
                </Link>
              </span>
              <span>***************</span>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <span>
                <Link to="/">
                  <FaTwitter className="text-blue-300" />
                </Link>
              </span>
              <span>***************</span>
            </div>
          </div>
        </div>

        <h1 className="text-center text-white mt-[30px]  mb-2">
          copyright copyright copyright copyright copyright
        </h1>
      </div>
    </div>
  );
};

export default Footer;
