import GoodEndPage from "../../../GoodEndPage.js";

function Scenario1Outcome1({setDisplay, username, sword, userStats}) {
    return(
        <div className='displayContainer Scenario1Outcome1'>
            <div className='contentContainer'>
                <h1>Objective: FIGHT ON!</h1>
                <p>With perfect timing, you charge the dragon, holding your blade upwards and pierce its throat! You maintain you momentum, moving forward, cutting it all the way to its tail!</p>
                <p>It wails while in its death throes! Twisting and kicking up dust before it eventually lies still...</p>
                <button
                onClick={() =>{
                        setDisplay(<GoodEndPage username={username} setDisplay={setDisplay} sword={sword} userStats={userStats}/>)
                        userStats.push(`Oh my god! You gut the dragon like you were cutting bread!`)
                        userStats.push(`You've earned the moniker: Dragon Slayer ${username}!`)
                        }
                    }
                >Continue</button>
            </div>
        </div>
    )
}

export default Scenario1Outcome1;