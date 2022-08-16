import firebase from './firebase.js';
import { getDatabase, ref, get } from 'firebase/database';

function UserStatsPage() {
    

    function updateUserPage() {
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        get(dbRef).then(database => {
            const databaseObj = database.val();
            for (let key in databaseObj) {
                const array = databaseObj[key];
                // console.log(databaseObj[key])
                array.map(userEvent => {
                    return (
                        <div>
                            <li>{userEvent}</li>
                        </div>
                    )
                })
            }     
        })
    }
    // const dataArray = updateUserPage();
    // console.log(dataArray);
   

    return(
        <div>
            {
                updateUserPage()
            }

        </div>
    )
}

export default UserStatsPage;