import GoodEndPage from "../../../GoodEndPage.js";
import BadEndPage from "../../../BadEndPage.js";

function Outcome3End({setDisplay, username, sword, riddle}) {
    return(
        <div>
            <h1>Objective: Prove Your Intelligence!</h1>
            {riddle = riddle.toLowerCase().includes('tongue')}
            {
                riddle ?
                <p>"Hmm you humans may prove smarter than I thought. There might be hope for you yet as a species. For now I will leave you lot to your devices BUT if I suspect you were growing out of control, I will be back to erase you all!", says the dragon before flying away into the sunset!</p> : 
                <p>"As I suspected, a pitful species who can't even tell their fingers from their toes. Frankly, what I'm about to do to you is a service", says the dragon before opening it's maw and charging towards you. Your vision grows darker and darker and you feel this is the end..</p>
            }
            
            {
                riddle ?
                <button
                    onClick={() =>{
                            setDisplay(<GoodEndPage
                                username={username}
                                setDisplay={setDisplay}
                                sword={sword}/>)
                            }
                        }
                >Continue</button> :
                <button
                    onClick={() =>{
                            setDisplay(<BadEndPage
                                username={username}
                                setDisplay={setDisplay}
                                sword={sword}/>)
                            }
                        }
                >Continue</button>
            }
        </div>
    )
}

export default Outcome3End;