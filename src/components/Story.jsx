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
    const [storyArray, setStoryArray] = useState([]);
    
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
            `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile?ig=${id}&response_type=story&corsEnabled=true`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "1f036ab3bdmsha432bc3323a6641p1a4a6cjsn47c217d23a5d",
                    "x-rapidapi-host":
                        "instagram-bulk-profile-scrapper.p.rapidapi.com",
                },
            }
        );
        const data = await response.json();
        console.log(data);
        setResponseObj(data[0]);
        setStoryArray(data[0].story.data);
        setIsLoading(false);
        setHasLoaded(true);
    }

    return (
        <section id="story-section" style={{display:props.display}}>
            <SearchForm submitHandler={submitHandler} onChangehandler={onChangehandler} placeholder="Enter Username"/>

            <main className="story-response">
                {isLoading && <LoadingAnimation />}
                {hasLoaded && <LoadedStory responseObj={responseObj} storyArray={storyArray}/>}
            </main>
        </section>
    );
}

export default Story;