import ChallengeS1Option1 from "./ChallengeScenario1/ChallengeS1Option1.js";
import ChallengeS1Option2 from "./ChallengeScenario1/ChallengeS1Option2.js";

function Challenge({setDisplay, username, sword}) {
    return (
        <div>
            <h1>Objective: Defeat the Dragon!</h1>
            <p>You make your way to the ruins where the dragon is said to have setup it's lair. The sky has darkened and you hear the crackling of thunder in the sky. The air smells of wet grass and smoke. The feeling of anxiousness has sharpened your senses and still, you cannot see the dragon. However, the hairs on your arm begin to stand on their own and so does the hair on your head...the air begins to hum... This gives you momentary pause before your eyes widen and you...</p>
            
            <button
                onClick={() => {
                    setDisplay(<ChallengeS1Option1 username={username} setDisplay={setDisplay} sword={sword}/>)
                }
            }
            >Pull out your <span className="dragonLongSword">{sword}</span>!</button>

            <button
                onClick={() => {
                    setDisplay(<ChallengeS1Option2 username={username} setDisplay={setDisplay} sword={sword}/>)
                }
            }
            >Jump backwards!</button>
        </div>
    )
}

export default Challenge;