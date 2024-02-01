function UserFundedCard({oneFundedProject}){


    return (
        <div className="one-funded-project">
            <h2>{oneFundedProject.project.name}</h2>
            <h2>{oneFundedProject.project.funding_needed}</h2>
            <h2>{oneFundedProject.project.current_funding}</h2>
            <h2>{oneFundedProject.project.deadline}</h2>
            <h2>Your funded amount: {oneFundedProject.user_funded_amount}</h2>
            <h2>Get math 0%</h2>
        </div>
    )
}

export default UserFundedCard