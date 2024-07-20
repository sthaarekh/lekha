import React, { Component } from 'react'
import pie from '../images/pie.png'
export default class Analytics extends Component {
  render() {
    return (
      <div className='container'>
        <div className="alert alert-success my-2 text-center" role="alert">
        <h6>Hurray you saved this much amount of money in previous month.</h6>

        </div>  
        <div className="alert alert-primary text-center" role="alert">
            <p><h2>Capital : 10000</h2></p>
            <p><h2>Remainigns : 5000</h2></p>
        </div>
        <div className="slider bg-success bg-gradient">
        <p>slider</p>
        </div>

        <div className="row">
            <div className="col bg-secondary mx-2">Saving goals</div>
            <div className="col bg-secondary mx-2">Calender with success failure</div>
            <div className="col bg-secondary mx-2">Monthly chart</div>
        </div>

        <div className='row'>
            <h3 className='my-4'>Expenditure</h3>
            <div className="col-8">
                <p className='my-2'>Fooding: </p>
                <p className='my-2'>Rent: </p>
                <p className='my-2'>Transportatiin: </p>
                <p className='my-2'>Education: </p>
                <p className='my-2'>Entertainment: </p>
                <p className='my-2'>Clothing: </p>
                <p className='my-2'>Health: </p>
                <p className='my-2'>Miscallaneous: </p>
            </div>
            <div className="col-4">
                <img src={pie} alt="" height='250' />
            </div>
        </div>
      </div>
    )
  }
}
