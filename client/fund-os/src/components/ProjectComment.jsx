function ProjectComment({comment}){

    return(
        <div className="">
            <p className="">"{comment.comment_text}"</p>
            <p className="">@{comment.user.username}</p>
            <img className="w-12 mb-6 rounded-full" src={comment.user.image}></img>
            <hr/>
        </div>
    )
}

export default ProjectComment;