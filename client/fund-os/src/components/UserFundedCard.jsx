function UserFundedCard({oneFundedProject}){


    return (
        <div className="one-funded-project mb-10">
            <h2 className="font-bold">{oneFundedProject.project.name}</h2>
            <h2>{oneFundedProject.project.funding_needed}</h2>
            <h2>{oneFundedProject.project.current_funding}</h2>
            <h2>{oneFundedProject.project.deadline}</h2>
            <h2>Your funded amount: {oneFundedProject.user_funded_amount}</h2>
            <h2>Get math 0%</h2>
            <button>View Project</button>
        </div>
    )
}

export default UserFundedCard