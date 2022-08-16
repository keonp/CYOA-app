import MainPage from "../../MainPage.js";
import woodenSword from "../../assets/swords/wooden_sword.png";

function SwordOption3({setDisplay, username, sword, userStats}) {
    let missingLetter;
    let newName;
    function nameScrambled(username) {
        let alteredName = [...username];
        const index = Math.floor(Math.random() * alteredName.length);
        missingLetter = alteredName[index];
        alteredName.splice(index, 1);
        alteredName.join('');
        return alteredName;
    }
    newName = nameScrambled(username);

    return(
        <div className='displayContainer SwordOption1Container'>
            <div className='contentContainer'>
                <h1>Objective: Obtain A Weapon</h1>

                <p>Smiley is absolutely wrong. This is unbelievable..how would you feel if I took out the '{missingLetter}' from your name and just called you '{newName}'?</p>
                <p>..and you call yourself an adventurer? What's your rank anyhow? C? D? Oh oh, maybe F! You lot like to run around playing with weapons that you have no business carrying around. Here..take this and when you acquire some respect for our work, then maybe I'll make you a <span className="dragonLongSword">Dragon Long Sword</span>. For now, walk around with this <span className="woodenSword">Wooden Sword</span>.</p>

                <div className="imageContainer woodenSwordContainer">
                    <img src={woodenSword} alt="wooden sword"/>
                </div>
                
                <button
                    onClick={() => {
                        setDisplay(<MainPage username={username} setDisplay={setDisplay} sword={sword} userStats={userStats} />)
                        }
                    }
                >Return to the Main page</button>
            </div>
        </div>
    )
}

export default SwordOption3;