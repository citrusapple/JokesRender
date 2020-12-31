import Jokes from "./Jokes"

function JokesParent(){
    return(
        <div>
            <Jokes 
                joke={{question: "My wife told me to stop acting like a flamingo.", 
                answer: "I had to put my foot down." }
            }/>
            <Jokes
                joke ={{question: "What is Whitney Houston’s favorite type of coordination?0", 
                answer:"HAAANNNNND EYEEEEEEE."
            }}/>
        </div>
    )
}

export default JokesParent;