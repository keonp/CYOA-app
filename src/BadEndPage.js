import UserStatsPage from "./UserStatsPage.js";

function BadEndPage({setDisplay, username, sword}) {
    return(
        <div>
            <h1>Well, <span className="username">{username}</span></h1>
            <p>Looks like this is the end...You made some pretty interesting decisions along the way, but don't worry! If you didn't like the way things panned out I encourage you to try again! Afterall, adventurers never give up!</p>
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

export default BadEndPage;