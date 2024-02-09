import { useParams } from "react-router-dom";

function CreateProjectInterstitial() {
    const { projectId } = useParams()

    return (
        <div>
            <h1 className="my-12 flex justify-center text-3xl lg:text-7xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-center font-display">Let's do this...</h1>
            <p className="flex justify-center lg:text-4xl">You just created a project on FundOS. Ready to check it out?</p>
            <div className="flex justify-center my-12">
                <button  onClick={() => window.location.href=`/project/${projectId}`}>View My Project →</button>
            </div>
        </div>
    )
}

export default CreateProjectInterstitial;