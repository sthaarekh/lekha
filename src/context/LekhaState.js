import React, { useState } from 'react'
import lekhaContext from './lekhaContext'
const host = "http://localhost:9010"

const NoteState = (props) => {
  const dataI = [
  ]
  const [data, setData] = useState([dataI]);

  //Get data from server
  const getData = async () => {
    const response = await fetch(`${host}/api/data/getexpense`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setData(json);
  }


  //Add a data
  const addData = async(amount, description, category) => {
    const response = await fetch(`${host}/api/data/addexpense`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({amount,description, category}),
    });
    let dataN = {
      "_id": "666c764d4c9b39sff582bab2w123",
      "amount": amount,
      "description": description,
      "category": category,
      "__v": 0
    };
    setData(data.concat(dataN));
  }

  return (
    <lekhaContext.Provider value={{ data, getData, addData }}>
      {props.children}
    </lekhaContext.Provider>
  )
}

export default NoteState
