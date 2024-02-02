function ProjectComment({comment}){
    


    return(
        <div>
            <p>Comment: {comment.comment_text}</p>
            <p>User: {comment.user.username}</p>
        </div>
    )
}

export default ProjectComment;