import "./VideoList.scss";
import Video from "./Video/Video";

function VideoList({ videoList, currentVideo, changeVideo }) {
  return (
    <div className="video-list">
      <div className="video-list__header">next videos</div>
      {videoList
        .filter((video, index) => index !== currentVideo)
        .map((video, index) => {
          return (
            <Video
              key={index}
              id={video.id}
              poster={video.image}
              title={video.title}
              channel={video.channel}
              changeVideo={changeVideo}
              videoList={videoList}
            />
          );
        })}
    </div>
  );
}

export default VideoList;
