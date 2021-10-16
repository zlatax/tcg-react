import React from 'react';

const styles = require('./ComingSoon.module.css');

function ComingSoonMessage(props) {
    const defaultMsg = "Something exciting coming soon..."

    let content;

    if (props.additional) {
        content = <p>{props.additional}</p>
    }
    
    return <div className={styles.msg}>
        <h2>{defaultMsg}</h2>
        {content}
    </div>
}

export default ComingSoonMessage;