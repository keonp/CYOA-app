
function ChallengeS1Option1({setDisplay, username, sword}) {
    return(
        <div>
            <h1>Objective: Defeat the Dragon!</h1>
            {
                sword === 'Dragon Long Sword' ?
                    <p>A bolt of lightning breaks through the sky and just before it makes contact with your head, you swing your <span className="dragonLongSword">{sword}</span> at the bolt. The lightning strike is deflected on towards a nearby pillar and though feel <em>some</em> residual effects of the lightning, you are safe for the most part. A lesser sword would have resulted in your untimely demise!</p> :
                    <p>A bolt of lightning breaks through the sky and just before it makes contact with your head, you swing your <span className="woodenSword">{sword}</span> at the bolt. Upon contact, your sword is almost immediately vaporized by the heat of the plasma from the lightning. The strike then begins to travel through your body before it exits through your feet, leaving you stunned...</p>
            }
            <p>Then, from the clouds above, the dragon flies down breathing lightning in all directions!</p>
        </div>
    )
}

export default ChallengeS1Option1;