import React from 'react'
import Feelbox from './Feelbox'
import "./Main.css"
import { connect } from 'react-redux'
const Main = (props) => {
    console.log("check redux props, ",props)
    let userArr =  props.dataRedux

    const handelDelete = (user) => {
        props.deleteUser(user)
    }

    const handelAdd = () => {
        props.addUser()
    }

    return (
        <div className="main">
            <Feelbox/>
            <div className="users" style = {{fontSize:"1.5rem"}}>
                {userArr && userArr.length > 0 && 
                    userArr.map(user => (
                        <div className="user" key = {user.id}>{user.name} 
                            <span style = {{color:"red"}}
                                onClick = {() => handelDelete(user)}>X
                            </span>
                        </div>
                    ))
                }
                 <button style = {{color:"green"}}
                                onClick = {() => handelAdd()}>Add
                            </button>
            </div>
        </div>
    )
}

const linkData = (state) =>{
    return {dataRedux : state.users}
}

const changeData = (dispatch) => {
    return {
        deleteUser: (user) => dispatch({type:"DELETE_USER", payload: user}),
        addUser: () => dispatch({type:"ADD_USER"}),
    }
}

export default connect(linkData,changeData)(Main)
