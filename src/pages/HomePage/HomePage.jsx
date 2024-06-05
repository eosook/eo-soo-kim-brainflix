import "./HomePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";

function HomePage() {
    const [currentId, setCurrentId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
    const [videoData, setVideoData] = useState({
      id: "",
      title: "",
      channel: "",
      image: "",
      description: "",
      timestamp: "",
      comments: []
    });
    const { videoId } = useParams();
    const api = "d60d277a-1428-43ef-9f19-7c0c17b58240";

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${currentId}?api_key="${api}"`
      )
      setVideoData(response.data);
    }
    getData();
  }, [currentId]);
    
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key="${api}"`
      );
      setVideoData(response.data);
    };
    getData();
  }, [videoId]);

  function changeVideo(videoId){
    setCurrentId(videoId)
  }

  return (
    <>
      <VideoPlayer poster={videoData.image} />
      <div className="main">
        <div className="main__info-comments">
          <VideoInfo videoInfo={videoData} />
          <Comments commentsList={videoData.comments} />
        </div>
        <div className="main__divider">
          <VideoList currentId={currentId} changeVideo={changeVideo}/>
        </div>
      </div>
    </>
  );
}

export default HomePage;
