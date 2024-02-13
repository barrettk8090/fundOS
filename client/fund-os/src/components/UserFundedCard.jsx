import {Link} from "react-router-dom";

function UserFundedCard({oneFundedProject}){

    const percentageFunded = (((oneFundedProject.current_funding / oneFundedProject.funding_needed) * 100).toFixed(2)).toString() + '%'

    return (
       <>
            <h2 className="col-span-1 border-b-2 py-8">{oneFundedProject.name}</h2>
            <h2 className="col-span-1  border-b-2 py-8">{oneFundedProject.funding_needed} ETH</h2>
            <h2 className="col-span-1 border-b-2 py-8">{oneFundedProject.current_funding} ETH</h2>
            <h2 className="col-span-1 border-b-2 py-8">{oneFundedProject.deadline.split(' ')[0]}</h2>
            <h2 className="col-span-1 border-b-2 py-8">{oneFundedProject.user_funded_amount} ETH</h2>
            <h2 className="col-span-1 border-b-2 py-8">{percentageFunded}</h2>
            <Link to={`/project/${oneFundedProject.id}`} className="col-span-1 border-b-2 py-8">View Project →</Link>
        </>
    )
}

export default UserFundedCard