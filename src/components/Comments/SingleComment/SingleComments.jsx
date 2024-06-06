import "./SingleComment.scss";

function SingleComment({ name, comment, time }) {
  const date = new Date(time);
  return (
    <section className="comment">
      <div className="comment__avatar"></div>
      <div className="comment__info">
        <div className="comment__divider">
          <div className="comment__name">{name}</div>
          <div className="comment__date">
            {date.toLocaleDateString("en-US")}
          </div>
        </div>
        <div className="comment__comment">{comment}</div>
      </div>
    </section>
  );
}

export default SingleComment;
