import style from "./TableData.module.css";
import { BsPinFill, BsDot } from "react-icons/bs";
import {GoDotFill} from "react-icons/go"

function TableData(){
    return (
      <>
        <div className={style.container}>
          <table id="table">
            <tr>
              <td style={{ width: "80rem" }}>Topics</td>
              <td style={{ width: "15rem" }}>Category</td>
              <td style={{ width: "15rem" }}>Users</td>
              <td style={{ width: "15rem" }}>Replies</td>
              <td style={{ width: "15rem" }}>Views</td>
              <td style={{ width: "15rem" }}>Activity</td>
            </tr>
            <tbody>
              <tr style={{ backgroundColor: "#f0b1b9" }}>
                <td>
                  <h3>
                    <span className={style.pin}>
                      <BsPinFill />
                    </span>
                    Welcome Enablers! Please read this before posting!
                  </h3>
                  <p>
                    Before you make a new topic or post, please read community
                    guidelines.
                    <br />
                    We aim to be the friendliest community for online mental
                    health support.
                  </p>
                </td>
                <td></td>
                <td>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#14593b" }}
                  >
                    B
                  </span>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#2a2b2b" }}
                  >
                    K
                  </span>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#9e6c62" }}
                  >
                    O
                  </span>
                </td>
                <td>
                  <p>66</p>
                </td>
                <td>
                  <p>15.1k</p>
                </td>
                <td>
                  <p>11d</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Current news and discussion</h4>
                </td>
                <td>
                  <span className={style.category} style={{color:"pink"}}>
                    <GoDotFill />
                  </span>
                  Mental health
                </td>
                <td>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#800b1f" }}
                  >
                    A
                  </span>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#8c8788" }}
                  >
                    G
                  </span>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#27382c" }}
                  >
                    P
                  </span>
                </td>
                <td>
                  <p>66</p>
                </td>
                <td>
                  <p>15.1k</p>
                </td>
                <td>
                  <p>11d</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Non-Urgent Emotional Help</h4>
                  <div className={style.btns}>
                    <span
                      style={{ backgroundColor: "#345c85" }}
                      className={style.btn1}
                    >
                      mentalhealth
                    </span>
                    &nbsp;&nbsp;
                    <span
                      style={{ backgroundColor: "#c41227" }}
                      className={style.btn1}
                    >
                      enabler
                    </span>
                  </div>
                </td>
                <td>
                  <span className={style.category} style={{color:"gray"}}>
                    <GoDotFill />
                  </span>
                  Video
                </td>
                <td>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#315750" }}
                  >
                    L
                  </span>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#40314f" }}
                  >
                    T
                  </span>
                </td>
                <td>
                  <p>252</p>
                </td>
                <td>
                  <p>396</p>
                </td>
                <td>
                  <p>30m</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Other Ways of Getting Help</h4>
                </td>
                <td>
                  <span className={style.category} style={{ color: "blue" }}>
                    <GoDotFill />
                  </span>
                  Mind
                </td>
                <td>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#4a2521" }}
                  >
                    E
                  </span>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#345c85" }}
                  >
                    I
                  </span>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#592f3e" }}
                  >
                    R
                  </span>
                </td>
                <td>
                  <p>207</p>
                </td>
                <td>
                  <p>7.5k</p>
                </td>
                <td>
                  <p>41m</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>How to help a person who self-harms!</h4>
                </td>
                <td>
                  <span className={style.category} style={{color:"royalblue"}}>
                    <GoDotFill />
                  </span>
                  Q&A
                </td>
                <td>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#a62648" }}
                  >
                    F
                  </span>
                </td>
                <td>
                  <p>2.3k</p>
                </td>
                <td>
                  <p>2.0k</p>
                </td>
                <td>
                  <p>1h</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Feeling overwhelmed</h4>
                  <div className={style.btns}>
                    <span
                      style={{ backgroundColor: "#e80984" }}
                      className={style.btn1}
                    >
                      hope
                    </span>
                    &nbsp;&nbsp;
                    <span
                      style={{ backgroundColor: "#0ccc3f" }}
                      className={style.btn1}
                    >
                      help
                    </span>
                  </div>
                </td>
                <td>
                  <span className={style.category} style={{color:"yellow"}}>
                    <GoDotFill />
                  </span>
                  Hope
                </td>
                <td>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#338061" }}
                  >
                    C
                  </span>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#9d93bf" }}
                  >
                    U
                  </span>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#806a33" }}
                  >
                    I
                  </span>
                </td>
                <td>
                  <p>2.3k</p>
                </td>
                <td>
                  <p>2.0k</p>
                </td>
                <td>
                  <p>1h</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>What's everyone listening?</h4>
                </td>
                <td>
                  <span className={style.category} style={{color:"red"}}>
                    <GoDotFill />
                  </span>
                  Random
                </td>
                <td>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#4a2521" }}
                  >
                    B
                  </span>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#345c85" }}
                  >
                    M
                  </span>
                  <span
                    className={style.users}
                    style={{ backgroundColor: "#592f3e" }}
                  >
                    J
                  </span>
                </td>
                <td>
                  <p>305</p>
                </td>
                <td>
                  <p>2.1k</p>
                </td>
                <td>
                  <p>6h</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}
export default TableData