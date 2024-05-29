import { useState } from "react";
import styled from "styled-components";
const Navbar = ({ setfilterName, setfilterInput, filterName }) => {
  const [isActive, setisActive] = useState(false);
  const buttonName = [
    {
      name: "All",
      value: "All",
    },
    {
      name: "Breakfast",
      value: "breakfast",
    },
    {
      name: "Lunch",
      value: "lunch",
    },
    {
      name: "Dinner",
      value: "dinner",
    },
  ];
  return (
    <NavContainer>
      <div className="topsection">
        <img src="/Foody Zone.png" alt="" />
        <input
          type="text"
          onChange={(e) => setfilterInput(e.target.value)}
          placeholder="Search Food...."
        />
      </div>

      <div className="bottomsection">
        { buttonName.map((item) => (
         filterName===item.value ?  <button style={{background:"red"}} key={item.name} onClick={() => setfilterName(item.value)}>{item.name}</button>
         : <button  key={item.name} onClick={() => setfilterName(item.value)}>{item.name}</button>
        ))}
        {/* <button
          
          onClick={() => setfilterName("All")}
        >
          All
        </button>
        <button onClick={() => setfilterName("lunch")}>Lunch</button>
        <button onClick={() => setfilterName("dinner")}>Dinner</button> */}
      </div>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 187px;
  gap: 54px;
  padding: 31px 120px;
  background-color: #2e2c2c;

  .topsection {
    display: flex;
    width: 1200px;
    height: 40px;
    justify-content: space-between;
    align-items: center;

    img {
      width: 184px;
      height: 39px;
    }
    input {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 285px;
      height: 40px;
      background-color: transparent;
      border-radius: 5px;
      padding: 10px 30px;
      border: 1px solid #ff0909;
    }
  }

  .bottomsection {
    display: flex;
    justify-content: space-around;
    gap: 14px;
    width: 326px;
    height: 31px;
    button {
      display: flex;
      align-items: center;
      width: auto;
      padding: 6px 12px;
      background-color: #ff4343;
      color: white;
      border-radius: 5px;
      border: none;
    }
    button:hover {
      background-color: #ff0909;
      color: white;
    }
  }
`;
