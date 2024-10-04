import React from 'react';
import moment from 'moment';
import image from '../images/food.jpg'
const StatementItem = (props) => {
  const {data} = props;
  return (
    <div>
      <div className="my-4">
        <div className="item">
          <div>
            <div className="item-name"><img src={image} alt='img' style={{width:"40px"}}></img>&nbsp;{data.description}</div>
            <div className="item-time">{moment(data.date).format('h:mm A MM/DD')}</div>
          </div>
          <div className="item-price">Rs. {data.amount}</div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default StatementItem;
