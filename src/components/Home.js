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
    <div className='container'>
                <div className="row">
                    <div className="col">
                    <AddItem/>
                    </div>
                    <div className="col">
                        <div className="row">{
                        trans.map((trans)=>{
                            return <TransItem key={trans._id} trans={trans}/>;
                        })
                    }
                    </div>
                    </div>
                </div>
                <Transaction/>
                <Statements/>
            </div>
            
  )
}

export default Home

