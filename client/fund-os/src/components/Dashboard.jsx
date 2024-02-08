import { useNavigate, useState, useEffect } from 'react';
import UserFundedCard from './UserFundedCard';

function Dashboard({user}) {

  // const navigate = useNavigate();

  const [userFundedProjects, setUserFundedProjects] = useState([])


  useEffect(() => {
    if (user){
      fetch(`/api/user_funded_project/${user.id}/`)
          .then(r => r.json())
          .then(data => setUserFundedProjects(data)) }
  }, [user]);

  //Need to map further into the userFundedProjects array to display the individual projects
  const displayUserFundedProject = userFundedProjects.map(oneFundedProject => {
    return <UserFundedCard key={oneFundedProject.id} oneFundedProject={oneFundedProject}/>})



  return (
    <div className="mx-12 my-4">
      <div className="place-content-center">
        {user ? <h1 className="flex justify-center font-display">@{user.username}'s Dashboard </h1> : null}
      </div>

      <div className="dash-projects">
          <h2 className="my-6 flex justify-center font-bold text-xl">Your Projects</h2>
          <p className="mb-4 flex justify-center">A list of projects that you are currently funding.</p>
          <div className="grid grid-cols-7 grid-rows-7 bg-slate-500 rounded-md border-2 border-fuchsia-50 p-12 font-display">
              <h3 className="font-bold col-span-1">Name</h3>
              <h3 className="font-bold col-span-1">Goal</h3>
              <h3 className="font-bold col-span-1">Current Funding</h3>
              <h3 className="font-bold col-span-1">Deadline</h3>
              <h3 className="font-bold col-span-1">Your Funding</h3>
              <h3 className="font-bold col-span-1">Percentage Funded</h3>
              <h3 className="font-bold col-span-1">Project Link</h3>
              <div className="col-span-7"><hr/></div>
            {displayUserFundedProject}
          </div>
      </div>

      <div className="dash-trending">
          <div className="indiv-trending">
              <h1 className="flex justify-center font-display">Hot Projects</h1>
              <p>These projects are close to hitting their funding goal! Check them out now to help them reach the finish line.</p>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;