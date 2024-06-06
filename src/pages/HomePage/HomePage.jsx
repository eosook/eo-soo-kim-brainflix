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
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      if (videoId !== undefined) {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key="${api}"`
        );
        setVideoData(response.data);
      } else {
        const getData = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key="${api}"`
        );
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${getData.data[0].id}?api_key="${api}"`
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
