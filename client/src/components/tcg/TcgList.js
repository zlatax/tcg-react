import React from 'react';

import TcgItem from './TcgItem';
import {classes} from "./TcgList.module.css";

function TcgList(props) {
    return <ul className={classes.list}>
        {props.mytcgs.map(()=>{
            return <TcgItem
                    key={props.id}
                    title={props.title}
                    image={props.image}
                    desc={props.desc}/>
        })}
    </ul>
}

export default TcgList;