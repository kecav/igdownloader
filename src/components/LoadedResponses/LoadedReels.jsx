const LoadedReels = (props) => {
    const responseObj = props.responseObj;
    return (
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
            <video controls className="reel-video">
                <source
                    src={responseObj.video_versions[0].url}
                    type="video/webm"
                    download={responseObj.user.username}
                ></source>
            </video>
            <p class="reel-caption">{responseObj.caption.text}</p>
        </>
    );
};

export default LoadedReels;
