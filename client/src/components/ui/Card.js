import classes from "./Card.module.css";

function Card(props) {
    return <div className={classes.card}>
        {/* Children holds the content between tags */}
        {props.children}
    </div>
}

export default Card; 