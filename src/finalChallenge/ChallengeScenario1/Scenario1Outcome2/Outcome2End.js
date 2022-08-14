import GoodEndPage from "../../../GoodEndPage.js";


function Outcome2End({setDisplay, username, sword}) {
    // const title = (sword === 'Dragon Long Sword') ? 'Sneaky Assassin' : 'Doomed Inheritance';

    return(
        <div>
            <h1>Objective: Sneak Attack!!</h1>
            <p>You lunge at the Dragon's underbelly with your <span className={sword === 'Dragon Long Sword' ? 'dragonLongSword' : 'woodenSword'}>{sword}</span>...</p>
            {
                sword === 'Dragon Long Sword' ?
                <p>piercing it! The dragon let's out a bellowing roar and cluches its stomach! It's eyes roll back before it crash down, lifelessly.</p> :
                <p>only to see it splinter into a thousand pieces against the dragon's not-so-squishy underbelly. However several pieces of wood are lodged in its belly causing it to roar in pain! "AHHH! See! This is why I hate humans!" It wails as it begins to flap its wings. "Inherit this doomed planet, see if I care!" it says as it flies away, roaring and hollering in pain.</p>
            }

            <button
                onClick={() =>{
                        setDisplay(<GoodEndPage username={username} setDisplay={setDisplay} sword={sword}/>)
                    }
                }
            >Continue</button>

        </div>
    )
}

export default Outcome2End;