import React, {useContext, useEffect} from 'react'
import lekhaContext from '../context/lekhaContext';


import { PieChart, Pie,Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
const Expenditure = () => {
  const { data, getData } = useContext(lekhaContext);
  const categories = ["Food", "Rent", "Transportation", "Education", "Entertainment", "Health", "Miscallaneous"]; 
  const COLORS = ['#00a86b', '#0f52ba', '#0080ff', '#cc0033', '#34495E', '#EF820D', '#646C11'];
  const getExpense= (category)=>{
    const totalAmount = data.filter(item => item.category === category).reduce((sum, item) => sum + item.amount, 0); // Sum the amounts
    return totalAmount;
  }
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
            <div className="col-8">
            {categories.map((expense, index) => (
              <p key={index} className="my-2">{expense}: {getExpense(expense)}</p>
            ))}
            </div>

            
            <div className="flex items-center space-x-6">
  <div className="w-80 h-80">
    <PieChart width={320} height={320}>
      <Pie
        data={data1}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
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
    </div>
    </div>
  )
}

export default Expenditure
