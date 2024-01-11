import { CHANGE_DATA } from "./Actiontype";
import { data } from "./data";

const data2022=data?.filter((ele)=>{
  return   ele.Year===2022
})
const data1=data2022?.map((ele)=>{
  return ele.Emissions
})
const data22=data2022?.map((ele)=>{
  return ele.Emissions
})
console.log(data1);

const data2023=data?.filter((ele)=>{
  return   ele.Year===2023
})
const data2=data2023?.map((ele)=>{
  return ele.Emissions
})

const dataR=data?.map((ele)=>{
  return ele.Revenue
})




const initialState = {
  data:{
    emmissions:[1480, 1160, 590, 800, 900,1100,1300,900,1190,1500,900,700],
    revenue:[1240, 965, 400, 671, 827,1000,1000,850,1150,1100,800,650]
  },
  pie_data:data
};




export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
       case CHANGE_DATA: 
       return { ...state, data:payload };
    default:
      return state;
  }
};