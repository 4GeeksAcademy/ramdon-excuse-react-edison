import React from "react";
import { useState, useEffect } from "react";

let RamdonExcuse = (props) =>{

    let {who,action,what,when} = props
    let [counter, setCounter] = useState(0);
    let [excuse, setExcuse] = useState("");

    // let ramdonExcuse = (arr)=>{
    //     return arr[ramdonNumber(arr)]
    // }
    // let ramdonNumber = (arr) =>{
    //       return  Math.floor(Math.random()*arr.length)
    // }
    // useEffect(()=>{
    //     setInterval(()=>{
    //         ramdonExcuse(who)
    //     },1000)
    // },[])

      useEffect(()=>{
        setInterval(()=>{
            setExcuse(generateRandomExcuse());
        },1000)
    },[])

    useEffect(()=>{
        setCounter(counter+1);
     },[excuse])
   
      let generateRandomExcuse = () => {
        let randomWho = who[randomNumber(who)];
        let randomAction = action[randomNumber(action)];
        let randomWhat = what[randomNumber(what)];
        let randomWhen = when[randomNumber(when)];

        return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
      };
    
      let randomNumber = (arr) => {
        return Math.floor(Math.random() * arr.length);
      };
    
    return(
        <div>
            <h1>{excuse}</h1>
            <h1>{counter}</h1>
        </div>
    )
}

export default RamdonExcuse;