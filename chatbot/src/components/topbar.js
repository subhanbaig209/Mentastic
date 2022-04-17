import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai"
import styles from "../css/topBar.module.css"
import { CgProfile } from "react-icons/cg"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


let TopBar = ({handleLogout}) => {
    const items = [
        {
          id: 0,
          name: 'resources'
        },
        {
          id: 1,
          name: 'chat'
        },
        {
          id: 2,
          name: 'schedule appointment'
        },
        {
          id: 3,
          name: 'progress'
        },
        {
          id: 4,
          name: 'settings'
        },
        {
            id: 5,
            name: 'Counseling'
          },
          {
            id: 6,
            name: 'Mental Health America'
          },
          {
            id: 7,
            name: 'Freedom From Fear'
          },
          {
            id: 8,
            name: 'Talk to somebody'
          },

      ]
      const handleOnSearch = (string, results) => {
        console.log(string, results);
      };
    
      const handleOnHover = (result) => {
        console.log(result);
      };
    
      const handleOnSelect = (item) => {
        console.log(item);
      };
    
      const handleOnFocus = () => {
        console.log("Focused");
      };
    
      const handleOnClear = () => {
        console.log("Cleared");
      };
    
      const formatResult = (item) => {
        console.log(item);
        return (
          <div className="result-wrapper">
            <span className="result-span">id: {item.id}</span>
            <span className="result-span">name: {item.name}</span>
          </div>
        );
      };
    
    return (
        <>
        <div className={styles.topBar}>
            <div className={styles.search}>
                <h1 className={styles.companyName}>Mentastic</h1>
                <div className={styles.searchBox}>
                <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            autoFocus
          />
          </div>
            </div>
            <div className={styles.icon}>
                <CgProfile style = {{
                    cursor: "pointer"
                }} onClick = {handleLogout} size = "40px"
                
                />
            </div>
        </div>
        </>

    );

}

export default TopBar;