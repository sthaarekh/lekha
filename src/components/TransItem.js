import React, { useContext } from 'react';
import LBContext from '../context/LBContext';

const TransItem = (props) => {
  const context = useContext(LBContext);
  const { deleteTrans } = context;
  const { trans } = props;

  const handleDelete = () => {
    if (window.confirm(`Do you want to delete the transaction: ${trans.description}?`)) {
      deleteTrans(trans._id);
    }
  };

  return (
    <div className="my-3">
      <div className="min-w-[200px] rounded overflow-hidden shadow-lg">
        <div className="p-4">
          <h2 className="text-3xl">Rs. {trans.amount}</h2>
          <hr className="my-4" />
          <p className="text-gray-700 text-xl">{trans.description}</p>
          <i
            className="fa-regular fa-trash mt-6 text-gray-500 hover:text-gray-700 cursor-pointer ml-1"
            onClick={handleDelete}
          >
            &nbsp; Resolved
          </i>
        </div>
      </div>
</div>

  );
};

export default TransItem;