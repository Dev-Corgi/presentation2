"use client";
import React,{useState,useEffect} from "react";
import CorgiUI,{GuageController} from "../index";
import CorgiDiv from "./CorgiDiv";
import { deepCopy } from "../Util/DeepCopy";
export default function Iterator({className,children,input,EnterMotion,LeaveMotion}) {
  const childrenArray = React.Children.toArray(children);
  const maxcount = childrenArray.length
  const [gaugeController, setgaugeController] = useState(new GuageController(input,0,maxcount-1,true))


  return (
    <div className={className}>
        {childrenArray.map((child, index) => (

          
          
                {cloneElement(child, {[
                  {
                    input: gaugeController,
                    motion: EnterMotion.clone(),
                    condition: (state, value) => {
                      return state > 0 &&
                      index == value
                        ? true
                        : false;
                    },
                  },
                  {
                    input: gaugeController,
                    motion: LeaveMotion.clone(),
                    condition: (state, value) => {
                      return (state > 0 && (index+maxcount+1)%maxcount == value) ||
                      (state<0 && (index+maxcount -1)%maxcount == value)
                        ? true
                        : false;
                    },
                  }
                ]})}

        ))}
    </div> 
  )
}


