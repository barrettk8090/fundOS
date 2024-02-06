function ProjectFunders({funder, funder_amt}){
    return (
        <div className="mb-4">
            <p>{funder} recently donated {funder_amt}</p>
        </div>
    )
}

export default ProjectFunders;