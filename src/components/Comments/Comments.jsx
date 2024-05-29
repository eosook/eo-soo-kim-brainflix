import './Comments.scss'
import SingleComment from './SingleComment/SingleComments';

function Comments({commentsList}){
    
    return(
        <div className="comments">
            <div className="comments__number"></div>
            <form className="comments__form">
                <img></img>
                <label for="comment">join the conversation</label>
                <textarea name="comment"></textarea>
                <button type="submit">comment</button>
            </form>
            {commentsList.map((comment) => {
                return (
                    <SingleComment name={comment.name} comment={comment.comment} time={comment.timestamp}/>
                )
            })}
        </div>
    )
}

export default Comments;