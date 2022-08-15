import IntroductionPage from './IntroductionPage.js';
// import Scenario2Outcome3 from './finalChallenge/ChallengeScenario2/Scenario2Outcome3/Scenario2Outcome3.js';


function LandingPage({setDisplay, username, sword, setSword, handleUsernameInput, addUser, updateUserStats}) {
    return(
        <div>
            <h1>Greetings!</h1>
            <p>It's been some time since I've last seen you, young adventurer. Can you remind...what is your name again?</p>
            <form>
                <label htmlFor="name">Enter your [user]name</label>
                <input type="text" id="name" name="name" onChange={handleUsernameInput}/>

                <button type="submit" onClick={() => {
                        updateUserStats({username: username});
                        // updateUserStats.username = username;
                        setDisplay(<IntroductionPage
                            setDisplay={setDisplay}
                            username={username}
                            sword={sword}
                            setSword={setSword}
                            updateUserStats={updateUserStats}
                            addUser={addUser}/>
                        )}
                    }
                >Confirm</button>
            </form>
        </div>
    )
}

export default LandingPage;