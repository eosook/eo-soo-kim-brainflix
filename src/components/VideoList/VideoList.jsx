import './VideoList.scss'
import Video from './Video/Video';

function VideoList({videoList, currentVideo, changeVideo}){
    videoList.splice(currentVideo, 1);
    return (
        <div className="video-list">
            <div className="video-list__header">next videos</div>
            {videoList.map((video, index) => {
                return (
                    <Video key={index} poster={video.image} title={video.title} channel={video.channel} changeVideo={changeVideo} index={index}/>
                )
            })}
        </div>
    )
}

export default VideoList;