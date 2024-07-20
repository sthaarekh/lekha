import React, { useState, useContext } from 'react';
import lekhaContext from '../context/lekhaContext';

const AddItem = () => {
    const context = useContext(lekhaContext);
    const { addData } = context;
    const [data, setData] = useState({ amount: "", description: "", category: "" }); // default category is "Lend"
    const categories = ["Food", "Health", "Clothes", "Transportation", "Entertainment", "Others"]; // add more categories as needed

    const handleClick = (e) => {
        e.preventDefault();
        addData(data.amount, data.description, data.category);
    };

    const onChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleCategoryChange = (e) => {
        setData({ ...data, category: e.target.value });
    };

    return (
        <div>
            <div className="row  my-4">
                <div className="col">

                    <div className='mx-2'>
                        <h3>Add Item</h3>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col mx-2 my-2" style={{ width: "45%" }}>
                            <input type="text" className="form-control" placeholder='Amount' name='amount' onChange={onChange} />
                        </div>
                        <div className="col mx-2 my-2" style={{ width: "65%" }}>
                            <input type="text" className="form-control" placeholder='Description' name='description' onChange={onChange} />
                        </div>
                    </div>

                    <div className="row mx-2 my-2">
                        <select className="form-select" name='category' value={data.category} onChange={handleCategoryChange}>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="row mx-2 my-2">
                        <button type="button" className="btn btn-outline-primary mx-2 my-3 btnstyle" onClick={handleClick}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;