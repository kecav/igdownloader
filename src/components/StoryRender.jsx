// import { useState } from "react";
const StoryRender = (props) => {
    let array = props.storyArray;

    return (
        <>
            {array.map(element => {
                // console.log(element.image_versions2.candidates[0].url);
                return (<img src={element.image_versions2.candidates[0].url} alt="" />)
            })}
        </>
    );
}

export default StoryRender;