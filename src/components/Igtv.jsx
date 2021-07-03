import { useState } from "react";
import "./Styles/post.css";

const Igtv = (props) => {
    const [igtvUrl, setIgtvUrl] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [responseObj, setResponseObj] = useState();

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
        // if(postId!== 11){
        //     alert("Invalid Url");
        //     setIsLoading(false);
        //     return;
        // }
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
        setResponseObj(data[0].items[0]);
        setIsLoading(false);
        setHasLoaded(true);
    }

    return (
        <section id="post-section" style={{ display: props.display }}>
            <form action="" className="input-form" onSubmit={submitHandler}>
                <input
                    type="text"
                    className="inputBox"
                    onChange={onChangehandler}
                    placeholder="Enter IGTV link"
                />
                <input type="submit" className="submitBtn" value="Search" />
            </form>

            <div className="post-response">
                {isLoading && (
                    <div className="animatedSVG">
                        <div className="loadingio-spinner-dual-ball-kfd7e8c7gtd">
                            <div className="ldio-0pfsdbxc70ja">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                )}
                {hasLoaded && (
                    <>
                        <header className="reel-header">
                            <div className="reel-creator">
                                <img
                                    src={responseObj.user.profile_pic_url}
                                    className="profile-picture"
                                    alt="profile"
                                />
                                <div className="creator-info">
                                    <h3>{responseObj.user.username}</h3>
                                    <p>{responseObj.user.full_name}</p>
                                </div>
                            </div>
                            <a
                                href={`https://instagram.com/${responseObj.user.username}`}
                                className="instagram-anchor"
                            >
                                Visit Instagram
                            </a>
                        </header>

                        <article className="post-section">
                            {responseObj.media_type === 2 && (
                                <video className="post-media" controls>
                                    <source
                                        src={responseObj.video_versions[0].url}
                                        type="video/webm"
                                    ></source>
                                </video>
                            )}
                            {responseObj.media_type === 1 && (
                                <img
                                    src={
                                        responseObj.image_versions2
                                            .candidates[0].url
                                    }
                                    className="post-media"
                                    alt=""
                                />
                            )}
                        </article>
                        <p className="post-caption">
                            {responseObj.caption.text}
                        </p>
                    </>
                )}
            </div>
        </section>
    );
};

export default Igtv;
