import React, { useState } from "react";
import FoodCard from "./FoodCard";
import { Input } from "antd";
const { Search } = Input;
const FoodCategory = ({ category, foods }) => {
  return (
    <div>
      <h2 className="food-menu-title">{category}</h2>
      <div className="food-cards">
        {foods.length === 0 ? (
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "1",
            }}
          >
            No Data Found!
          </p>
        ) : (
          foods.map((food) => <FoodCard key={food.id} data={food} />)
        )}
      </div>
    </div>
  );
};

const FoodMenu = ({ data, data_category }) => {
  const [searchData, setsearchData] = useState("");
  const [loading_new, setloading_new] = useState(false);
  const categories = Array.from(
    new Set(data_category.map((category) => category.CategoryName))
  );
  const onSearch = (value, _e, info) => {
    setloading_new(true);
    setsearchData(value);
    setTimeout(() => setloading_new(false), 1000);
  };

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        loading={loading_new}
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ marginTop: "15px", marginBottom: "15px" }}
      />
      {categories.map((category) => (
        <FoodCategory
          category={category}
          foods={data.filter(
            (food) =>
              food.CategoryName === category &&
              food.name.toLowerCase().includes(searchData.toLowerCase())
          )}
        />
      ))}
    </div>
  );
};

export default FoodMenu;
