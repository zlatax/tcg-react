import React from 'react';

import Card from "../ui/Card";

const styles = require("./TcgItem.module.css");

function TcgItem(props) {
    return <Card>
        <div className={styles.image}>
            <img src ={props.image} alt={props.title}/>        
        </div>
        <div className={styles.content}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
        {/* Add button here later */}
    </Card>
}

export default TcgItem;

