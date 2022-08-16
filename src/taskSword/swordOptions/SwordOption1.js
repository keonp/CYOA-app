import MainPage from "../../MainPage.js";
import woodenSword from "../../assets/swords/wooden_sword.png";



function SwordOption1({setDisplay, username, sword, userStats}) {
    
    return(
        <div className='displayContainer SwordOption1Container'>
            <div className='contentContainer'>
                <h1>Objective: Obtain A Weapon</h1>
                <p>GLEEFUL? I should remove your [censored] from your [censored]! We get a lot of people like you 'round these parts just wanting weapons for whatever monster is terrorizing the place....but let me tell you *sniffle* it really hurts that no one seems to care about the craftmanship that goes into the weapon! Here, take this...I ain't makin' you any <span className="dragonLongSword">Dragon Long Sword</span> but I ain't gonna let you go off and die without a sword. Before you can say anything, he hands you a <span className="woodenSword">Wooden Sword</span> and tearfully runs into the back of the shop.</p>

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

export default SwordOption1;