function Challenge({setDisplay, username, sword}) {
    return (
        <div>
            <h1>Objective: Defeat the Dragon!</h1>
            <p>You make your way to the ruins where the dragon is said to have setup it's lair. The sky has darkened and you hear the crackling of thunder in the sky. The air smells of wet grass and smoke. The feeling of anxiousness has sharpened your senses and still, you cannot see the dragon. However, the hairs on your arm begin to stand on their own and so does the hair on your head. This gives you momentary pause before your eyes widen and you...</p>
            <button>Pull out your <span className="dragonLongSword">{sword}</span></button>
        </div>
    )
}

export default Challenge;