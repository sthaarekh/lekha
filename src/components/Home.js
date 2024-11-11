import React, { useContext, useEffect } from 'react'
import Statements from './Statements'
import AddItem from './AddItem'
import Transaction from './Transaction'
import TransItem from './TransItem'
import LBContext from '../context/LBContext';

const Home = () => {
    const context = useContext(LBContext);
    const {trans, getTrans} = context;
    useEffect(() => {
        getTrans();
        // eslint-disable-next-line
    }, [])
  return (
   <div className="container mx-auto p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="col">
      <AddItem />
    </div>
    <div className="col">
      <div className="flex space-x-2">
        {trans.map((transaction) => (
          <TransItem key={transaction._id} trans={transaction} />
        ))}
      </div>
    </div>
  </div>
  <Transaction />
  <Statements />
</div>

            
  )
}

export default Home

