import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai"
import styles from "../css/topBar.module.css"
import { CgProfile } from "react-icons/cg"

let TopBar = () => {
    return (
        <>
        <div className={styles.topBar}>
            <div className={styles.search}>
                <h1 className={styles.companyName}>Mentastic</h1>
                <input placeholder="Search" className={styles.searchBox} type="text"></input>
            </div>
            <div className={styles.icon}>
                <CgProfile size = "40px"/>
            </div>
        </div>
        </>

    );

}

export default TopBar;