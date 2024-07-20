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
    <div className="col-md-4">
      <div className="my-3">
        <div className="card cardStyle">
          <div className="card-body">
            <h2 className="card-title">Rs. {trans.amount}</h2>
            <hr />
            <p className="card-text">{trans.description}</p>
            <i className="fa-regular fa-trash mx-2" onClick={handleDelete}> &nbsp; Resolved</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransItem;