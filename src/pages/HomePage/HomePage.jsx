import "./HomePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";

function HomePage() {
  const [videoData, setVideoData] = useState({
    image: "",
    comments: [],
  });
  const [firstId, setFirstId] = useState("")
  const { videoId } = useParams();
  const api = "d60d277a-1428-43ef-9f19-7c0c17b58240";
  const apiUrl = "http://localhost:5050";
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      if (videoId !== undefined) {
        const response = await axios.get(
          `${apiUrl}/videos/${videoId}`
        );
        setVideoData(response.data);
      } else {
        const getData = await axios.get(
          `${apiUrl}`
        );
        const response = await axios.get(
          `${apiUrl}/videos/${getData.data[0].id}`
        );
        setFirstId(getData.data[0].id);
        setVideoData(response.data);
      }
    };
    getData();
  }, [videoId]);

  function changeVideo(newVideoId) {
    navigate(`/videos/${newVideoId}`);
  }

  return (
    <>
      <VideoPlayer poster={videoData.image} />
      <main className="main">
        <div className="main__info-comments">
          <VideoInfo videoInfo={videoData} />
          <Comments commentsList={videoData.comments} />
        </div>
        <div className="main__divider">
          <VideoList
            currentId={videoId === undefined ? firstId : videoId}
            changeVideo={changeVideo}
          />
        </div>
      </main>
    </>
  );
}

export default HomePage;
