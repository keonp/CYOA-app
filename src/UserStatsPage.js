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
        <div>
            <h1>Player Adventure Logs</h1>
            <div className='adventureContainer'>
            {
                fDatabase.map((adventure) => {
                    return(
                        <div className='logContainer'>
                            {
                                adventure.map(adventureTask => {
                                    return (
                                        <p className='adventureTask'>{adventureTask}</p>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
            </div>

        </div>
    )
}

export default UserStatsPage;