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
    emmissions:data1,
    revenue:data2
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