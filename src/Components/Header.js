import { FaSearch } from "react-icons/fa";
import { BiMenu, BiBell } from "react-icons/bi";
import img from "./EFA_Registered Logo.png";
import style from "./Header.module.css";
import Body from "./Body";
import Footer from "./Footer";

function Header() {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <img src={img} alt="logo" style={{ width: "8rem", height: "3rem" }} />
          <div className={style.input}>
            <FaSearch className={style.searchIcon} />
            <input placeholder="Search all forums" />
          </div>
          <div className={style.dropdown}>
            <select className={style.dropdown}>
              <option>Topics</option>
            </select>
          </div>
          <p>Latest Topics</p>
          <div className={style.menu}>
            <BiMenu />
          </div>
          <div className={style.bell}>
            <BiBell />
          </div>
          <div className={style.loginName}>
            <span>A</span>
            <select className={style.dropdown} style={{ color: "gray" }}>
              <option>azyrusmax</option>
            </select>
          </div>
        </div>
      </div>
      <Body />
      <Footer/>
    </>
  );
}

export default Header;
