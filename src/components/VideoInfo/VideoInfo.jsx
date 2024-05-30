import "./VideoInfo.scss";
import viewsLogo from "../../assets/images/icons/views.svg";
import likesLogo from "../../assets/images/icons/likes.svg";

function VideoInfo({ videoInfo }) {
  let date = new Date(videoInfo.timestamp);
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
            {videoInfo.views}
          </div>
          <div className="info__numbers info--padding">
            <img src={likesLogo}></img>
            {videoInfo.likes}
          </div>
        </div>
      </div>
      <div className="info__description">{videoInfo.description}</div>
    </div>
  );
}

export default VideoInfo;
