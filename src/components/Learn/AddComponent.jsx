import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddComponent extends Component {
   state = {
       titleJob : "",
       salary : "",
   }

   handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.titleJob && !this.state.salary) return
        this.props.addEle(
            {
                id: Math.floor(Math.random() * 1000),
                title: this.state.titleJob,
                salary: this.state.salary
            }
        )

        this.setState({
            titleJob : "",
            salary : "",
        })
   }

   inputTitle = (event) => {
       this.setState({titleJob: event.target.value})
   }

   inputSalary = (event) => {
        this.setState({salary: event.target.value})
    }   

    

    render() {
        return (
            <div style = {{textAlign : "center",marginTop:"2rem",fontSize:"1.5rem"}}>
                <form>
                    <label htmlFor="">Job's title:</label><br/>
                    <input type="text" value={this.state.titleJob} onChange={(event) => this.inputTitle(event)}/><br/>
                    <label htmlFor="">Slary:</label><br/>
                    <input type="text" value={this.state.salary} onChange={(event) => this.inputSalary(event)}/><br/>
                    <input type="submit" style = {{marginTop:"1rem"}} onClick={(event) => this.handleSubmit(event)}/>
                </form> 
            </div>
        )
    }
}
