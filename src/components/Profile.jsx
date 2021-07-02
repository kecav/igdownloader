import { useState } from "react";
import "./Styles/profile.css";
// import loadingAnimation from '../Media/loadingSVG.svg';

const Profile = (props) => {
    const [userId, setUserId] = useState("");
    const [responseObj, setResponseObj] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

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
            `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/bulk_profile?response_type=short&ig=${id}&corsEnabled=true`,
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
        try {
            setResponseObj(data[0]);
        } catch (error) {
            console.log(error.message);
        }
        console.log(responseObj);
        setIsLoading(false);
        setHasLoaded(true);
    }

    return (
        <section id="profile-section" style={{display:props.display}}>
            <form action="" className="input-form" onSubmit={submitHandler}>
                <input
                    type="text"
                    className="inputBox"
                    onChange={onChangehandler}
                    placeholder="Enter user ID"
                />
                <input type="submit" className="submitBtn" value="Search" />
            </form>

            <main className="profile-response">
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
                {hasLoaded && (
                    <>
                        <article className="profile-description">
                            <div className="profile-header">
                                <img
                                    src={responseObj.hd_profile_pic_versions[0].url}
                                    className="profile-picture"
                                    alt="Profile"
                                />
                                <section className="profile-counts">
                                    <div className="media-count">
                                        <h3>{responseObj.media_count}</h3>
                                        <p>Posts</p>
                                    </div>
                                    <div className="follower-count">
                                        <h3>{responseObj.follower_count}</h3>
                                        <p>Followers</p>
                                    </div>
                                    <div className="following-count">
                                        <h3>{responseObj.following_count}</h3>
                                        <p>Followings</p>
                                    </div>
                                </section>
                            </div>
                        </article>
                        <section className="user-intro">
                            <h3 className="username">{responseObj.username}</h3>
                            <p className="fullname">{responseObj.full_name}</p>
                            <p className="bio">{responseObj.biography}</p>
                        </section>
                        <section className="profile-picture-container">
                            <img src={responseObj.hd_profile_pic_url_info.url} className="fullsize-profile-picture" alt="Fullsize" />
                        </section>
                    </>
                )}
            </main >
        </section>
    );
};

export default Profile;
