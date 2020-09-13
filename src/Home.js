import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/Welcome-XCM/1-Col-LG_PrimeBanner_UK_1500x500.jpg"
        alt="amazon"
      ></img>
      <div className="home_container">
        <Product
          id="12345"
          title="New branded water resistent watch.. look cool feels cool"
          price={18.5}
          rating={4}
          image={
            "https://weneedfun.com/wp-content/uploads/2016/10/Watch-Wallpapers-HD22.jpg"
          }
        ></Product>
        <Product
          id="23456"
          title="Attitude is every thing ..change your attitude and change your life"
          price={12.5}
          rating={4}
          image={
            "https://rukminim1.flixcart.com/image/1408/1408/book/0/7/1/attitude-is-everything-change-your-attitudechange-your-life-original-imae7c3vt44hfvjr.jpeg?q=90"
          }
        ></Product>
      </div>
      <div className="home_container">
        <Product
          id="34567"
          title="The best mobile collection flexible to use"
          price={118.5}
          rating={5}
          image={
            "http://drop.ndtv.com/TECH/product_database/images/513201564925PM_635_general_mobile_4g.jpeg"
          }
        ></Product>
        <Product
          id="45678"
          title="Wash your cloths quickly and lovely"
          price={22.5}
          rating={4}
          image={
            "https://brain-images-ssl.cdn.dixons.com/7/8/10140687/l_10140687_001.jpg"
          }
        ></Product>
        <Product
          id="56789"
          title="Making tour with lovely packing cheekss"
          price={13.5}
          rating={5}
          image={
            "https://i.pinimg.com/originals/0f/bc/49/0fbc49426d5ff4a1c7c4495c8f62bfab.jpg"
          }
        ></Product>
      </div>
      <div className="home_container">
        <Product
          id="67899"
          title="flexible 1000 times washable product give coolest look
          "
          price={7.5}
          rating={5}
          image={
            "https://s3-eu-west-1.amazonaws.com/images.linnlive.com/de0cfdb94597782ae63b8e7d117ed23b/52e88401-5375-4103-a244-99f9bdffe37f.jpg"
          }
        ></Product>
        <Product
          id="12345"
          title="Made of woolen leather with finest peace"
          price={9.5}
          rating={4}
          image={
            "http://selfninja.com/wp-content/uploads/2017/12/Dress-Shoe.jpg"
          }
        ></Product>
      </div>
    </div>
  );
}

export default Home;
