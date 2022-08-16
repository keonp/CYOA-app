import ChallengeS1 from "./ChallengeScenario1/ChallengeS1.js";
import ChallengeS2 from "./ChallengeScenario2/ChallengeS2.js";

function Challenge({setDisplay, username, sword, riddle, handleRiddleInput, userStats}) {
    return (
        <div className='displayContainer ChallengePageContainer'>
            <div className='contentContainer'>
                <h1>Objective: Defeat the Dragon!</h1>
                <p>You make your way to the ruins where the dragon is said to have setup it's lair. The sky has darkened and you hear the crackling of thunder in the sky. The air smells of wet grass and smoke.</p>
                <p>The feeling of anxiousness has sharpened your senses and still, you cannot see the dragon. However, the hairs on your arm begin to stand on their own and so does the hair on your head...the air begins to hum... This gives you momentary pause before your eyes widen and you...</p>
                
                <button
                    onClick={() => {
                        setDisplay(<ChallengeS1 username={username} setDisplay={setDisplay} sword={sword} userStats={userStats} />)
                        userStats.push(`Pssh, the obvious signs of lightning didn't scare you, not when you have your trusty ${sword}!`)
                    }
                }
                >Pull out your <span className={sword === 'Dragon Long Sword' ? 'dragonLongSword' : 'woodenSword'}>{sword}</span>!</button>

                <button
                    onClick={() => {
                        setDisplay(<ChallengeS2 username={username} setDisplay={setDisplay} sword={sword} riddle={riddle} handleRiddleInput={handleRiddleInput} userStats={userStats}/>)
                        userStats.push(`Call it luck, call it instincts, but you dodged the dragon's lightning breath!`)
                    }
                }
                >Jump backwards!</button>
            </div>
        </div>
    )
}

export default Challenge;