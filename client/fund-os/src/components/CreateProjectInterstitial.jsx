import { useParams } from "react-router-dom";

function CreateProjectInterstitial() {
    const { projectId } = useParams()

    return (
        <div>
            <h1>Let's do this...</h1>
            <p>You just created a project on FundOS. Ready to check it out?</p>
            <button onClick={() => window.location.href=`/project/${projectId}`}>View My Project</button>
        </div>
    )
}

export default CreateProjectInterstitial;