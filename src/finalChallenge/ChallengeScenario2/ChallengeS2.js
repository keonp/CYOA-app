import Scenario2Outcome2 from "./Scenario2Outcome2/Scenario2Outcome2.js";
import Scenario2Outcome3 from "./Scenario2Outcome3/Scenario2Outcome3.js";

function ChallengeS2({setDisplay, username, sword, riddle, handleRiddleInput, userStats}) {
    return (
        <div>
            <h1>Objective: Defeat the Dragon!</h1>
            <p>A bolt of lightning pours down a couple of meters in front of you, in the spot you were just standing. You hear a chest-rattling roar from the sky and see the clouds part as a dragon spills out breathing lightning bolts in every direction, destroying the terrain around you!</p>

            {
                sword === 'Wooden Sword' ?
                <p>You look at your <span className="woodenSword">{sword}</span> and wonder if this would have been enough to guard against or damage such a beast...</p> : ""
            }

            <p>You point your <span className={sword === 'Dragon Long Sword' ? 'dragonLongSword' : 'woodenSword'}>{sword}</span> at the dragon, asking why it's terrorizing the village?</p>

            <p>The dragon snarls and says, "Why?! You humans lay waste to your environment and disrupt the state of nature! Your little livestock emit methane in quantities so large that it warms the planet's temperature dramatically! You are at constant war with one another and are bent on making sure you are the dominant species in a world with many other intelligent species! What I do to you people is a service really...you should be thanking me. Your arrogance and lack of intelligence will forever prove your undoing, human.</p>

            <button 
                onClick={() => {
                    setDisplay(<Scenario2Outcome2
                        username={username}
                        setDisplay={setDisplay}
                        sword={sword}
                        userStats={userStats}
                    />)
                    userStats.push(`Time for a science lesson, you inquire about far-- erm Methane!`)
                }}
            >Wait, what's methane?</button>

            <button 
                onClick={() => {
                    setDisplay(<Scenario2Outcome3
                        username={username}
                        setDisplay={setDisplay}
                        sword={sword}
                        riddle={riddle}
                        handleRiddleInput={handleRiddleInput}
                        userStats={userStats}
                    />)
                    userStats.push(`You've decided to throw down in a battle of wits!`)
                }}
            >We can be smart too!</button>
            
        </div>
    )
}

export default ChallengeS2;