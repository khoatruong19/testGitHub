import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./Edit.scss"

export default class Edit extends Component {
    state = {
        title:"",
    }

    handelOnChange = event => {
        this.setState({title : event.target.value})
    }

    render() {
        let {title} = this.state
        let {handelClickSave,handelClickEdit,handleExitEdit} = this.props
        return (
            <div className = "edit-container">
                <input type="text" className = "edit-input" value= {title} onChange ={(event) => this.handelOnChange(event)}/>

                <button className="save-btn" onClick = {() => handelClickSave(title)}>Save</button>
                <h2 className ="edit-exit" onClick = {() => handleExitEdit()}>X</h2>
            </div>
        )
    }
}
