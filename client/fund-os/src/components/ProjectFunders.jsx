function ProjectFunders({funder, funder_amt}){
    return (
        <div className="mb-4">
            <p>Project Funder Name: {funder}</p>
            <p>Project Funder Amount: {funder_amt}</p>
        </div>
    )
}

export default ProjectFunders;