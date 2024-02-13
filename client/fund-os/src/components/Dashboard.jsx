import { useNavigate, useState, useEffect } from 'react';
import UserFundedCard from './UserFundedCard';

function Dashboard({user}) {

  // const navigate = useNavigate();

  const [userFundedProjects, setUserFundedProjects] = useState([])
  const [trendingProjects, setTrendingProjects] = useState([])


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
        {user ? <h1 className="flex justify-center lg:text-6xl font-display">@{user.username}'s Dashboard </h1> : null}
      </div>

      <div className="dash-projects">
          <h2 className="my-12 flex justify-center font-bold text-4xl">Projects You're Funding</h2>
       
          <div className="dash-bg grid grid-cols-7 p-12  font-display">
              <h3 className="font-bold col-span-1 text-2xl">Name</h3>
              <h3 className="font-bold col-span-1 text-2xl">Goal</h3>
              <h3 className="font-bold col-span-1 text-2xl">Current</h3>
              <h3 className="font-bold col-span-1 text-2xl">Deadline</h3>
              <h3 className="font-bold col-span-1 text-2xl">Your Funding</h3>
              <h3 className="font-bold col-span-1 text-2xl">% Funded</h3>
              <h3 className="font-bold col-span-1 text-2xl">View Project</h3>
              <div className="col-span-7 h-0 border-b-2 py-4"></div>
            {displayUserFundedProject}
          </div>
      </div>

      <div className="dash-trending">
          <div className="indiv-trending">
          <h2 className="my-12 flex justify-center font-bold text-4xl">Top Funded Projects</h2>
              <p className="flex justify-center">These projects are close to hitting their funding goal! Check them out now to help them reach the finish line.</p>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;