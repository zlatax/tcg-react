import { React,useRef } from "react";
import ImageUploader from "../ImageUpload/ImageUploader";

import Card from "../ui/Card";

import {classes} from "./NewTcgForm.module.css";

export default function NewTcgForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler() {
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const new_tcg = {
            title: enteredTitle,
            image: enteredImage,
            description: enteredDescription,
        }

        props.onAddNewTCG(new_tcg);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="desc">Description</label>
                <textarea id="desc" required rows='5' ref={descriptionInputRef}/>
            </div>
            <div className={classes.control}>
                <ImageUploader ref={imageInputRef}/>
            </div>
            <div>
                <button className={classes.actions}>Add new TCG (Incurs Gas Fees!))</button>
            </div>        
        </form>
    </Card>
}