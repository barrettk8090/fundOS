function Dashboard() {
  return (
    <>
    <div>
      <h1>Welcome, [Name]!</h1>
    </div>

    <div className="dash-projects">
        <h2>Your Projects</h2>
        <p>A list of projects that you are currently funding.</p>

        <h4>Project Name</h4>
        <h4>Funding Goal</h4>
        <h4>Current Funding</h4>
        <h4>Expires:</h4>
        <h4>Progress</h4>
    </div>

    <div className="dash-trending">
        <div className="indiv-trending">
            <h2>Trending Projects</h2>
            <p>A list of projects that are currently trending.</p>
        </div>
    </div>
    </>
  );
}

export default Dashboard;