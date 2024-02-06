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
    <div className="mx-12 my-4 border-2">
      <div className="border-2 place-content-center">
        {user ? <h1 className="flex justify-center">@{user.username}'s Dashboard </h1> : null}
      </div>

      <div className="dash-projects">
          <h2>Your Projects</h2>
          <p>A list of projects that you are currently funding.</p>
          <div className="grid grid-cols-6 grid-rows-6">
            {displayUserFundedProject}
          </div>
      </div>

      <div className="dash-trending">
          <div className="indiv-trending">
              <h2>Trending Projects</h2>
              <p>A list of projects that are currently trending.</p>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;