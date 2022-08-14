import Outcome3End from "./Outcome3End.js";

function Scenario2Outcome3({setDisplay, username, sword, riddle, handleRiddleInput}) {
    return(
        <div>
            <h1>Objective: Prove Your Intelligence!</h1>
            <p>"Hey now! some humans are smart, there's no need to make a sweeping generalization!" You exclaim</p>
            <p>The dragon's roars turn to laughter...</p>
            <p>"Listen human, I've known 5 intelligent humans and they were all burned at the stake for being witches...but they were merely herbalists! But if you think you can be the 6th, then I'll reconsider your ENTIRE species as a whole and cease my terror", says the dragon.</p>
            <h3>Riddle me this...</h3>
            <h4>I can taste better than I can smell. What am I?</h4>
            {/* <form>
                <label htmlFor="question">Answer the following: "I taste better than I smell. What am I?"</label>
                <input type="text" id="question" name="question" onChange={handleRiddleInput}/>

                <button type="submit"
                    onClick={() =>
                        setDisplay(<Outcome3End setDisplay={setDisplay} username={username} sword={sword} riddle={riddle}/>)
                    }
                >Confirm</button>
            </form> */}
            <button 
                onClick={() => {
                    setDisplay(<Outcome3End
                        username={username}
                        setDisplay={setDisplay}
                        sword={sword}
                        riddle={false}
                    />)
                }}
            >Water</button>

            <button 
                onClick={() => {
                    setDisplay(<Outcome3End
                        username={username}
                        setDisplay={setDisplay}
                        sword={sword}
                        riddle={false}
                    />)
                }}
            >Parmesan Cheese</button>

            <button 
                onClick={() => {
                    setDisplay(<Outcome3End
                        username={username}
                        setDisplay={setDisplay}
                        sword={sword}
                        riddle={true}
                    />)
                }}
            >A tongue</button>

        </div>
    )
}

export default Scenario2Outcome3;