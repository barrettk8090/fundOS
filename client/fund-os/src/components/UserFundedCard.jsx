function UserFundedCard({oneFundedProject}){


    return (
       <>
            <h2 className="col-span-1">{oneFundedProject.project.name}</h2>
            <h2 className="col-span-1">{oneFundedProject.project.funding_needed}</h2>
            <h2 className="col-span-1">{oneFundedProject.project["current-funding"]}</h2>
            <h2 className="col-span-1">{oneFundedProject.project.deadline.split(' ')[0]}</h2>
            <h2 className="col-span-1">$ {oneFundedProject.user_funded_amount}</h2>
            <h2 className="col-span-1">Get math 0%</h2>
            <button className="col-span-1 mb-5">View Project</button>
            </>
    )
}

export default UserFundedCard