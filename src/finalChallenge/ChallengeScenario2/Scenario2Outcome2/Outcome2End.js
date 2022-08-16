import GoodEndPage from "../../../GoodEndPage.js";
import BadEndPage from "../../../BadEndPage.js";

function Outcome3End({setDisplay, username, sword, riddle, userStats}) {

    const answer = riddle.toLowerCase().includes('tongue');

    return(
        <div className='displayContainer Outcome2EndPage'>
            <div className='contentContainer'>
                <h1>Objective: Prove Your Intelligence!</h1>
                {
                    answer ?
                    <p>"Hmm you humans may prove smarter than I thought. There might be hope for you yet as a species. For now I will leave you lot to your devices BUT if I suspect you were growing out of control, I will be back to erase you all!", says the dragon before flying away into the sunset!</p> : 
                    <p>"As I suspected, a pitful species who can't even tell their fingers from their toes. Frankly, what I'm about to do to you is a service", says the dragon before opening it's maw and charging towards you. Your vision grows darker and darker and you feel this is the end..</p>
                }
                
                {
                    answer ?
                    <button
                        onClick={() =>{
                                setDisplay(<GoodEndPage
                                    username={username}
                                    setDisplay={setDisplay}
                                    sword={sword}
                                    userStats={userStats}/>)
                                    userStats.push(`Unbelievable, you guessed the correct answer to the riddle!`)
                                    userStats.push(`The dragon has recognized your brilliance and decided to give humanity another chance`)
                                    userStats.push(`You've earned the monkiker: Big Brain ${username}!`)
                                }
                            }
                    >Continue</button> :
                    <button
                        onClick={() =>{
                                setDisplay(<BadEndPage
                                    username={username}
                                    setDisplay={setDisplay}
                                    sword={sword}
                                    userStats={userStats}/>)
                                    userStats.push(`Unbelievable! You thought the answer was '${riddle}'..`)
                                    userStats.push(`The dragon's has judged humanity as an unfit species based soley on your intelligence and has eaten you!`)
                                    userStats.push(`You've earned the moniker: Average-Sized Brain ${username}!`)   
                                }
                            }
                    >Continue</button>
                }
            </div>
        </div>
    )
}

export default Outcome3End;