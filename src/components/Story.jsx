import { useState } from "react";
import './Styles/story.css';
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./Header/SearchForm";
import LoadedStory from "./LoadedResponses/LoadedStory";

const Story = (props) => {
    const [userId, setUserId] = useState("");
    const [responseObj, setResponseObj] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    // const [storyArray, setStoryArray] = useState([]);
    
    function submitHandler(e) {
        e.preventDefault();
        if(userId.length === 0){
            alert("Empty Username !");
            return;
        }
        setIsLoading(true);
        fetchProfile();
    }

    function onChangehandler(e) {
        setUserId(e.target.value);
    }

    async function fetchProfile() {
        const id = userId;
        const response = await fetch(
            `${process.env.REACT_APP_IG_STORY}${id}`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        `${process.env.REACT_APP_KEY}`,
                    "x-rapidapi-host":
                        `${process.env.REACT_APP_HOST}`,
                },
            }
        );
        const data = await response.json();
        setResponseObj(data[0]);
        setIsLoading(false);
        setHasLoaded(true);
    }

    return (
        <section id="story-section">
            <SearchForm submitHandler={submitHandler} onChangehandler={onChangehandler} placeholder="Enter Username"/>

            <main className="story-response">
                {isLoading && <LoadingAnimation />}
                {hasLoaded && <LoadedStory responseObj={responseObj} />}
            </main>
        </section>
    );
}

export default Story;