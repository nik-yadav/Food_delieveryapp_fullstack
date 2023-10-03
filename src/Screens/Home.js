import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:8000/api/foodData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });

    response = await response.json();
    setfooditem(response[0]);
    setFoodCat(response[1]);

    //console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data) => {
            return (
              <div>
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {fooditem.length > 0 ? (
                  // Your code here if fooditem.length > 0
                  // For example:
                  <div>Food item exists</div>
                ) : (
                  "No such Data Exist"
                )}
              </div>
            );
          })
        ) : (
          <div>"""""""""""""""" </div>
        )}
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
