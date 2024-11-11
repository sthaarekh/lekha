import React from 'react'

export default function Monetary() {
  return (
    <div>
       <div className="alert alert-primary text-center" role="alert">
            <p><h5>Capital : 10000</h5></p>
        
            <p><h5>Do you want to add the capital?</h5>
            <button type="button" className="btn btn-outline-primary mx-2 my-3 btnstyle" onClick="">Add</button>
            </p>
        </div>
        <div className="alert alert-primary text-center" role="alert">
            <p><h5>Lend Amount : Rs. 10000</h5></p>
            <p><h5>Borrow Amount : Rs. 5000</h5></p>
        </div>
    </div>
  )
}
