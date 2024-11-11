import React, {useContext, useEffect} from 'react'
import lekhaContext from '../context/lekhaContext';


import {BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie,Cell, Legend, Tooltip } from 'recharts';

const Expenditure = () => {
  const { data, getData } = useContext(lekhaContext);
  const COLORS = ['#00a86b', '#0f52ba', '#0080ff', '#cc0033', '#34495E', '#EF820D', '#646C11'];
  const currentMonthIndex = new Date().getMonth();

  const categories = ["Food", "Rent", "Transportation", "Education", "Entertainment", "Health", "Miscallaneous"]; 
  const getExpense = (category) => {
    const totalAmount = data
      .filter(item => {
        const itemMonth = new Date(item.date).getMonth(); // Extract the month from the date
        return itemMonth === currentMonthIndex && item.category === category; // Match current month and category
      })
      .reduce((sum, item) => sum + item.amount, 0); 
    return totalAmount;
  };
  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const getMonthlyExpense = (monthIndex) => {
    const totalAmount = data
      .filter(item => new Date(item.date).getMonth() === monthIndex) 
      .reduce((sum, item) => sum + item.amount, 0); 
    return totalAmount;
  };
  

  const lastFiveMonths = [];
  for (let i = 5; i > 0; i--) {
    const monthIndex = (currentMonthIndex - i + 12) % 12; 
    lastFiveMonths.push(months[monthIndex]);
  }
  
  const data2 = lastFiveMonths.map((month, index) => ({
    name: month,
    value: getMonthlyExpense(currentMonthIndex - (5 - index))
  }));


  const data1 = categories.map(expense => ({
    name: expense,
    value: getExpense(expense)
  }));

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
       <div className='row '>
            <h3 className='text-[30px]'>Expenditure</h3>
            {/* <div className="col-8">
            {categories.map((expense, index) => (
              <p key={index} className="my-2">{expense}: {getExpense(expense)}</p>
            ))}
            </div> */}

            
            <div className="flex items-center space-x-6">
              <div className="w-96 h-96">
                <PieChart width={384} height={384}>
                  <Pie
                    data={data1}
                    cx="40%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data1.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                <Legend layout="vertical" align="right" verticalAlign="middle" />
                </PieChart>
              </div>
            </div>
            
            <BarChart width={500} height={300} data={data2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#87BB62" />
            </BarChart>
    

       </div>
    </div>
  )
}

export default Expenditure
