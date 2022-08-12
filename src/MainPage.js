import Sword from "./taskSword/Sword.js";
import Challenge from "./finalChallenge/Challenge.js";

function MainPage({setDisplay, username, setSword}){
    return(
        <div>
            <h1>Main page</h1>
            <p>Alright <span className="username">{username}</span>, your best bet against the dragon is to acquire the <span className="dragonLongSword">Dragon Long Sword</span>, said to have been crafted from the strongest ore in the Karamja mines. When you've retrieved the sword, you may challenge the dragon!</p>

            <button onClick={() => setDisplay(<Sword username={username} setDisplay={setDisplay} setSword={setSword} />)}>Obtain A Sword</button>    

            <button onClick={() => setDisplay(<Challenge username={username} setDisplay={setDisplay}/>)}>Challenge the Dragon!</button>                 
        </div>
    )
}

export default MainPage;