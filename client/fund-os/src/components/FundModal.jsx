import {useState} from 'react';
import {ethers} from 'ethers'

function FundModal({setShowFundModal, project, user, updateAmountRaised}){

  const [contribution, setContribution] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);


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
      .then(data => {
        console.log(data);
        updateAmountRaised(data.current_funding);
      })
      .catch(error => console.error('Error:', error));
      setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
            handleClose();
        }, 2000);
  }

    const handleClose = () => {
        setShowFundModal(false);
    }
    return (
      <>
      <dialog className={isSuccess ? 'p-20 mx-60 align-middle rounded-lg' : 'p-20 mx-60 align-middle rounded-lg'} open={true}>
          {isSuccess ? (
              <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-500 px-20 pb-12 text-3xl">Your contribution to {project.name} was successful!</p>
              </div>
          ) : (
            <>
                <h1 className="pb-12 font-bold">Help to fund <br/><span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent'>{project.name}</span>:</h1>
                <p className="px-20 pb-12 text-3xl">Enter the amount of ETH you'd like to contribute toward this projects funding goal. Keep in mind that you cannot contribute more than is required for this project to hit its funding goal.</p>
                <h3 className="flex justify-center text-3xl">Enter amount:</h3>
                <form className="p-4 flex justify-center" onSubmit={handleContribution}>
                    <input
                      value={contribution}
                      onChange={e => {
                        const value = e.target.value;
                        if (value >= 0) {
                          setContribution(value)}}}>
                          </input>
                    <button className="text-xl" type="submit">Fund Project</button>
                </form>
                <div className="flex justify-center">
                  <button className="my-4" onClick={handleClose}>Cancel</button>
                </div>
            </>
          )}
      </dialog>
      </>
  );
}

export default FundModal