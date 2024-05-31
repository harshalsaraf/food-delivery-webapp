import React from "react";
import { useState} from "react";
import { Button, Select, Skeleton } from "antd";
import { useDispatchCart } from "./ContextReducer";
const FoodCard = ({
  data: { _id, CategoryName, name, img, options, description },
}) => {
  // const [selectedvalue, setselectedvalue] = useState("val1");
  const [quantityVal, setquantityVal] = useState("1");
  const [optionVal, setoptionVal] = useState(Object.keys(options[0])[0]);
  const [price, setprice] = useState(Object.values(options[0])[0]);
  let dispatch = useDispatchCart();
  const handleClick = () => {
    dispatch({
      type: "ADD",
      id: _id,
      name: name,
      quantity: quantityVal,
      size: optionVal,
      price: price * quantityVal,
    });
  };

  const handleChange = (value) => {
    const selectedOptionSet = options.find((optionSet) =>
      Object.entries(optionSet).find(
        ([key, optionValue]) => optionValue === value
      )
    );

    const selectedOptionKey = Object.keys(selectedOptionSet).find(
      (key) => selectedOptionSet[key] === value
    );
    setoptionVal(selectedOptionKey);
    setprice(selectedOptionSet[selectedOptionKey]);
  };
  const handleQuantity = (value) => {
    setquantityVal(value);
  };
  const sagOptions = () => {
    let sOp = [];
    options.map((options) => {
      if (options.half) {
        sOp.push({ value: options.half, label: "Half : " + options.half });
      }
      if (options.full) {
        sOp.push({ value: options.full, label: "Full : " + options.full });
      }
      if (options.regular) {
        sOp.push({
          value: options.regular,
          label: "Regular : " + options.regular,
        });
      }
      if (options.medium) {
        sOp.push({
          value: options.medium,
          label: "Medium : " + options.medium,
        });
      }
      if (options.large) {
        sOp.push({ value: options.large, label: "Large : " + options.large });
      }
    });
    return sOp;
  };
  return (
    <div className="food-card" id={name}>
      <img src={img} alt={<Skeleton active />} />
      <div className="food-card-text">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>Options: </h3>

        <Select
          defaultValue={sagOptions()[0].value}
          style={{ width: 130 }}
          onChange={handleChange}
          options={sagOptions()}
        />
        <Select
          value={quantityVal}
          style={{ width: 70 }}
          onChange={handleQuantity}
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
            { value: "8", label: "8" },
            { value: "9", label: "9" },
            { value: "10", label: "10" },
          ]}
        />
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Button type="dashed" style={{ width: "63%" }} onClick={handleClick}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
