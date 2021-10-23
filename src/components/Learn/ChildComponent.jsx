import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Edit from './Edit'

export default class ChildComponent extends Component {
   state = {
       show: false,
       clickEdit: false,
       clickSave: false,
       title: "",
       jobCopy: {}
   }


   handleDeleteEle = (job) => {
       this.props.deleteEle(job);
   }

   handelClickEdit = (job) => {
       let title = 
       this.setState({
           clickEdit:true,
           clickSave: false,
           jobCopy: job
       })
   }

   handelClickSave = (titleCopy) => {
    let {jobCopy} = this.state
    this.props.editEle(jobCopy,titleCopy)
    console.log(">>> Check JobClicked ", jobCopy, "titleChange ", titleCopy)
    this.setState({
        clickSave:true,
        jobCopy: {}
    })
    }

    handleExitEdit = () => {
        this.setState({
            clickEdit: false,
        })
    }

   

    render() {
        let {arrJobs,editEle} = this.props
        let {clickEdit,clickSave} = this.state
        
        return (
            <>
            {clickEdit === false || clickSave ? 
                <>
                {this.state.show && arrJobs.length > 0 ?  <div style = {{marginTop:"2rem",textAlign:"center"}}>
                    {arrJobs.map( job => (
                        <div key={job.id} style = {{margin:"1rem 0.5rem",fontSize:"1.5rem"}}><span  style = {{margin:"1rem 1rem"}}>{job.title}-{job.salary} </span>
                            <></> <button onClick ={()=>this.handelClickEdit(job)}>Edit</button>
                            <></>  <span style={{color:"red",cursor:"pointer"}} onClick={() => this.handleDeleteEle(job)}>X</span>
                        </div>
                    ))}
                    <button onClick = {() => this.setState({show: false})} style = {{marginTop:"1rem"}}>Close</button>
                        </div>
                    : <button onClick = {() => this.setState({show: true})} style = {{display:"block",margin:"1rem auto"}}>Show</button>
                }
                </> : <Edit handelClickSave ={this.handelClickSave} handelClickEdit={this.handelClickEdit}
                      handleExitEdit = {this.handleExitEdit}
                />
            }
            </>
        )
    }
}
