import "./VideoList.scss";
import Video from "./Video/Video";
import { useState, useEffect } from 'react';
import axios from 'axios';

function VideoList({currentId, changeVideo}) {
  const [videoList, setVideoList] = useState([])

  useEffect(() => {
    const getVideoList = async () => {
      const response = await axios.get(
        `http://localhost:5050/videos`
      )
      setVideoList(response.data);
    }
    getVideoList();
  })

  return (
    <div className="video-list">
      <div className="video-list__header">next videos</div>
      {videoList
        .filter((video) => video.id !== currentId)
        .map((video, index) => {
          return (
            <Video
              key={index}
              id={video.id}
              poster={video.image}
              title={video.title}
              channel={video.channel}
              videoList={videoList}
              changeVideo={changeVideo}
            />
          );
        })}
    </div>
  );
}

export default VideoList;
