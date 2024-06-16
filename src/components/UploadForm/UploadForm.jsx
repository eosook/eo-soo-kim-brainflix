import "./UploadForm.scss";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function UploadForm() {
  const navigate = useNavigate();
  const uploadThumbnail = "http://localhost:5050/images/terrifiednootnoot.jpg";
  const uploadUrl = "http://localhost:5050/upload";

  function navHome() {
    navigate("/");
  }

  function handleSubmit(event){
    event.preventDefault();
    const newDate = Date.now();
    const newVideo = {
      id: newDate.toString(),
      image : event.target.thumbnail.src,
      title: event.target.title.value,
      channel: "Eo Soo Kim",
      description: event.target.description.value,
      views: "0",
      likes: "0",
      duration: "12:20",
      timestamp: newDate,
      comments: []
    }
    axios.post(uploadUrl, newVideo);
    navigate("/");
  }
  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h1 className="upload-form__header">Upload Video</h1>
      <div className="upload-form__divider">
        <div>
          <h2 className="upload-form__label">video thumbnail</h2>
          <img className="upload-form__thumbnail" src={uploadThumbnail} name="thumbnail" value="image"></img>
        </div>
        <div className="upload-form__inputs">
          <label className="upload-form__label" htmlFor="title">
            title your video
          </label>
          <input
            className="upload-form__title"
            type="text"
            name="title"
            placeholder="Add a title to your video"
          ></input>
          <label className="upload-form__label" htmlFor="description">
            add a video description
          </label>
          <textarea
            className="upload-form__description"
            name="description"
            placeholder="Add a description to your video"
          ></textarea>
        </div>
      </div>
      <div className="upload-form__buttons">
        <button
          className="upload-form__publish"
          type="submit"
        >
          publish
        </button>
        <a className="upload-form__cancel">
          <h2 className="upload-form__cancel--font" onClick={navHome}>
            cancel
          </h2>
        </a>
      </div>
    </form>
  );
}

export default UploadForm;
