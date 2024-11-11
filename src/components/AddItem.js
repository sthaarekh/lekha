import React, { useState, useContext } from 'react';
import lekhaContext from '../context/lekhaContext';

const AddItem = () => {
    const context = useContext(lekhaContext);
    const { addData } = context;
    const [data, setData] = useState({ amount: "", description: "", category: "" }); // default category is "Lend"
    const categories = ["Food", "Rent", "Transportation", "Education", "Entertainment", "Health", "Miscallaneous"];   
    const payment = ["Self", "Borrow"];

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
          <div className="my-4">
            <div className="mx-2">
              <h3 className='text-3xl m-4'>Add Item</h3>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-4">
              <div className="mx-2 my-2">
                <input type="text" className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Amount" name="amount" onChange={onChange}/>
              </div>
              <div className="mx-2 my-2">
                <input type="text" className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Description" name="description" onChange={onChange}/>
              </div>
            </div>

            <div className="grid grid-cols-[68%_30%]">
              <div className="ml-6">
                <div className="relative">
                  <select className="block appearance-none w-full px-3 py-2 text-base border border-blue-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300" name="category" value={data.category} onChange={handleCategoryChange} >
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mr-3 ml-3 flex justify-end">
                <div className="relative w-full">
                  <select className="block appearance-none w-full px-3 py-2 text-base border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300" name="payment" >
                    {payment.map((paymentMethod, index) => (
                      <option key={index} value={paymentMethod}>
                        {paymentMethod}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="m-6">
              <button type="button" className="border w-40 border-blue-500 text-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white transition" onClick={handleClick} >
                Add
              </button>
            </div>
          </div>

        </div>
    );
};

export default AddItem;