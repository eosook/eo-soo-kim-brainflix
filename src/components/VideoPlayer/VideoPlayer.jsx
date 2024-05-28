import "./VideoPlayer.scss";

function VideoPlayer() {
  return (
    <>
      <div className="player">
        <video
          className="player__video"
          poster="https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg"
          controls
        >
          <source src=""></source>
        </video>
      </div>
    </>
  );
}

export default VideoPlayer;
