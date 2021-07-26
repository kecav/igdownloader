import NavigationMenu from "./NavigationMenu";
import MyLogo from "../../Media/instagram-logo1.png";

const Header = () => {
    return (
        <>
            <header className="main-header">
                <article className="web-header">
                    <section className="logo-section">
                        <img
                            src={MyLogo}
                            alt="Web App Logo"
                            className="myLogo"
                        />
                    </section>
                    <h1 className="web-name"> Instagram Downloader </h1>
                </article>
                <nav className="nav-section">
                    <NavigationMenu />
                </nav>
            </header>
        </>
    );
};

export default Header;
