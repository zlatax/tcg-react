import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

import React from 'react';

function Layout(props) {
    return <div>
        <MainNavigation/>
        <main className={classes.main}>{props.children}</main>
    </div>
}

export default Layout;