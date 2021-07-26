import { useState } from "react";
import "./Styles/post.css";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./Header/SearchForm";
import LoadedPost from "./LoadedResponses/LoadedPost";

const Post = (props) => {
    const [postUrl, setPostUrl] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [responseObj, setResponseObj] = useState();

    function getId(url) {
        return url.slice(28, 39);
    }

    function onChangehandler(e) {
        setPostUrl(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        if (postUrl.length === 0) {
            alert("Empty Post link !");
            return;
        }
        setIsLoading(true);
        fetchPost();
    }
    
    async function fetchPost() {
        const postId = getId(postUrl);
        const response = await fetch(
            `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id?shortcode=${postId}&response_type=feeds&corsEnabled=true`,
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
        setResponseObj(data[0].items[0]);
        setIsLoading(false);
        setHasLoaded(true);
    }

    return (
        <section id="post-section" style={{ display: props.display }}>
            
            <SearchForm submitHandler={submitHandler} onChangehandler={onChangehandler} placeholder="Enter post link"/>

            <div className="post-response">
                {isLoading && <LoadingAnimation />}
                {hasLoaded && <LoadedPost responseObj={responseObj}/>}
            </div>
        </section>
    );
};

export default Post;
