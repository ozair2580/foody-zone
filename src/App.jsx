
import styled from 'styled-components'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { useEffect, useState } from 'react';
const BASE_URL='https://foody-zone-6.onrender.com/';
function App() {
 const [ApiData,setApiData]=useState([]);
 const [filterName,setfilterName]=useState("All");
 const [filterInput,setfilterInput]=useState("")
 const [filterInputData,setfilterInputData]=useState("")
 const [iserror,seterror]=useState()
 let res=ApiData.filter((item)=>!item.name.toLowerCase().indexOf(filterInput.toLowerCase()))

 const callApi= async ()=>{
  try {
    let result= await fetch(BASE_URL)
     result=await result.json()
     setApiData(result)
    
  } catch (error) {
       seterror("Data Not Found")
  }
}  ;
useEffect(()=>{
 setfilterInputData(res)
},[filterInput])

useEffect(()=>{
  callApi()
  
},[])  
  return (
    <MainContainer>
      <Navbar filterName={filterName} setfilterName={setfilterName} setfilterInput={setfilterInput}/>
      <Hero iserror={iserror} filterName={filterName} ApiData={filterInputData.length > 0 ? filterInputData : ApiData} filterInputData={filterInputData}/>
    </MainContainer>
  )
}

export default App;

const MainContainer=styled.div`
  
  width: 1440px;
  height: 1024px;
  display: flex;
  flex-direction: column;
  gap: 0px;
`

