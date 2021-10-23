import {React,useState,useEffect} from 'react'
import "./Feelbox.css"

const Feelchoice = ({title,desc,motivate,closePop}) =>{
    return (
        <div className="pop_up-container">
            <h1>{title}</h1>
            <p>{desc}</p>
            <button className="expression-btn" onClick={closePop}>{motivate}</button>
        </div>
    )
}

const Feelbox = () => {
    const [feeling, setFelling] = useState("")


    const goodHandel = (expression) => {
        setFelling(expression)
    }

    const closePop = () =>{
        setFelling("")
    }
    
    switch(feeling){
        case "good":
            return (
                <Feelchoice title ="Let's go,dude!" desc="Keep moving forward!!" motivate="Sure!!!" closePop={closePop} />
            )
        case "normal":
            return (
                <Feelchoice title ="Well, try something fun!" desc="Have a nice day!!"  motivate="I will!!!" closePop={closePop}/>
            )
        case "bad":
            return (
                <Feelchoice title ="Hmm, sorry to hear that!" desc="But hey, that's how life works, cheer up, dude!!" motivate="Thanks, buddy!!!" closePop={closePop}/>
            )
    }

    return (
        <div className = "container">
            <h1 className="question">How are you doing?</h1>
            <ul className = "expression-choices">
                <li onClick = {()=>goodHandel("good")}>
                Good
                </li>
                <li onClick = {()=>goodHandel("normal")}>
                   Normal
                </li>
                <li onClick = {()=>goodHandel("bad")}>
                    Bad
                </li>
            </ul>
        </div>
    )
    
}

export default Feelbox
