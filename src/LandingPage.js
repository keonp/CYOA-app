import IntroductionPage from './IntroductionPage.js';

function LandingPage({setDisplay, username, sword, setSword, handleUsernameInput}) {
    return(
        <div>
            <h1>Greetings!</h1>
            <p>It's been some time since I've last seen you, young adventurer. Can you remind...what is your name again?</p>
            <form>
                <label htmlFor="name">Enter your [user]name</label>
                <input type="text" id="name" name="name" onChange={handleUsernameInput}/>
                <button type="submit" onClick={() => setDisplay(<IntroductionPage setDisplay={setDisplay} username={username} sword={sword} setSword={setSword} />)}>Confirm</button>
            </form>
        </div>
    )
}

export default LandingPage;