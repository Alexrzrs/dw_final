import React from "react";
import coverImage from "@assets/rickandmortyline.png";
import "@styles/SubHeading.scss";

function SubHeading({ title }) {
    return (
        <div className="app__subheading__wrapper">
            <p className="p__cormorant">{title}</p>
            <img src={coverImage} alt="coverImage" className="cover__img" />
        </div>
    );
}

export default SubHeading;
