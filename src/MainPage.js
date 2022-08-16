import Sword from "./taskSword/Sword.js";
import Challenge from "./finalChallenge/Challenge.js";

function MainPage({setDisplay, username, sword, setSword, userStats}){
    return(
        <div className='contentContainer'>
            <h1>Main page</h1>
            {
                !sword ?
                    <p>Alright <span className="username">{username}</span>, your best bet against the dragon is to acquire a strong and sturdy sword! The local blacksmith should be able to assist you, they make the finest weapons over there. Come back here when you've had a chat with him!</p> :
                        (sword === 'Dragon Long Sword') ?
                            <p>Fantastic! now that you've acquired a <span className="dragonLongSword">{sword}</span>. With this, you'll be able take on the Dragon with ease. Best of luck <span className="username">{username}</span>!</p> :
                            <p>Ah! Is that a <span className="woodenSword">{sword}</span> you got there? Well, it's not my first choice for a weapon but I'm sure in your capable hands, it'll get the job done! Good luck <span className="username">{username}</span></p>
            }
            <button onClick={() =>
                setDisplay(<Sword setDisplay={setDisplay} username={username} sword={sword} setSword={setSword} userStats={userStats}/>)} disabled={sword}
                className={sword ? 'disabledButton' : ''}
            >Obtain A Sword</button>    

            <button onClick={() =>
                setDisplay(<Challenge setDisplay={setDisplay}  username={username} sword={sword} userStats={userStats}/>)}
                disabled={!sword}
                className={!sword ? 'disabledButton': ''}
            >Challenge the Dragon!</button>                 
        </div>
    )
}

export default MainPage;