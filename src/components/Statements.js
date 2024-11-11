import React, { useContext, useEffect } from 'react';
import lekhaContext from '../context/lekhaContext';
import StatementItem from './StatementItem';

const Statements = () => {
  const context = useContext(lekhaContext);
  const { data, getData } = context;

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className=" mt-10">
        <h2 className='text-3xl m-4'>Statements</h2>
        <hr />
        {data.slice().reverse().map((item) => (
          <StatementItem key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Statements;
