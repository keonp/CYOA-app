import MainPage from "../../MainPage.js";
import woodenSword from "../../assets/swords/wooden_sword.png";



function SwordOption1({setDisplay, username, setSword}) {
    
    return(
        <div>
            
            <h1>Objective: Obtain the Dragon Long Sword</h1>
            <p>GLEEFUL? I should remove your [censored] from your [censored]! We get a lot of people like you 'round these parts just wanting weapons for whatever monster is terrorizing the place....but let me tell you *sniffle* it really hurts that no one seems to care about the craftmanship that goes into the weapon! Here, take this...I ain't makin' you any Dragon Long Sword but I ain't gonna let you go off and die without a sword. Before you can say anything, he hands you a <span className="woodenSword">wooden sword</span> and tearfully runs into the back of the shop.</p>

            <div className="imageContainer">
                <img src={woodenSword} alt="image of a wooden sword"/>
            </div>
            
            <button
                onClick={() => {
                    setDisplay(<MainPage username={username} setDisplay={setDisplay}/>)
                    setSword('Wooden Sword')}
                }
            >Return to the Main page</button>
        </div>
    )
}

export default SwordOption1;