import './VideoUpload.scss';
import UploadForm from '../../components/UploadForm/UploadForm';

function VideoUpload(){
    return (
        <div className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <UploadForm />
        </div>
    )
}

export default VideoUpload;