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
    <div className='mt-19'>
       <div className="grid grid-cols-[1fr_auto_1fr]">
        <div className="pr-4 pl-4">
          <h4 className="text-2xl">Lend</h4>
          <input type="text" className="border border-gray-300 rounded-lg p-2 w-full my-2" placeholder="Amount" name="amount" onChange={onChangeL} required/>
          <input type="text" className="border border-gray-300 rounded-lg p-2 w-full my-2" placeholder="Description" name="description" onChange={onChangeL} required/>
          <button type="button" className="border border-blue-500 text-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white transition w-40" onClick={handleClick} >
            Add
          </button>
        </div>

        <div className=" bg-gray-300 w-[4px] h-full"></div>

        <div className="pr-4 pl-4">
          <h4 className="text-2xl">Borrow</h4>
          <input type="text" className="border border-gray-300 rounded-lg p-2 w-full my-2" placeholder="Amount" name="amount" onChange={onChangeB} required/>
          <input type="text" className="border border-gray-300 rounded-lg p-2 w-full my-2" placeholder="Description" name="description" onChange={onChangeB} required/>
          <button type="button" className="border border-blue-500 text-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white transition w-40" onClick={handleClick}>
            Add
          </button>
        </div>
</div>

    </div>
  )
}

export default AddTrans


