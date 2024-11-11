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
    <div className="my-4">
      <div className="flex justify-between items-center p-4 shadow-sm bg-white rounded-lg">
        <div className="flex items-center">
          <img
            src={getImage(data.category)}
            alt={data.category}
            className="w-12 h-12 m-3"
          />
          <div>
            <div className="text-2xl">{data.description}</div>
            <div className="text-gray-500 text-lg">
              {moment(data.date).format("h:mm A MM/DD")}
            </div>
          </div>
        </div>
        <div className="text-2xl">Rs. {data.amount}</div>
      </div>
  <hr className="my-2 border-gray-300" />
</div>


  );
};

export default StatementItem;
