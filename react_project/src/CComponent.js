import React,{Component} from 'react'
import {Menu} from "./Menu";
export default class CComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:"Alex"

        }
    }
    render(){
    return(
        <div>
            <Menu/>
            <h1>Class component {this.state.name}</h1>
        </div>
    );

    }
}
CComponent.defaultProps = {name:"alex"}