import { useState } from "react";
import "./Styles/post.css";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./Header/SearchForm";
import LoadedIgtv from "./LoadedResponses/LoadedIgtv";

const Igtv = (props) => {
    const [igtvUrl, setIgtvUrl] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [responseObj, setResponseObj] = useState();
    // const [error, setError] = useState(false);
    function getId(url) {
        return url.slice(29, 40);
    }

    function onChangehandler(e) {
        setIgtvUrl(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        if (igtvUrl.length === 0) {
            alert("Empty Post link !");
            return;
        }
        setIsLoading(true);
        fetchPost();
    }

    async function fetchPost() {
        const igtvId = getId(igtvUrl);

        const response = await fetch(
            `${process.env.REACT_APP_IG_IGTV}${igtvId}`,
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
        setHasLoaded(true);
        setIsLoading(false);
    }

    return (
        <section id="post-section">
            
            <SearchForm submitHandler={submitHandler} onChangehandler={onChangehandler} placeholder="Enter IGTV link"/>

            <div className="post-response">
                {isLoading && <LoadingAnimation />}
                {hasLoaded && <LoadedIgtv responseObj={responseObj}/>}
            </div>
        </section>
    );
};

export default Igtv;
