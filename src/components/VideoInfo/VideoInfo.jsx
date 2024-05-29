import "./VideoInfo.scss";
import viewsLogo from '../../assets/images/icons/views.svg'
import likesLogo from '../../assets/images/icons/likes.svg'

function VideoInfo() {
  return (
    <div className="info">
      <h1 className="info__title">The Future of Artificial Intelligence</h1>
      <div className="info__metrics">
        <div className="info__metrics--divider">
          <div className="info__channel info--padding">By Aiden Thompson</div>
          <div className="info__date info--padding">8/8/2023</div>
        </div>
        <div className="info__metrics--divider">
          <div className="info__numbers info--padding"><img src={viewsLogo}></img>980,544</div>
          <div className="info__numbers info--padding"><img src={likesLogo}></img>22,479</div>
        </div>
      </div>
      <div className="info__description">
        Explore the cutting-edge developments and predictions for Artificial
        Intelligence in the coming years. From revolutionary breakthroughs in
        machine learning to the ethical considerations influencing AI
        advancements, this exploration transcends the boundaries of mere
        speculation. Join us on a journey that navigates the intricate interplay
        between innovation, ethics, and the ever-evolving tech frontier
      </div>
    </div>
  );
}

export default VideoInfo;
