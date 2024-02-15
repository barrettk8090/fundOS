import { useParams } from "react-router-dom";

function CreateProjectInterstitial() {
    const { projectId } = useParams()

    return (
        <div>
            <h1 className="my-24 flex justify-center text-3xl lg:text-9xl text-center font-display">Let's do this...</h1>
            <p className="home-text flex justify-center lg:text-4xl pb-16">You just created a project on FundOS. Ready to check it out?</p>
            <div className="flex justify-center create-button text-4xl my-6 mx-60">
                <button  onClick={() => window.location.href=`/project/${projectId}`}>View My Project →</button>
            </div>
        </div>
    )
}

export default CreateProjectInterstitial;