import {Link} from "react-router-dom";

function UserFundedCard({oneFundedProject}){

    const percentageFunded = (((oneFundedProject.current_funding / oneFundedProject.funding_needed) * 100).toFixed(2)).toString() + '%'

    return (
       <>
            <h2 className="col-span-1 lg:pr-8 border-b-2 py-4">{oneFundedProject.name}</h2>
            <h2 className="col-span-1 lg:pl-2 border-b-2 py-4">$ {oneFundedProject.funding_needed}</h2>
            <h2 className="col-span-1 border-b-2 py-4">${oneFundedProject.current_funding}</h2>
            <h2 className="col-span-1 border-b-2 py-4">{oneFundedProject.deadline.split(' ')[0]}</h2>
            <h2 className="col-span-1 border-b-2 py-4">$ {oneFundedProject.user_funded_amount}</h2>
            <h2 className="col-span-1 border-b-2 py-4">{percentageFunded}</h2>
            <Link to={`/project/${oneFundedProject.id}`} className="col-span-1 mb-5 border-b-2 my-4 "><button>View Project</button></Link>
            </>
    )
}

export default UserFundedCard