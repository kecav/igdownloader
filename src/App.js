import { useState } from "react";

import Profile from "./components/Profile";
import Story from "./components/Story";
import Reels from "./components/Reels";
import Post from "./components/Post";

import ProfileIco from './Media/profile-icon.svg';
import PostIco from './Media/post-icon.svg';
import ReelIco from './Media/reel-icon.svg';
import StoryIco from './Media/story-icon.svg';
import Logo from './Media/instagram-logo1.png';

import './App.css';
import './components/Styles/commonStyles.css';

function App() {
    // Display States for each section 
    const [displayStateProfile, setDisplayStateProfile] = useState("flex");
    const [displayStateStory, setDisplayStateStory] = useState("none");
    const [displayStateReel, setDisplayStateReel] = useState("none");
    const [displayStatePost, setDisplayStatePost] = useState("none");

    const displayHandlerProfile = (e) => {
        console.log(e.target.value);
        displayStateProfile === "none" ? setDisplayStateProfile("flex") : setDisplayStateProfile("auto")
        setDisplayStateStory("none");
        setDisplayStateReel("none");
        setDisplayStatePost("none");
    }
    const displayHandlerStory = (e) => {
        console.log(e.target.value);
        displayStateStory === "none" ? setDisplayStateStory("flex") : setDisplayStateStory("auto")
        setDisplayStateProfile("none");
        setDisplayStateReel("none");
        setDisplayStatePost("none");
    }
    const displayHandlerReel = (e) => {
        console.log(e.target.value);
        displayStateReel === "none" ? setDisplayStateReel("flex") : setDisplayStateReel("auto")
        setDisplayStateProfile("none");
        setDisplayStateStory("none");
        setDisplayStatePost("none");
    }
    const displayHandlerPost = (e) => {
        console.log(e.target.value);
        displayStatePost === "none" ? setDisplayStatePost("flex") : setDisplayStatePost("auto")
        setDisplayStateProfile("none");
        setDisplayStateReel("none");
        setDisplayStateStory("none");
    }

    return ( <
        >
        <
        header className = "main-header" >
        <
        article className = "web-header" >
        <
        logo className = "section" >
        <
        img src = { Logo }
        alt = "Web App Logo"
        className = "logo" / >
        <
        /logo> <
        h1 className = "web-name" > Instagram Downloader < /h1> < /
        article > <
        nav className = "nav-section" >
        <
        ul className = "selection-menu" >
        <
        li >
        <
        button value = "Profile"
        className = "nav-buttons"
        onClick = { displayHandlerProfile }
        id = "profileBtn" >
        <
        img src = { ProfileIco }
        className = "nav-icons"
        alt = "search profile" / >
        <
        p > Profile < /p> < /
        button > <
        /li> <
        li >
        <
        button value = "Story"
        className = "nav-buttons"
        onClick = { displayHandlerStory }
        id = "storyBtn" >
        <
        img src = { StoryIco }
        className = "nav-icons"
        alt = "search Story" / >
        <
        p > Story < /p> < /
        button > <
        /li> <
        li >
        <
        button value = "Reel"
        className = "nav-buttons"
        onClick = { displayHandlerReel }
        id = "reelBtn" >
        <
        img src = { ReelIco }
        className = "nav-icons"
        alt = "search Reel" / >
        <
        p > Reel < /p> < /
        button > <
        /li> <
        li >
        <
        button value = "Post"
        className = "nav-buttons"
        onClick = { displayHandlerPost }
        id = "postBtn" >
        <
        img src = { PostIco }
        className = "nav-icons"
        alt = "search Post" / >
        <
        p > Post < /p> < /
        button > <
        /li> < /
        ul > <
        /nav> < /
        header > <
        main >
        <
        Profile display = { displayStateProfile }
        /> <
        Story display = { displayStateStory }
        /> <
        Post display = { displayStatePost }
        /> <
        Reels display = { displayStateReel }
        /> < /
        main > <
        footer className = "footer-wrapper" >
        <
        div className = "dev-intro" > { /* <p>Made by Keshav</p> */ } <
        /div> < /
        footer > <
        />
    );
}

export default App;