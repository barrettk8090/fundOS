function ProjectFunders({funder, funder_amt}){

    const funEmoji = ["🎉", "🤠", "💃", "🙌", "🗿", "🐐", "🔥", "❤️‍🔥", "🥳"];
    const max = funEmoji.length;
    function getRandomNumb(max){
        return Math.floor(Math.random() * max);
    
    }

    return (
        <div className="mb-4">
            <p className="text-2xl"><span className="text-3xl pr-2">{funEmoji[getRandomNumb(max)]}</span> {funder} recently donated {funder_amt} ETH.</p>
        </div>
    )
}

export default ProjectFunders;