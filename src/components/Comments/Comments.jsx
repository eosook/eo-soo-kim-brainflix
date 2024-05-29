import './Comments.scss'
import SingleComment from './SingleComment/SingleComments';

function Comments({commentsList}){
    
    return(
        <div className="comments">
            <div className="comments__number">{commentsList.length} comments</div>
            <form className="comments-form">
                <div className="comments-form__image" title="avatar"></div>
                <div className="comments__divider">
                    <label className="comments-form__label" for="comment">join the conversation</label>
                    <div className="comments__input">
                        <textarea className="comments-form__textarea" name="comment" placeholder="Add a new comment"></textarea>
                        <button className="comments-form__button" type="submit">comment</button>
                    </div>
                </div>
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