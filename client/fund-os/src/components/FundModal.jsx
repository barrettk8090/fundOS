import {useState} from 'react';

function FundModal({setShowFundModal, project, user}){

  const [contribution, setContribution] = useState(0);


  function handleContribution(e) {
    e.preventDefault();
    console.log("Submitting funding:", user.id, project.id, contribution);
    fetch(`/api/fund_project/${user.id}/${project.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_funded_amount: contribution
      })
    })
      .then(r => {
        if (r.ok) {
          return r.json();
        } else {
          console.error('Check the information that you entered and try again.');
        }
      })
      .catch(error => console.error('Error:', error));
  }

    const handleClose = () => {
        setShowFundModal(false);
    }
    return (
        <>
        <dialog className="p-20 mx-60 align-middle rounded-lg" open={true}>
            <h1 className="pb-12 font-bold">Help to fund <br/><span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent'>{project.name}</span>:</h1>
            <p className="px-20 pb-12 text-3xl">Enter the amount of ETH you'd like to contribute toward this projects funding goal. Keep in mind that you cannot contribute more than is required for this project to hit its funding goal.</p>
            <h3>Enter amount:</h3>
            <form onSubmit={handleContribution}>
                <input
                value={contribution}
                onChange={e => setContribution(e.target.value)}></input>
                <button type="submit">Fund Project</button>
            </form>
            <div className="flex justify-center">
              <button onClick={handleClose}>Cancel</button>
            </div>
        </dialog>
        </>
    )
}

export default FundModal