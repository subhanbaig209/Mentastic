import React from "react";
import {AiOutlineHome} from "react-icons/ai"
import {BsFillChatSquareDotsFill} from "react-icons/bs"
import {AiFillSetting} from "react-icons/ai"
import styles from "../css/sidebar.module.css";

let SideBarNav = () => {
    let size = "40px";
    let color = "white";
    return(
        <div className={styles.sidebar}>
            <div className={styles.icon}>
                <AiOutlineHome color={color} size={size}/>
            </div>
            <div className={styles.icon}>
                <BsFillChatSquareDotsFill color={color} size={size}/>
            </div>
            <div className={styles.icon}>
                <AiFillSetting color={color} size={size}/>
            </div>
        </div>
    );
}

export default SideBarNav;