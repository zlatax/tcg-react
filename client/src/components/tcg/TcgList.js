import React from 'react';

import TcgItem from './TcgItem';
import {classes} from "./TcgList.module.css";

function TcgList(props) {
    return <ul className={classes.list}>
        {props.mytcgs.map(()=>{
            return <TcgItem
                    key={props.title}
                    title={props.title}
                    desc={props.desc}
                    image={props.image}/>
        })}
    </ul>
}

export default TcgList;