"use client";
import React,{useState,useEffect} from "react";
import CorgiUI,{GuageController} from "../index";
import CorgiDiv from "./CorgiDiv";
import { deepCopy } from "../Util/DeepCopy";
export default function Carousel({className,children,input,positiveEnterMotion,positiveLeaveMotion,negativeEnterMotion,negativeLeaveMotion}) {
  const childrenArray = React.Children.toArray(children);
  const maxcount = childrenArray.length
  const [gaugeController, setgaugeController] = useState(new GuageController(input,0,maxcount-1,true))

  return (
    <div className={className}>
        {childrenArray.map((child, index) => (
                <CorgiDiv
                key = {index}
                className="flex"
                motions={[
                  {
                    input: gaugeController,
                    motion: positiveEnterMotion.clone(),
                    condition: (state, value) => {
                      return state > 0 &&
                      (index + 1) % maxcount != value
                        ? true
                        : false;
                    },
                  },
                  {
                    input: gaugeController,
                    motion: negativeEnterMotion.clone(),
                    condition: (state, value) => {
                      return state < 0 &&
                      index != value
                        ? true
                        : false;
                    },
                  },
                  {
                    input: gaugeController,
                    motion: positiveLeaveMotion.clone(),
                    condition: (state, value) => {
                      return state > 0 &&
                      (index + 1) % maxcount  == value
                        ? true
                        : false;
                    },
                  },
                  {
                    input:gaugeController,
                    motion: negativeLeaveMotion.clone(),
                    condition: (state, value) => {
                      return state < 0 &&
                      index == value
                        ? true
                        : false;
                    },
                  },
                ]}
              >
                {child}
              </CorgiDiv>
        ))}
    </div> 
  )
}


