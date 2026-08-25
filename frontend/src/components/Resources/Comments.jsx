import { useState } from "react";
import commentsData from "../../data/comments";
import "./Comments.css";

function Comments({ resourceId }) {
  const [comments, setComments] = useState(commentsData);
  const [commentText, setCommentText] = useState("");

  const resourceComments = comments.filter(
    (comment) => comment.resourceId === resourceId
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!commentText.trim()) {
      return;
    }

    const newComment = {
      id: Date.now(),
      resourceId: resourceId,
      author: "You",
      text: commentText.trim(),
    };

    setComments([...comments, newComment]);
    setCommentText("");
  }

  return (
    <section className="comments-section">

      <h2>Comments</h2>

      <form
        className="comment-form"
        onSubmit={handleSubmit}
      >
        <textarea
          placeholder="Write a comment..."
          rows="3"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />

        <button type="submit">
          Post Comment
        </button>
      </form>

      <div className="comments-list">

        {resourceComments.length === 0 ? (
          <p className="no-comments">
            No comments yet. Be the first to comment.
          </p>
        ) : (
          resourceComments.map((comment) => (
            <div className="comment" key={comment.id}>

              <strong>
                {comment.author}
              </strong>

              <p>
                {comment.text}
              </p>

            </div>
          ))
        )}

      </div>

    </section>
  );
}

export default Comments;    