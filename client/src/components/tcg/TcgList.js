import React from 'react';

import TcgItem from './TcgItem';

const styles = require("./TcgList.module.css");

function TcgList(props) {
    return <ul className={styles.list}>
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