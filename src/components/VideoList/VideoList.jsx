import './VideoList.scss'

function VideoList({videoList, currentVideo}){
    return (
        <div className="video-list">
            {videoList.map((video) => {
                return (
                    <Video poster={video.image} title={video.title} channel={video.channel}/>
                )
            })}
        </div>
    )
}

export default VideoList;