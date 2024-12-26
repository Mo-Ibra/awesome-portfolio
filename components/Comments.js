"use client";

const CommentItem = ({ comment }) => {
  return (
    <div className="mb-6">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <img
            src={comment.user.profile_image_90}
            alt={comment.user.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-semibold">{comment.user.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {new Date(comment.created_at).toLocaleString()}
            </p>
          </div>
        </div>
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: comment.body_html }}
        />
      </div>
      {/* Render child comments recursively */}
      {comment.children && comment.children.length > 0 && (
        <div className="ml-8 mt-6">
          {comment.children.map((childComment) => (
            <CommentItem key={childComment.id_code} comment={childComment} />
          ))}
        </div>
      )}
    </div>
  );
};

const Comments = ({ comments }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
      <div>
        {comments.map((comment) => (
          <CommentItem key={comment.id_code} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
