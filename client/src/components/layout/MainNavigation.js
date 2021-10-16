import {Link} from "react-router-dom";
import React  from 'react';

//import { useContext } from "react";
// import FavoritesContext from "../../store/favorites-context";

import classes from './MainNavigation.module.css';

function MainNavigation() {
    // const favCtx = useContext(FavoritesContext);

    return <header className={classes.header}>
        <div className={classes.logo}>TCG World Center</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Market</Link>
                </li>
                <li>
                    <Link to='/mytcgs'>My TCGs</Link>
                </li>
                <li>
                    <Link to='/createtcg'>Create New TCG</Link>
                </li>
                {/* <li>
                    <Link to='/favorites'>
                        Favorites
                        <span className={classes.badge}>{favCtx.totalFavorites}</span>
                        </Link>
                </li> */}
            </ul>
        </nav>
    </header>
}

export default MainNavigation;