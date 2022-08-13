import GoodEndPage from "../../../GoodEndPage.js";

function Scenario1Outcome1({setDisplay, username, sword}) {
    return(
        <div>
            <h1>Objective: FIGHT ON!</h1>
            <p>With perfect timing, you charge the dragon holding your blade upwards and pierce it's throat! You maintain you momentum, moving forward, cutting it all the way to it's tail!</p>
            <p>It wails while in it's death throes! Twisting and kicking up dust before it eventually lies still...</p>
            <button
            onClick={() =>{
                    setDisplay(<GoodEndPage username={username} setDisplay={setDisplay} sword={sword}/>)
                    }
                }
            >Continue</button>
        </div>
    )
}

export default Scenario1Outcome1;