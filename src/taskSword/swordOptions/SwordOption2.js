import MainPage from "../../MainPage.js";
import dragonLongSword from "../../assets/swords/dragon_longsword.png";

function SwordOption2({setDisplay, username, sword, userStats}) {
    return (
        <div className='displayContainer SwordOption1Container'>
            <div className='contentContainer'>
                <h1>Objective: Obtain A Weapon</h1>
                <p>Correct! From the moment you approached me, I knew you were an adventurer with a keen eye for our craftsmanship. Y'know, most people don't even know that Doc was the one that built our family business from the ground up. He's smart when it comes to business and smarter when it comes to making weapons. In fact he was the one who taught us how to make swords, including this here <span className="dragonLongSword">Dragon Long Sword</span> I'm givin' you. Use it well and safe travels!</p>

                <div className="imageContainer dLongSwordContainer">
                    <img src={dragonLongSword} alt="Dragon Long Sword"/>
                </div>

                <button
                    onClick={() => {
                        setDisplay(<MainPage username={username} setDisplay={setDisplay} sword={sword} userStats={userStats}/>)
                        }
                    }
                >Return to the Main page</button>
            </div>
        </div>
    )
}

export default SwordOption2;