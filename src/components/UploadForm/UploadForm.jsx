import "./UploadForm.scss";
import uploadThumbnail from "../../assets/images/Upload-video-preview.jpg";

function UploadForm() {
  console.log(uploadThumbnail);
  return (
    <form className="upload-form">
      <div className="upload-form__divider">
        <div>
          <h2 className="upload-form__label">video thumbnail</h2>
          <img className="upload-form__thumbnail" src={uploadThumbnail}></img>
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
            name="desciption"
            placeholder="Add a description to your video"
          ></textarea>
        </div>
      </div>
      <div className="upload-form__buttons">
        <button className="upload-form__publish" type="submit">
          publish
        </button>
        <a className="upload-form__cancel">
          <h2 className="upload-form__cancel--font">cancel</h2>
        </a>
      </div>
    </form>
  );
}

export default UploadForm;
