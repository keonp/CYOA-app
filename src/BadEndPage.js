import firebase from './firebase.js';
import { getDatabase, ref, push, get } from 'firebase/database';
import UserStatsPage from "./UserStatsPage.js";

function BadEndPage({setDisplay, username, sword, userStats}) {
    
    const addUser = (userStats) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, userStats);
    }

    // const updateUserPage = () => {
    //     const databaseArray = [];
    //     const database = getDatabase(firebase);
    //     const dbRef = ref(database);

    //     get(dbRef).then(database => {
    //         const databaseObj = database.val();
    //         for (let key in databaseObj) {
    //             databaseArray.push(databaseObj[key]);
    //         }     
    //     })
    //     return databaseArray;
    // }

    return(
        <div>
            <h1>Well, <span className="username">{username}</span></h1>
            <p>Looks like this is the end...You made some pretty interesting decisions along the way, but don't worry! If you didn't like the way things panned out I encourage you to try again! Afterall, adventurers never give up!</p>
            <p>Don't forget to take a look at how you did!</p>

            <button
            onClick={() =>{
                    setDisplay(<UserStatsPage username={username} setDisplay={setDisplay} sword={sword} userStats={userStats}/>)
                    userStats.push(`You died a miserable and/or painful death`);
                    addUser(userStats);
                    }
                }
            >User Stats</button>
        </div>
    )
}

export default BadEndPage;