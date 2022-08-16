import BadEndPage from "../../../BadEndPage.js";

function Scenario1Outcome2({setDisplay, username, sword, userStats}) {
    return(
        <div>
            <h1>Objective: Say your prayers..</h1>
            <p>Your vision fades to darkness as the dragons mouth grows nearer. Your final thoughts are will I taste good? I hope not..</p>

            <button
            onClick={() =>{
                    setDisplay(<BadEndPage username={username} setDisplay={setDisplay} sword={sword} userStats={userStats}/>)
                    userStats.push(`You were eaten whole!`)
                    }
                }
            >Continue</button>
        </div>
    )
}

export default Scenario1Outcome2;