function ProjectComment({comment}){

    return(
        <div>
            <p>Comment: {comment.comment_text}</p>
            <p>User: {comment.user.username}</p>
            <img className="w-10 pb-6 rounded-full" src={comment.user.image}></img>
            <hr/>
        </div>
    )
}

export default ProjectComment;