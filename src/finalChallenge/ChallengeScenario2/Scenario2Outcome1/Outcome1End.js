import GoodEndPage from "../../../GoodEndPage.js";


function Outcome1End({setDisplay, username, sword, userStats}) {
    return(
        <div className='displayContainer Outcome1EndPage'>
            <div className='contentContainer'>
                <h1>Objective: Sneak Attack!!</h1>
                <p>You lunge at the Dragon's underbelly with your <span className={sword === 'Dragon Long Sword' ? 'dragonLongSword' : 'woodenSword'}>{sword}</span>...</p>
                {
                    sword === 'Dragon Long Sword' ?
                    <p>piercing it! The dragon let's out a bellowing roar and cluches its stomach! It's eyes roll back before it crashes down, lifelessly.</p> :
                    <p>only to see it splinter into a thousand pieces against the dragon's not-so-squishy underbelly. However several pieces of wood are lodged in its belly causing it to roar in pain! "AHHH! See! This is why I hate humans!" It wails as it begins to flap its wings. "Inherit this doomed planet, see if I care!" it says as it flies away, roaring and hollering in pain.</p>
                }

                {
                    sword === 'Dragon Long Sword' ?

                    <button
                        onClick={() =>{
                                setDisplay(<GoodEndPage username={username} setDisplay={setDisplay} sword={sword} userStats={userStats}/>)
                                userStats.push(`You've spilled the dragon's entrails! Yuck but yay!`)
                                userStats.push(`You've earned the moniker: Sneaky Assassin ${username}!`)
                            }
                        }
                    >Continue</button> :

                    <button
                        onClick={() =>{
                                setDisplay(<GoodEndPage username={username} setDisplay={setDisplay} sword={sword} userStats={userStats}/>)
                                userStats.push(`You've given the dragon a splinter and it flew off in pain!`)
                                userStats.push(`You've earned the moniker: Splinter Lord g${username}!`)
                            }
                        }
                    >Continue</button>
                }

            </div>
        </div>
    )
}

export default Outcome1End;