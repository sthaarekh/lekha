import React, { Component } from 'react'
import Expenditure from './Expenditure'
export default class Analytics extends Component {
  render() {
    return (
      <div className='container mx-auto p-4'>
        {/* <div className="alert alert-success my-2 text-center" role="alert">
        <h6>Hurray you saved this much amount of money in previous month.</h6>
        <Monetary/>
        </div>  
       
        <div className="slider bg-success bg-gradient">
        <p>slider</p>
        </div>

        <div className="row">
            <div className="col bg-secondary mx-2">Saving goals</div>
            <div className="col bg-secondary mx-2">Calender with success failure</div>
            <div className="col bg-secondary mx-2">Monthly chart</div>
        </div> */}

       <Expenditure/>
      </div>
    )
  }
}
