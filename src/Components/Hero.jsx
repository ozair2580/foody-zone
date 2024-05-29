import { useEffect, useState } from "react";
import styled from "styled-components";
const BASE_URL='http://localhost:9000';

const Hero = ({ ApiData ,filterName,filterInputData,iserror}) => {
  if(iserror) return iserror; 
  
  return (
    <HeroSection>
      <div className="centresection">
       
          {
              



            ApiData.length>0   ? ApiData.map((item)=> 
            ( item.type===filterName || filterName==="All") &&  <Card key={item.name}>
            <div className="CardUpperDiv">
            <div className="CardImage">
              <img src={BASE_URL+item.image} alt="" />
            </div>
            <div className="CardText">
              <h1>{item.name}</h1>
              <p>
                {item.text}
              </p>
            </div>
          </div>

          <div className="cardPrice">
            <button>${item.price}</button>
          </div>
          </Card>
        //   : <Card key={item.name}>
        //   <div className="CardUpperDiv">
        //   <div className="CardImage">
        //     <img src={BASE_URL+item.image} alt="" />
        //   </div>
        //   <div className="CardText">
        //     <h1>{item.name}</h1>
        //     <p>
        //       {item.text}
        //     </p>
        //   </div>
        // </div>

        // <div className="cardPrice">
        //   <button>${item.price}</button>
        // </div>
        // </Card>
            )
            :<h1>Loading..</h1> 
            
        }

        
        
      </div>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.main`
  background-image: url("/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 785px;
  padding: 119px 190px;
  .centresection {
    width: auto;
    height: 366px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  width: 340px;
  height: 167px;
  display: flex;
  flex-direction: column;
  border-top: 0.66px solid #98f9ff;
  border-bottom: 0.66px solid #eabfff;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .CardUpperDiv {
    position: relative;
    width: 318px;
    height: 133px;
    display: flex;
    align-self: center;
    gap: 17px;

    .CardImage {
      display: flex;
      width: 133px;
      height: 133px;
    }
    .CardText {
      display: flex;
      flex-direction: column;
      align-self: center;
      width: 168px;
      height: 86;
      color: white;
      gap: 8px;
      h1 {
        font: 12px;
        font-weight: 400;
      }
      p {
        font-size: 10px;
      }
    }
  }

  .cardPrice {
    display: flex;
    width: 318px;
    height: 30px;
    position: absolute;
    margin-top: 120px;
    align-self: bottom;
    flex-direction: row-reverse;

    button {
      display: flex;
      align-items: center;
      background-color: #ff4343;
      justify-content: center;
      color: white;
      width: 57px;
      height: 25px;
      border-radius: 5px;
      border: none;
    }
    button:hover {
      background-color: red;
    }
  }
`;
