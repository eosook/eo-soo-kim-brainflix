import "./VideoInfo.scss";

function VideoInfo({ videoInfo }) {
  const date = new Date(videoInfo.timestamp);
  const viewsLogo = "http://localhost:5050//images/icons/views.svg";
  const likesLogo = "http://localhost:5050//images/icons/likes.svg";
  return (
    <div className="info">
      <h1 className="info__title">{videoInfo.title}</h1>
      <div className="info__metrics">
        <div className="info__metrics--divider">
          <div className="info__channel info--padding">
            By {videoInfo.channel}
          </div>
          <div className="info__date info--padding">
            {date.toLocaleDateString("en-US")}
          </div>
        </div>
        <div className="info__metrics--divider">
          <div className="info__numbers info--padding">
            <img src={viewsLogo}></img>
            <div className="info__numbers--font">{videoInfo.views}</div>
          </div>
          <div className="info__numbers info--padding">
            <img src={likesLogo}></img>
            <div className="info__numbers--font">{videoInfo.likes}</div>
          </div>
        </div>
      </div>
      <div className="info__description">{videoInfo.description}</div>
    </div>
  );
}

export default VideoInfo;
