import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from "react-router-dom"

class DetailUser extends Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        let id = this.props.match.params.id
        
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        
        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}
        })
    }

    handelBackBtn = () =>{
        this.props.history.push(`/user`)
    }


    render() {
        let {user} = this.state
        let isEmpty = Object.keys(user).length === 0;
        return (
            <>
                {isEmpty === false ?
                    <>
                        <div className="user-detail">
                            <div className="name">{user.first_name} {user.last_name}</div>
                            <div className="email">{user.email}</div>
                            <img src={user.avatar} /><br/>
                            <button onClick = {() => this.handelBackBtn()}>Back</button>
                        </div>

                    </> : <h1>WAITING...</h1>
                }
            </>
        )
    }
}

export default withRouter(DetailUser)
