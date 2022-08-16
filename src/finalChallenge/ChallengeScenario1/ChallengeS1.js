import Scenario1Outcome1 from "./Scenario1Outcome1/Scenario1Outcome1.js";
import Scenario1Outcome2 from "./Scenario1Outcome2/Scenario1Outcome2.js";

function ChallengeS1({setDisplay, username, sword, userStats}) {
    return(
        <div className='displayContainer ChallengesS1Container'>
            <div className='contentContainer'>
                <h1>Objective: Defeat the Dragon!</h1>
                {
                    sword === 'Dragon Long Sword' ?
                        <p>A bolt of lightning breaks through the sky and just before it makes contact with your head, you swing your <span className="dragonLongSword">{sword}</span> at the bolt. The lightning strike is deflected on towards a nearby pillar and though feel <em>some</em> residual effects of the lightning, you are safe for the most part. A lesser sword would have resulted in your untimely demise!</p> :
                        <p>A bolt of lightning breaks through the sky and just before it makes contact with your head, you swing your <span className="woodenSword">{sword}</span> at the bolt. Upon contact, your sword is almost immediately vaporized by the heat of the plasma from the lightning. The strike then begins to travel through your body before it exits through your feet, leaving you stunned...</p>
                }
                <p>Then, from the clouds above, the dragon flies down breathing lightning in all directions headed towards you, face first...</p>

                {
                    sword === 'Dragon Long Sword' ?
                    
                    <button onClick={() => {
                        setDisplay(<Scenario1Outcome1 username={username} setDisplay={setDisplay} sword={sword} userStats={userStats} />)
                        userStats.push(`These feeble attacks mean nothing againts a ${sword}! You parried lightning!`)
                    }}
                    >Charge with your sword!</button> :
                    
                    <button
                    onClick={() =>{
                        setDisplay(<Scenario1Outcome2 username={username} setDisplay={setDisplay} sword={sword} userStats={userStats} />)
                        userStats.push(`Alas, your ${sword} was blown up and you were electricuted!`)
                        }
                    }
                    >I can't feel my legs...</button>  
                }
            </div>
        </div>
    )
}

export default ChallengeS1;