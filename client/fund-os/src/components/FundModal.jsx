function FundModal({setShowFundModal}){



    function handleContribution(e) {
        e.preventDefault()
        console.log("Submitting funding:", user_id, project_id, user_funded_amount);
        fetch(`/api/fund_project/${user.id}/${project.id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_funded_amount: user_funded_amount
          })
        })
          .then(r => {
            if (r.ok) {
              return r.json();
            } else {
              setUsernameStatus('Check the information that you entered and try again.');
            }
          })
          .then(data => setUser(data))
          .catch(error => console.error('Error:', error));
      }

    const handleClose = () => {
        setShowFundModal(false);
    }
    return (
        <>
        <dialog open={true}>
            <p onClick={handleClose}>X</p>
            <h1>How much do you want to contribute? </h1>
            <p>Enter the amount of ETH you'd like to contribute toward this projects funding goal. Keep in mind that you cannot contribute more than is required for this project to hit its funding goal.</p>
            <h3>Enter amount:</h3>
            <form onSubmit={handleContribution}>
                <input placeholder="e.g. 0.001 ETH"></input>
                <button type="submit">Fund Project</button>
            </form>
        </dialog>
        </>
    )
}

export default FundModal