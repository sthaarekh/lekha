import React from "react";
import moment from "moment";

// Function to dynamically load image based on category
const getImage = (category) => {
  try {
    return require(`../images/${category.toLowerCase()}.png`);
  } catch (err) {
    // Fallback if image is not found
    return require('../images/logo.png');
  }
};

const StatementItem = (props) => {
  const { data } = props;

  return (
    <div>
      <div className="my-4">
        <div className="item">
          <div>
            <div className="item-name">
              <img
                src={getImage(data.category)}
                alt={data.category}
                style={{ width: "40px" }}
              />
              &nbsp;{data.description}
            </div>
            <div className="item-time">
              {moment(data.date).format("h:mm A MM/DD")}
            </div>
          </div>
          <div className="item-price">Rs. {data.amount}</div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default StatementItem;
