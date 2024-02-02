function ProjectComment({comment}){
    return(
        <div>
            <h1>Project Comments</h1>
            <p>Comment: {comment.comment_text}</p>
            <p>User: {comment.user.username}</p>
        </div>
    )
}

export default ProjectComment;