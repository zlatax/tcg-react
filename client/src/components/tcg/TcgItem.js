import React from 'react';
import {classes} from "./TcgItem.module.css";

import Card from "../ui/Card";

function TcgItem(props) {
    return <Card>
        <div className={classes.image}>
            <img src ={props.img} alt={props.title}/>        
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        {/* Add button here later */}
    </Card>
}

export default TcgItem;

