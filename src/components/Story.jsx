import { useState } from "react";
// import StoryRender from "./StoryRender";
import './Styles/story.css';

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

    let errorText = "";
    if(responseObj.is_private){
        errorText = "This account is private !";
    } else if(storyArray.length === 0){
        errorText = "No stories posted!";
    } 
    // else {
    //     errorText = `${storyArray.length} stories found !`;
    // }

    return (
        <section id="story-section" style={{display:props.display}}>
            <form action="" className="input-form" onSubmit={submitHandler}>
                <input
                    type="text"
                    className="inputBox"
                    onChange={onChangehandler}
                    placeholder="Enter user ID to get story"
                />
                <input type="submit" className="submitBtn" value="Search" />
            </form>

            <main className="story-response">
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
                        <header className="user-info">
                            <img src={responseObj.profile_pic_url} className="profile-picture" alt="Profile" />
                            <div className="right-section">
                                <h3>{responseObj.username}</h3>
                                <p>{responseObj.full_name}</p>
                            </div>
                        </header>
                        <section className="story-list">
                            {/* <h3>{errorText}</h3> */}
                            {storyArray.map((element, index) => {
                                
                                if(element.media_type === 2){
                                    return (
                                        <video className="story-item" key={index} controls>
                                            <source src={element.video_versions[0].url} className="story-media" type="video/webm"></source>
                                        </video>
                                    );
                                } else {
                                    return(
                                        <div className="story-item" key={index} >
                                            <img src={element.image_versions2.candidates[0].url} className="story-media" alt="" />
                                        </div>
                                    )
                                }
                            })}
                        </section>
                    </>
                }
            </main>
        </section>
    );
}

export default Story;