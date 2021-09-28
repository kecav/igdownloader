import { useState } from "react";
import "./Styles/reel.css";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./Header/SearchForm";
import LoadedReels from "./LoadedResponses/LoadedReels";

const Reels = (props) => {
    const [reelUrl, setReelUrl] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [responseObj, setResponseObj] = useState();

    function getId(url) {
        return url.slice(31, 42);
    }

    function onChangehandler(e) {
        setReelUrl(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        if (reelUrl.length === 0) {
            alert("Empty Reel link !");
            return;
        }
        setIsLoading(true);
        fetchReel();
    }

    async function fetchReel() {
        const reelId = getId(reelUrl);
        if (reelId.length !== 11) {
            alert("Invaid Reel URL");
            setIsLoading(false);
            return;
        }
        const response = await fetch(
            `${process.env.REACT_APP_IG_REEL}${reelId}`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key": `${process.env.REACT_APP_KEY}`,
                    "x-rapidapi-host": `${process.env.REACT_APP_HOST}`,
                },
            }
        );
        const data = await response.json();
        setResponseObj(data[0]);
        setIsLoading(false);
        setHasLoaded(true);
    }

    return (
        <section id="reel-section">
            <SearchForm
                submitHandler={submitHandler}
                onChangehandler={onChangehandler}
                placeholder="Enter Reel link"
            />

            <div className="reel-response">
                {isLoading && <LoadingAnimation />}
                {hasLoaded && <LoadedReels responseObj={responseObj} />}
            </div>
        </section>
    );
};

export default Reels;
