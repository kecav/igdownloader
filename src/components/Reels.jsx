import { useState } from "react";
import './Styles/reel.css';

const Reels = (props) => {
    const [reelUrl, setReelUrl] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [responseObj, setResponseObj] = useState();

    function getId(url){
        return(url.slice(31, 42));
    }

    function onChangehandler(e) {
        setReelUrl(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        if(reelUrl.length === 0){
            alert("Empty Reel link !");
            return;
        }
        setIsLoading(true);
        fetchReel();
    }

    async function fetchReel() {
        const reelId = getId(reelUrl);
        if(reelId.length!== 11){
            alert("Invaid Reel URL");
            setIsLoading(false);
            return;
        }
        const response = await fetch(`https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id?shortcode=${reelId}&response_type=reels&corsEnabled=true`,
            {   method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "1f036ab3bdmsha432bc3323a6641p1a4a6cjsn47c217d23a5d",
                    "x-rapidapi-host":
                        "instagram-bulk-profile-scrapper.p.rapidapi.com",
                },
            });
        const data = await response.json();
        setResponseObj(data[0].items[0]);
        setIsLoading(false);
        setHasLoaded(true);
    }

    return(
        <section id="reel-section" style={{display:props.display}}>
            <form action="" className="input-form" onSubmit={submitHandler}>
                <input
                    type="text"
                    className="inputBox"
                    onChange={onChangehandler}
                    placeholder="Enter reel link"
                />
                <input type="submit" className="submitBtn" value="Search" /> 
            </form>

            <div className="reel-response">
                {isLoading &&
                    <div className="animatedSVG">
                        <div className="loadingio-spinner-dual-ball-kfd7e8c7gtd">
                            <div className="ldio-0pfsdbxc70ja">
                                <div></div>
                                <div></div>
                                <div></div>
                        </div></div>
                    </div>
                }
                {hasLoaded && 
                    <>
                        {/* {console.log(responseObj)} */}
                        <header className="reel-header">
                            <div className="reel-creator">
                                <img src={responseObj.user.profile_pic_url} className="profile-picture" alt="profile" />
                                <div className="creator-info">
                                    <h3>{responseObj.user.username}</h3>
                                    <p>{responseObj.user.full_name}</p>
                                </div>
                            </div>
                            <a href={`https://instagram.com/${responseObj.user.username}`} className="instagram-anchor">Visit Instagram</a>
                        </header>
                        <video controls className="reel-video">
                            <source src={responseObj.video_versions[0].url} type="video/webm"></source>
                        </video>
                        <p class="reel-caption">{responseObj.caption.text}</p>
                    </> 
                }
            </div>
        </section>
    );
};

export default Reels;
