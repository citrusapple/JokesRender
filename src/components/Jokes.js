

function Jokes(props){

    return(    
        <div>
            <p>Question:{props.joke.question}</p>
            <p>Answer:{props.joke.answer}</p>
        </div>
    )
}
export default Jokes;