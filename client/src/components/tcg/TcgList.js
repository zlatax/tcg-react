import React from 'react';

import TcgItem from './TcgItem';
import {classes} from "./TcgList.module.css";

function TcgList(props) {
    return <ul className={classes.list}>
        {props.mytcgs.map((tcg)=>{
            return <TcgItem
                    key={tcg.title}
                    title={tcg.title}
                    image={tcg.image}
                    desc={tcg.desc}/>
        })}
    </ul>
}

export default TcgList;