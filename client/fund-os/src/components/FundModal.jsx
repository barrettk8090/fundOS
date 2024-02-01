function FundModal({setShowFundModal}){

    const handleClose = () => {
        setShowFundModal(false);
    }
    return (
        <>
        <dialog open={true}>
            <p onClick={handleClose}>X</p>
            <h1>Select your contribution amount</h1>
            <ul>
                <li>0.01 eth</li>
                <li>0.1 eth</li>
                <li>1 eth</li>
            </ul>
            <h3>Or enter a custom amount</h3>
            <input></input>
        </dialog>
        </>
    )
}

export default FundModal