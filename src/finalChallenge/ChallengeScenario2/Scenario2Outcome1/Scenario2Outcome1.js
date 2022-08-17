import Outcome1End from "./Outcome1End.js";

function Scenario2Outcome1({setDisplay, username, sword, userStats}) {
    return(
        <div className='displayContainer Scenario2Outcome1'>
            <div className='contentContainer'>
                <h1>Objective: Methane?</h1>
                <p>"Wait...What's methane?" You inquire</p>
                <p>The dragon takes pause for a moment, looking you up and down before letting out a long groan and raising its head as if to be thinking.</p>
                <p>"Well, a colourless odorless flammable gaseous hydrocarbon CH<sub>4</sub> that is a product of biological decomposition of organic matter and of the carbonization of coal, is used as a fuel and as a starting material in chemical syn-"</p>
                <p>While the dragon goes on answering your question you sneak out of its view, get close to its soft underbelly, and...</p>
                
                {
                    sword === 'Dragon Long Sword' ?

                    <button
                        onClick={() => {
                            setDisplay(<Outcome1End username={username} setDisplay={setDisplay} sword={sword} userStats={userStats}/>)
                            userStats.push(`You don't let the opporunity go to waste! You go for a sneak attack!`)
                        }}
                    >Lunge with your <span className="dragonLongSword">{sword}</span> </button> :

                    <button 
                        onClick={() => {
                            setDisplay(<Outcome1End username={username} setDisplay={setDisplay} sword={sword} userStats={userStats}/>)
                            userStats.push(`Hubris has led you to believe you can pierce the dragon's stomach with a ${sword}!`)
                        }}
                    >Lunge with your <span className="woodenSword">{sword}</span> </button>
                }
            </div>
        </div>
    )
}
export default Scenario2Outcome1;