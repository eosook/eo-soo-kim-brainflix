import "./VideoPlayer.scss";

function VideoPlayer({poster}) {
  return (
    <>
      <div className="player">
        <video
          className="player__video"
          poster={poster}
          controls
        >
          <source src=""></source>
        </video>
      </div>
    </>
  );
}

export default VideoPlayer;
