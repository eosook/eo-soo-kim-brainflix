import "./VideoList.scss";
import Video from "./Video/Video";
import { useState, useEffect } from 'react';
import axios from 'axios';

function VideoList({currentId, changeVideo}) {
  const [videoList, setVideoList] = useState([])

  useEffect(() => {
    const getVideoList = async () => {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key="d60d277a-1428-43ef-9f19-7c0c17b58240`
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
