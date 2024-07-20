import React,{useContext, useState} from 'react'
import LBContext from '../context/LBContext';
const AddTrans = () => {
    const context = useContext(LBContext);
    const {addTrans} = context;
    const [trans, setTrans] = useState({amount:"", description:"", tag:""})
        const handleClick=(e)=>{
            e.preventDefault();
            addTrans(trans.amount, trans.description, trans.tag );
        }
        const onChangeL=(e)=>{
            setTrans({...trans,[e.target.name]: e.target.value, tag:'lend' });  // '...' spread operator
        }
        const onChangeB=(e)=>{
            setTrans({...trans,[e.target.name]: e.target.value, tag:'borrow' });  // '...' spread operator
        }
  return (
    <div>
        <div className="row gap-1">
            <div className="col">
                <h4>Lend</h4>
                <input type="text" className="form-control my-2" placeholder='Amount' name='amount' onChange={onChangeL} required/>
                <input type="text" className="form-control my-2" placeholder='Description' name='description' onChange={onChangeL} required/>          
                <button type="button" className="btn btn-outline-primary mx-2 my-3 btnstyle" onClick={handleClick}>Add</button>
            </div>
            <div className="vr"></div>
            <div className="col">
                <h4>Borrow</h4>
                <input type="text" className="form-control my-2" placeholder='Amount' name="amount" onChange={onChangeB} required/>
                <input type="text" className="form-control my-2" placeholder='Description'  name="description" onChange={onChangeB} required/> 
                <button type="button" className="btn btn-outline-primary my-3 btnstyle" onClick={handleClick}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default AddTrans


