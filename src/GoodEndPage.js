import UserStatsPage from "./UserStatsPage.js";

function GoodEndPage({setDisplay, username, sword}) {
    return(
        <div>
            <h1>Congratulations <span className="username">{username}</span>!!</h1>
            <p>You have successfully vanquished the dragon AND you made some pretty interesting decisions along the way. Feel free to try an alternative path as well and see how you fair! Afterall, adventurers never stop adventuring!</p>
            <p>Don't forget to take a look at how you did!</p>

            <button
            onClick={() =>{
                    setDisplay(<UserStatsPage username={username} setDisplay={setDisplay} sword={sword}/>)
                    }
                }
            >User Stats</button>
        </div>
    )
}

export default GoodEndPage;