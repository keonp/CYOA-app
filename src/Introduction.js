import Main from './Main.js';

function Introduction({setDisplay, username}) {
    return(
        <div>
            <h1>Introduction</h1>
            <p>Ah yes! It's been so long, <span>{username}</span>. I hardly recognized you.</p>
            <p>Alas, I wish it could be under better circumstances. There have been a dragon terrorizing our village as of late and I don't think we can survive another attack...</p>
            <p>I hate to be a burden, but do you think you could help us by slaying the dragon? If you don't have the necessary equipment, I can tell you where to go to get what you need</p>
            <p>What do you say?</p>

            <button onClick={() => setDisplay(<Main username={username} setDisplay={setDisplay} />)}>Sure</button>
            <button onClick={() => setDisplay(<Main username={username} setDisplay={setDisplay} />)}>Heck Yea!</button>
        </div>
    )
}

export default Introduction;