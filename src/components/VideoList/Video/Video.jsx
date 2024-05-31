import "./Video.scss";

function Video({ id, poster, title, channel, changeVideo, videoList }) {
  const index = videoList.findIndex((video) => video.id === id);
  const videoAlt = "video " + index
  return (
    <div className="video" onClick={() => changeVideo(index)}>
      <img className="video__poster" src={poster} alt={videoAlt}></img>
      <div className="video__divider">
        <h2 className="video__title">{title}</h2>
        <div className="video__channel">{channel}</div>
      </div>
    </div>
  );
}

export default Video;
