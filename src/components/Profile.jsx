import { useState } from "react";
import "./Styles/profile.css";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./Header/SearchForm";
import LoadedProfile from "./LoadedResponses/LoadedProfile";

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
            `${process.env.REACT_APP_IG_PROFILE}${id}`,
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
        try {
            setResponseObj(data[0]);
        } catch (error) {
            console.log(error.message);
        }
        setIsLoading(false);
        setHasLoaded(true);
    }

    return (
        <section id="profile-section">
            <SearchForm submitHandler={submitHandler} onChangehandler={onChangehandler} placeholder="Enter Username"/>
            <main className="profile-response">
                {isLoading && <LoadingAnimation />}
                {hasLoaded && <LoadedProfile responseObj={responseObj}/>}
            </main >
        </section>
    );
};

export default Profile;
