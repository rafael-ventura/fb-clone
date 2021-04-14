import { FaFacebook, FaSearch, FaAlignJustify } from "react-icons/fa";
import { AiFillHome, AiOutlineShop } from "react-icons/ai";
import { RiFlag2Line } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";

export default function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <div className="logo-fb">
          <FaFacebook />
        </div>
        <div className="search-fb">
          <FaSearch />
        </div>
        <div className="home-fb">
          <AiFillHome />
        </div>
        <div className="flag-fb">
          <RiFlag2Line />
        </div>
        <div className="live-fb">
          <MdOndemandVideo />
        </div>
        <div className="shop-fb">
          <AiOutlineShop />
        </div>
        <div className="menu-fb">
          <FaAlignJustify />
        </div>
      </div>
      <div className="headerRight">
        <div className="plus-btn">+</div>
      </div>
    </div>
  );
}
