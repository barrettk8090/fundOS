function ProjectComment({comment}){

    return(
        <div className="flex items-start">
            <img className="w-12 mb-6 rounded-full mr-4" src={comment.user.image}></img>
            <div>
                <p className="mb-2">"{comment.comment_text}"</p>
                <p>@{comment.user.username}</p>
            </div>
            <hr/>
        </div>
    )
}

export default ProjectComment;