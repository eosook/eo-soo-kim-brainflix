import "./App.scss";
import { useState } from "react";
import videoData from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [comments, setComments] = useState(videoData[currentVideo].comments);

  function changeVideo(index) {
    setCurrentVideo(index);
    setComments(videoData[index].comments);
  }

  return (
    <>
      <Header />
      <VideoPlayer poster={videoData[currentVideo].image} />
      <div className="main">
        <div className="main__info-comments">
        <VideoInfo videoInfo={videoData[currentVideo]} />
        <Comments commentsList={comments} />
        </div>
        <div className="main__divider">
          <VideoList
            videoList={videoData}
            currentVideo={currentVideo}
            changeVideo={changeVideo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
