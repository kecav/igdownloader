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
            `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id?shortcode=${igtvId}&response_type=feeds&corsEnabled=true`,
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
        console.log(response, data);

        setResponseObj(data[0].items[0]);
        setHasLoaded(true);
        setIsLoading(false);
    }

    return (
        <section id="post-section" style={{ display: props.display }}>
            
            <SearchForm submitHandler={submitHandler} onChangehandler={onChangehandler} placeholder="Enter IGTV link"/>

            <div className="post-response">
                {isLoading && <LoadingAnimation />}
                {hasLoaded && <LoadedIgtv responseObj={responseObj}/>}
            </div>
        </section>
    );
};

export default Igtv;
