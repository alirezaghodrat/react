import React from 'react'
import Rainbow from "../hoc/Rainbow";

const About = (props) => {
    // console.log(props)
    // setTimeout(()=>{
    //     props.history.push('./contact')
    // },2000)
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>about page</p>
        </div>
    )
}
export default Rainbow(About)