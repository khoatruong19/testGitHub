import React from 'react'
import {Button} from "@material-ui/core"
import {Person} from "@material-ui/icons"
import useStyles from "./useStyles"
const Main = () => {
    const classes = useStyles()
    return (
        <div>
            <Button variant ="contained" className = {classes.btn}
                startIcon = {<Person/>}
                size ="large"
            >Hello World</Button>
        </div>
    )
}

export default Main
