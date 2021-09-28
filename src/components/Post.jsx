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
            `${process.env.REACT_APP_IG_POST}${postId}`,
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
        <section id="post-section">
            
            <SearchForm submitHandler={submitHandler} onChangehandler={onChangehandler} placeholder="Enter post link"/>

            <div className="post-response">
                {isLoading && <LoadingAnimation />}
                {hasLoaded && <LoadedPost responseObj={responseObj}/>}
            </div>
        </section>
    );
};

export default Post;
