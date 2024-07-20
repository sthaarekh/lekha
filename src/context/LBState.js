import React, { useState } from 'react'
import LBContext from './LBContext'

const LBState = (props) => {
  const host = "http://localhost:9010"
  const transI = [
  ]
  const [trans, setTrans] = useState(transI);

  //Get transaction data
  const getTrans = async () => {
    const response = await fetch(`${host}/api/trans/gettrans`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const json = await response.json();
    setTrans(json);
  }
  //Add a tramscation
  const addTrans = async(amount, description, tag) => {
    const response = await fetch(`${host}/api/trans/addtrans`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({amount,description,tag}),
    });
    let newTrans = {
      "_id": "666c764d4c9b39sff582bab2w1",
      "amount": amount,
      "description": description,
      "tag": tag,
      "__v": 0
    };
    setTrans(trans.concat(newTrans));
  }
  const deleteTrans = async(id) => {
    const response = await fetch(`${host}/api/trans/deletetrans/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newTrans = trans.filter((transI) => { return transI._id !== id })
    console.log("Deleting tranaction with id: " + id)
    setTrans(newTrans);
  }
  return (
    <LBContext.Provider value={{ trans, getTrans, addTrans, deleteTrans}}>
      {props.children}
    </LBContext.Provider>
  )
}

export default LBState
