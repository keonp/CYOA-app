import IntroductionPage from './IntroductionPage.js';

function LandingPage({setDisplay, username, sword, setSword, handleUsernameInput, addUser, userStats}) {
    return(
        <div className='displayContainer landingPageContainer'>
            <div className='contentContainer'>
                <h1>Greetings!</h1>
                <p className=''>It's been some time since I've last seen you, young adventurer. Can you remind...what is your name again?</p>
                <form className='landingPageForm'>
                    <label htmlFor="name">Enter your username</label>
                    <input type="text" id="name" name="name" onChange={handleUsernameInput}/>

                    <button type="submit" onClick={() => {
                            userStats.push(`Your name is ${username}!`);
                            setDisplay(<IntroductionPage
                                setDisplay={setDisplay}
                                username={username}
                                sword={sword}
                                setSword={setSword}
                                userStats={userStats}
                                addUser={addUser}/>
                            )}
                        }
                    >Confirm</button>
                </form>
            </div>
        </div>
    )
}

export default LandingPage;