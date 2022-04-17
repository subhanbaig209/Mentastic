import React from "react";
import {AiOutlineHome} from "react-icons/ai"
import {BsFillChatSquareDotsFill} from "react-icons/bs"
import {AiFillSetting} from "react-icons/ai"
import {GoGraph} from "react-icons/go"
import styles from "../css/sidebar.module.css";
import Logo from "../assets/Logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


let SideBarNav = () => {
    
    let size = "30px";
    let color = "#152238";
    return(
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img className={styles.logoImg} src={Logo}/>
            </div>

            <div className={styles.iconContainer}>
                <div className={styles.icon}>
                    <AiOutlineHome color={color} size={size}/>
                </div>
                <div className={styles.icon}>
                    <BsFillChatSquareDotsFill color={color} size={size}/>
                </div>
                <div className={styles.icon}>
                    <GoGraph  color={color} size={size}/>
                </div>
                <div className={styles.icon}>
                    <AiFillSetting color={color} size={size}/>
                </div>
            </div>
        </div>
    );
}

export default SideBarNav;