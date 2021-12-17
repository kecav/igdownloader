import { NavLink } from "react-router-dom";

import ProfileIco from "../../Media/profile-icon.svg";
import PostIco from "../../Media/post-icon.svg";
import ReelIco from "../../Media/reel-icon.svg";
import StoryIco from "../../Media/story-icon.svg";
import IgtvIco from "../../Media/igtv-icon.svg";

const NavigationMenu = () => {
    return (
        <>
            <NavLink
                to="/igdownloader/profile"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img
                    src={ProfileIco}
                    className="nav-icons"
                    alt="search profile"
                />
                <p className="nav-name"> Profile </p>
            </NavLink>

            <NavLink
                to="/igdownloader/story"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={StoryIco} className="nav-icons" alt="search Story" />
                <p className="nav-name"> Story </p>
            </NavLink>

            <NavLink
                to="/igdownloader/reel"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={ReelIco} className="nav-icons" alt="search Reel" />
                <p className="nav-name"> Reel </p>
            </NavLink>

            <NavLink
                to="/igdownloader/post"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={PostIco} className="nav-icons" alt="search Post" />
                <p className="nav-name"> Post </p>
            </NavLink>

            <NavLink
                to="/igdownloader/igtv"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={IgtvIco} className="nav-icons" alt="search Igtv" />
                <p className="nav-name"> Igtv </p>
            </NavLink>
        </>
    );
};

export default NavigationMenu;
