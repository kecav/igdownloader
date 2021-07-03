import { useState } from "react";

import Profile from "./components/Profile";
import Story from "./components/Story";
import Reels from "./components/Reels";
import Post from "./components/Post";
import Igtv from "./components/Igtv";

import ProfileIco from "./Media/profile-icon.svg";
import PostIco from "./Media/post-icon.svg";
import ReelIco from "./Media/reel-icon.svg";
import StoryIco from "./Media/story-icon.svg";
import IgtvIco from "./Media/igtv-icon.svg";
import MyLogo from "./Media/instagram-logo1.png";

import "./App.css";
import "./components/Styles/commonStyles.css";

function App() {
    // Display States for each section
    const [displayStateProfile, setDisplayStateProfile] = useState("flex");
    const [displayStateStory, setDisplayStateStory] = useState("none");
    const [displayStateReel, setDisplayStateReel] = useState("none");
    const [displayStatePost, setDisplayStatePost] = useState("none");
    const [displayStateIgtv, setDisplayStateIgtv] = useState("none");

    const displayHandlerProfile = (e) => {
        console.log(e.target.value);
        displayStateProfile === "none"
            ? setDisplayStateProfile("flex")
            : setDisplayStateProfile("auto");
        setDisplayStateStory("none");
        setDisplayStateReel("none");
        setDisplayStatePost("none");
        setDisplayStateIgtv("none");
    };
    const displayHandlerStory = (e) => {
        console.log(e.target.value);
        displayStateStory === "none"
            ? setDisplayStateStory("flex")
            : setDisplayStateStory("auto");
        setDisplayStateProfile("none");
        setDisplayStateReel("none");
        setDisplayStatePost("none");
        setDisplayStateIgtv("none");
    };
    const displayHandlerReel = (e) => {
        console.log(e.target.value);
        displayStateReel === "none"
            ? setDisplayStateReel("flex")
            : setDisplayStateReel("auto");
        setDisplayStateProfile("none");
        setDisplayStateStory("none");
        setDisplayStatePost("none");
        setDisplayStateIgtv("none");
    };
    const displayHandlerPost = (e) => {
        console.log(e.target.value);
        displayStatePost === "none"
            ? setDisplayStatePost("flex")
            : setDisplayStatePost("auto");
        setDisplayStateProfile("none");
        setDisplayStateReel("none");
        setDisplayStateStory("none");
        setDisplayStateIgtv("none");
    };
    const displayHandlerIgtv = (e) => {
        console.log(e.target.value);
        displayStateIgtv === "none"
            ? setDisplayStateIgtv("flex")
            : setDisplayStateIgtv("auto");
        setDisplayStateProfile("none");
        setDisplayStateReel("none");
        setDisplayStatePost("none");
        setDisplayStateStory("none");
    };

    return (
        <>
            <header className="main-header">
                <article className="web-header">
                    <logo className="section">
                        <img src={MyLogo} alt="Web App Logo" className="logo" />
                    </logo> 
                    <h1 className="web-name"> Instagram Downloader </h1> 
                </article> 
                <nav className="nav-section">
                    <ul className="selection-menu">
                        <li>
                            <button
                                value="Profile"
                                className="nav-buttons"
                                onClick={displayHandlerProfile}
                                id="profileBtn"
                            >
                                <img
                                    src={ProfileIco}
                                    className="nav-icons"
                                    alt="search profile"
                                />
                                <p> Profile </p> 
                            </button> 
                        </li> 
                        <li>
                            <button
                                value="Story"
                                className="nav-buttons"
                                onClick={displayHandlerStory}
                                id="storyBtn"
                            >
                                <img
                                    src={StoryIco}
                                    className="nav-icons"
                                    alt="search Story"
                                />
                                <p> Story </p> 
                            </button> 
                        </li> 
                        <li>
                            <button
                                value="Reel"
                                className="nav-buttons"
                                onClick={displayHandlerReel}
                                id="reelBtn"
                            >
                                <img
                                    src={ReelIco}
                                    className="nav-icons"
                                    alt="search Reel"
                                />
                                <p> Reel </p> 
                            </button> 
                        </li> 
                        <li>
                            <button
                                value="Post"
                                className="nav-buttons"
                                onClick={displayHandlerPost}
                                id="postBtn"
                            >
                                <img
                                    src={PostIco}
                                    className="nav-icons"
                                    alt="search Post"
                                />
                                <p> Post </p> 
                            </button> 
                        </li>
                        <li>
                            <button
                                value="Post"
                                className="nav-buttons"
                                onClick={displayHandlerIgtv}
                                id="postBtn"
                            >
                                <img
                                    src={IgtvIco}
                                    className="nav-icons"
                                    alt="search Igtv"
                                />
                                <p> Igtv </p> 
                            </button> 
                        </li>
                    </ul> 
                </nav> 
            </header> 
            <main>
                <Profile display={displayStateProfile} /> 
                <Story display={displayStateStory} /> 
                <Post display={displayStatePost} /> 
                <Reels display={displayStateReel} />  
                <Igtv display={displayStateIgtv} /> 
            </main> 
            <footer className="footer-wrapper">
                <div className="dev-intro"> {/* <p>Made by Keshav</p> */} </div> 
            </footer> 
        </>
    );
}

export default App;
