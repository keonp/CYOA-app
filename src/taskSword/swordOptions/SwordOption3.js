import MainPage from "../../MainPage.js";
import woodenSword from "../../assets/swords/wooden_sword.png";

function SwordOption3({setDisplay, username}) {
    // let missingLetter;
    // function nameScrambled(username) {
    //     let newName = [...username];
    //     const index = Math.floor(Math.random() * newName.length);
    //     missingLetter = newName[index];
    //     newName.splice(index, 1);
    //     newName[0] = newName[0].toUpperCase();
    //     newName.join('');
    //     return newName;
    // }

    return(
        <div>
            <h1>Objective: Obtain the Dragon Long Sword</h1>

            {/* Smiley is absolutely wrong. This is unbelievable..how would you feel just called you '{nameScrambled}' and took out the '{missingLetter}' from your name ? */}
            <p> Smiley is absolutely wrong. This is unbelievable..and you call yourself an adventurer? What's your rank anyhow? C? D? Oh oh, maybe F! You lot like to run around playing with weapons that you have no business carrying around. Here..take this and when you acquire some respect for our work, then maybe I'll make you a <span>Dragon Long Sword</span>. For now, walk around with this <span>Wooden Sword</span>.</p>

            <div className="imageContainer">
                <img src={woodenSword} alt="image of a wooden sword"/>
            </div>
            
            <button onClick={() => setDisplay(<MainPage username={username} setDisplay={setDisplay} />)}>Return to the Main page</button>
        </div>
    )
}

export default SwordOption3;