import SwordOption1 from "./swordOptions/SwordOption1.js";
import SwordOption2 from "./swordOptions/SwordOption2.js";
import SwordOption3 from "./swordOptions/SwordOption3.js";

function Sword({setDisplay, username, sword, setSword}) {
    return(
        <div>
            <h1>Objective: Obtain the Dragon Long Sword</h1>
            <p>You make your way to 7D-Warfs, the local blacksmith. It's a family business run by dwarves, infamous for their metallurgy. If there is anyone in the village who can craft you a <span className="dragonLongSword">Dragon Long Sword</span>, it's someone from this family! You approach the gruff and stout blacksmith and explain the current predicament. He seems uninterested and unwilling to help. You attempt to butter him up and mention the the great work his family has done. To which he asks, "Who of my 6 other brothers do <em>you</em> even know? If you are a true admirer of our craft, this should be a simple question. Then I shall craft you the finest Dragon Long Sword y'ever saw!"</p>

            <button
                onClick={() => {
                    setSword('Wooden Sword')
                    setDisplay(<SwordOption1 setDisplay={setDisplay}  username={username} sword='Wooden Sword'/>)
                    }
                }
            > Gleeful</button>


            <button
                onClick={() =>{
                    setSword('Dragon Long Sword')
                    setDisplay(<SwordOption2 username={username} setDisplay={setDisplay} sword='Dragon Long Sword'/>)
                    }
                }
            >Doc</button>

            <button
                onClick={() => {
                    setSword('Wooden Sword')
                    setDisplay(<SwordOption3 username={username} setDisplay={setDisplay} sword='Wooden Sword'/>)
                    }
                }
            >Smiley</button>
        </div>
    )
}

export default Sword;