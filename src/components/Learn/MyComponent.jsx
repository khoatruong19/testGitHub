import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddComponent from './AddComponent'
import ChildComponent from './ChildComponent'

export default class MyComponent extends Component {
    

    state = {
        arrJobs : [
            {id:"abc",title:"singer",salary:"1000"},
            {id:"abcd",title:"nba player",salary:"2000"},
            {id:"abcde",title:"gamer",salary:"5000"},
        ]
    }

    addEle = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs,job],
        })
    }

    deleteEle = (job) => {
        let newArr  = this.state.arrJobs
        newArr = newArr.filter(rest => rest.id !== job.id )
        this.setState({
            arrJobs: newArr
        })
       
    }

    editEle = (job,titleCopy) => {
        let {arrJobs} = this.state
        const objIndex = arrJobs.findIndex(obj => obj.id === job.id);

        // make new object of updated object.   
        const updatedObj = { ...arrJobs[objIndex], title: titleCopy};

        // make final new array of objects by combining updated object.
        const updatedProjects = [
        ...arrJobs.slice(0, objIndex),
        updatedObj,
        ...arrJobs.slice(objIndex + 1),
        ]

        this.setState(
            {
                arrJobs : updatedProjects
            }
        )

    }

    render() {
        return (
            

            <div>
                <h1 style = {{textAlign:"center"}}>Let's go</h1>
                <AddComponent addEle = {this.addEle}/>
                <ChildComponent arrJobs = {this.state.arrJobs} deleteEle={this.deleteEle} editEle={this.editEle}/>
            </div>
        )
    }
}
