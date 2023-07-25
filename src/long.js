import { useState } from "react";
import { userContext } from "./Context";
import Header from "./Header";
import "./App.css";
import { Content } from "./Content";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(800);
  const [product3, setProduct3] = useState(300);

  return (
    <userContext.Provider value={"สมชาย"}>
      <div className="App">
        <Header />
        <Content />
        <div>
          <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
          <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice} บาท</h3>
        </div>
        <div>
          <img src="ปลาส้มทรงเครื่องสมุนไพร.jpg" alt="ปลาส้มทรงเครื่องสมุนไพร" width="15%" />
          <br />
          ปลาส้มทรงเครื่องสมุนไพร ราคา {product1} บาท
        </div>
        <button
          onClick={() => {
            setTotalItems(totalItems + 1);
            setTotalPrice(totalPrice + product1);
          }}
        >
          เพิ่มเข้าตะกร้า
        </button>
        <button
          onClick={() => {
            if (totalItems > 0) {
              setTotalItems(totalItems - 1);
              setTotalPrice(totalPrice - product1);
            }
          }}
        >
          นำออกจากตะกร้า
        </button>
        <div>
          <img src="หลนเค็มบักนัด.jpg" alt="หลนเค็มบักนัด" width="15%" />
          <br />
          หลนเค็มบักนัด ราคา {product2} บาท
        </div>
        <button
          onClick={() => {
            setTotalItems(totalItems + 1);
            setTotalPrice(totalPrice + product2);
          }}
        >
          เพิ่มเข้าตะกร้า
        </button>
        <button
          onClick={() => {
            if (totalItems > 0) {
              setTotalItems(totalItems - 1);
              setTotalPrice(totalPrice - product2);
            }
          }}
        >
          นำออกจากตะกร้า
        </button>
        <div>
          <img src="ัผดไทหมื่นปีห่อใบบัว.jpg" alt="ผัดไทหมื่นปีห่อใบบัว" width="15%" />
          <br />
          ผัดไทยหมื่นปีห่อใบบัว ราคา {product3} บาท
        </div>
        <button
          onClick={() => {
            setTotalItems(totalItems + 1);
            setTotalPrice(totalPrice + product3);
          }}
        >
          เพิ่มเข้าตะกร้า
        </button>
        <button
          onClick={() => {
            if (totalItems > 0) {
              setTotalItems(totalItems - 1);
              setTotalPrice(totalPrice - product3);
            }
          }}
        >
          นำออกจากตะกร้า
        </button>
      </div>
    </userContext.Provider>
  );
}

export default App;