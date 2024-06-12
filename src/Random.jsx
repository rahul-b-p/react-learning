import React, { Component } from 'react'

export default class Random extends Component {

  constructor(props){
    super(props)
    console.log(props);

    this.state ={cname:'alto'}
  }

  change(data){
    this.setState({cname:data})
  }

  render() {
    return (
     <>
        <div>Random</div>
        <p>Data Shared is : {this.props.user}</p>
        <p>car is :{this.state.cname}</p>

        <button className='btn btn-danger mb-4' onClick={()=>this.change('swift')} >click</button>
     </>
    )
  }
}
