import style from "./Body.module.css";
import TableData from "./TableData";

function Body(){
   return (
     <div className={style.container}>
       <div className={style.main}>
         <div className={style.subheading}>
           <select className={style.dropdown}>
             <option>All Categories</option>
           </select>
           <select className={style.dropdown}>
             <option>Tags</option>
           </select>
           <ul className={style.lists}>
             <li>Latest</li>
             <li>Unread</li>
             <li>Rising</li>
             <li>Most liked</li>
             <li>Follow Feed</li>
           </ul>
         </div>
         <hr style={{ color: " rgb(202, 202, 202)" }} />
         <TableData/>
       </div>
     </div>
   );
}
export default Body