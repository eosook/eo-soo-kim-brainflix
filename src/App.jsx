import './App.scss'
import { useState } from 'react';
import videoData from './data/video-details.json'
import Header from './components/Header/Header'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import VideoInfo from './components/VideoInfo/VideoInfo';
import Comments from './components/Comments/Comments';

function App() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [comments, setComments] = useState(videoData[currentVideo].comments);

  function changeVideo(index){
    setCurrentVideo(index);
    setComments(videoData[currentVideo].comments);
  }

  return (
    <>
      <Header />
      <VideoPlayer />
      <VideoInfo />
      <Comments commentsList={comments} />
    </>
  )
}

export default App
