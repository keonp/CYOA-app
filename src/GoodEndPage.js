import firebase from './firebase.js';
import { getDatabase, ref, push } from 'firebase/database';
import UserStatsPage from "./UserStatsPage.js";

function GoodEndPage({setDisplay, username, sword, userStats}) {

    const addUser = (userStats) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, userStats);
    }

    return(
        <div className='displayContainer GoodEndPageContainer'>
            <div className='contentContainer'>
                <h1>Congratulations <span className="username">{username}</span>!!</h1>
                <p>You have successfully defeated the dragon AND you made some pretty interesting decisions along the way. Feel free to try an alternative path as well and see how you fair! Afterall, adventurers never stop adventuring!</p>
                <p>Don't forget to take a look at how you did!</p>

                <button
                onClick={() =>{
                        setDisplay(<UserStatsPage username={username} setDisplay={setDisplay} sword={sword} userStats={userStats}/>)
                        userStats.push(`Congratulations! You've succeeded in vanquishing the dragon!`)
                        addUser(userStats)
                        }
                    }
                >User Stats</button>
            </div>
        </div>
    )
}

export default GoodEndPage;