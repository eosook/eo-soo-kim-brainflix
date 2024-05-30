import './App.scss'
import { useState } from 'react';
import videoData from './data/video-details.json'
import Header from './components/Header/Header'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import VideoInfo from './components/VideoInfo/VideoInfo';
import Comments from './components/Comments/Comments';
import VideoList from './components/VideoList/VideoList';

function App() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [comments, setComments] = useState(videoData[currentVideo].comments);
  const [cloneData, setCloneData] = useState(videoData.slice());

  function changeVideo(index){
    setCurrentVideo(index);
    console.log(index);
    setComments(videoData[currentVideo].comments);
    setCloneData(videoData.slice());
  }

  return (
    <>
      <Header />
      <VideoPlayer poster={videoData[currentVideo].image}/>
      <VideoInfo videoInfo={videoData[currentVideo]}/>
      <Comments commentsList={comments} />
      <VideoList videoList={videoData} currentVideo={currentVideo} changeVideo={changeVideo}/>
    </>
  )
}

export default App
