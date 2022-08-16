import Outcome3End from "./Outcome3End.js";
import { useState } from 'react';

function Scenario2Outcome3({setDisplay, username, sword, userStats}) {
    const [riddle, setRiddle] = useState('');
    
    const handleRiddleInput = (e) => {
        setRiddle(e.target.value);
    }

    return(
        <div>
            <h1>Objective: Prove Your Intelligence!</h1>
            <p>"Hey now! some humans are smart, there's no need to make a sweeping generalization!" You exclaim</p>
            <p>The dragon's roars turn to laughter...</p>
            <p>"Listen human, I've known 5 intelligent humans and they were all burned at the stake for being witches...but they were merely herbalists! But if you think you can be the 6th, then I'll reconsider your ENTIRE species as a whole and cease my terror", says the dragon.</p>
            <h3>Riddle me this...</h3>
            <form>
                <label htmlFor="question">"I taste better than I smell. What am I?"</label>
                <input type="text" id="question" name="question" onChange={handleRiddleInput}/>

                <button type="submit"
                    onClick={() => {
                        setDisplay(<Outcome3End setDisplay={setDisplay} username={username} sword={sword} riddle={riddle} userStats={userStats}/>)
                        }
                    }
                >Confirm</button>
            </form>
        </div>
    )
}

export default Scenario2Outcome3;