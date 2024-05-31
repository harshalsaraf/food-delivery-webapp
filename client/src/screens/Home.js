import React, { useState } from "react";
import Header from "../components/Header.js";
import FoodMenu from "../components/FoodMenu.js";
import { useEffect } from "react";
import Carouselimg from "../components/Carouselimg.js";
import { Skeleton } from "antd";
import BasicModal from "../components/Modal.js";
const Home = () => {
  const [data, setData] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);

  const fetch_data = async () => {
    try {
      const response = await fetch(
        "Backend server",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();
      setData(json[0]);
      setDataCategory(json[1]);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetch_data();
    console.log(data);
  }, []);
  return (
    <div>
      <Header />
      <Carouselimg />
      {data.length === 0 && dataCategory.length === 0 ? (
        <Skeleton active />
      ) : (
        <FoodMenu data={data} data_category={dataCategory} />
      )}
      <BasicModal />
    </div>
  );
};

export default Home;
