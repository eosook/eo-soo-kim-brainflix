import './VideoPlayer.scss'

function VideoPlayer(){
    return (
        <>
            <video className="player" controls>
                <source src="https://unit-3-project-api-0a5620414506.herokuapp.com/stream"></source>
            </video>
        </>
    )
}

export default VideoPlayer;