import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class ListUsers extends Component {

    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=2")
        this.setState({
            listUsers : res && res.data && res.data.data ? res.data.data : []
        })
    }
    
    state = {
        listUsers : []
    }

    handelDetailView = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

   
    render() {
        let {listUsers} = this.state
        return (
            <div className="list-users" style = {{textAlign:"center"}}>
                <h3>Users List</h3>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((user) => (
                        <div className = "user" key = {user.id} style = {{marginBottom:"1rem"}}
                            onClick = {() => this.handelDetailView(user)} 
                        
                        >{user.first_name} {user.last_name} </div>
                    ))
                }
            </div>
        )
    }
}
export default withRouter(ListUsers)
