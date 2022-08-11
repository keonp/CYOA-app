import Sword from "./taskSword/Sword.js";

function MainPage({setDisplay, username}){
    return(
        <div>
            <h1>Main page</h1>
            <p>Alright {username}, your best bet against the dragon is to acquire the <span>Dragon Long Sword</span>, said to have been crafted from the strongest ore in the Karamja mines. When you've retrieved the sword, you may challenge the dragon!</p>
            <button onClick={() => setDisplay(<Sword username={username} setDisplay={setDisplay}/>)}>Obtain A Sword</button>
        </div>
    )
}

export default MainPage;