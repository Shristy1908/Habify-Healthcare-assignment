import style from "./Footer.module.css";
import img from "./EFA_Registered Logo.png";
import { FaFacebook, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { BsCloudFill } from "react-icons/bs";
import {BiWifi} from "react-icons/bi"


function Footer(){
    return (
      <div className={style.container}>
        <div className={style.footer}>
          <img src={img} alt="logo" style={{ width: "8rem", height: "3rem" }} />
          <ul>
            <li>Support</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>The Team</li>
          </ul>
        </div>
        <hr />
        <div className={style.subfooter}>
          <div className={style.text}>
            <ul>
              <li>2023 Emotional First Aid Academy</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Send Feedback</li>
            </ul>
          </div>
          <div className={style.icons}>
            <FaFacebook />
            &nbsp;&nbsp;
            <FaTwitter />
            &nbsp;&nbsp;
            <FaGooglePlusG />
            &nbsp;&nbsp;
            <BsCloudFill />
            &nbsp;&nbsp;
            <BiWifi />
          </div>
        </div>
      </div>
    );
}

export default Footer 