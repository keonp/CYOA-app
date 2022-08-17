import firebase from './firebase.js';
import { getDatabase, ref, get} from 'firebase/database';
import { useState, useEffect } from 'react';

function UserStatsPage() {
    const [fDatabase, updatefDatabase] = useState([]);

    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        get(dbRef).then(database => {
            const array = [];
            const databaseObj = database.val();

            for (let key in databaseObj) {
                array.push(databaseObj[key]);
            }
            updatefDatabase(array); 
        })
    }, [])

    return(
        <div className='userStatsContainer'>
            <h1>Player Adventure Logs</h1>
            <div className='adventureContainer'>
            {
                fDatabase.map((adventure, key) => {
                    return(
                        <div className='logContainer' key={key}>
                            <ol>
                                {
                                    adventure.map((adventureTask, index) => {
                                        return (
                                            <li key={index}>
                                                <p className='adventureTask'>{adventureTask}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    )
                })
            }
            </div>

        </div>
    )
}

export default UserStatsPage;