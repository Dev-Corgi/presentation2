"use client";
import React, { useState } from "react";
import CorgiDiv from "../../CorgiUI/Components/CorgiDiv";
import {
  ScrollControllerGlobal,
  MovingMotion,
  Easetype,
  GuageController,
  ScaleMotion,
  RotationMotion,
  ColorMotion,
  OpacityMotion,
} from "../../CorgiUI";
import MovingMotionTemp from "../../CorgiUI/Motion/MovingMotionTemp";
const Intro = () => {
  const [scrollcontroller, setscrollcontroller] = useState(
    new ScrollControllerGlobal(1000)
  );
  const [guagecontroller, setguagecontroller] = useState(
    new GuageController(scrollcontroller, 1, 10)
  );
  return (
    <CorgiDiv
      className="absolute bg-[#051F1B] w-full h-[100vh] overflow-hidden text-left text-[5rem] text-white font-chosunSM"
      motions={[
        {
          input: guagecontroller,
          motion: new ColorMotion("#1E1A11", 0, 1, Easetype.easeInOut),
          condition: (state, value) => {
            return value == 2;
          },
        },
        {
          input: guagecontroller,
          motion: new ColorMotion("#271411", 0, 1, Easetype.easeInOut),
          condition: (state, value) => {
            return value == 3;
          },
        },
        {
          input: guagecontroller,
          motion: new ColorMotion("#111E10", 0, 1, Easetype.easeInOut),
          condition: (state, value) => {
            return value == 4;
          },
        },
        {
          input: guagecontroller,
          motion: new ColorMotion("#08131D", 0, 1, Easetype.easeInOut),
          condition: (state, value) => {
            return value == 5;
          },
        },
        {
          input: guagecontroller,
          motion: new ColorMotion("#1E1A11", 0, 1, Easetype.easeInOut),
          condition: (state, value) => {
            return value == 6;
          },
        },
      ]}
    >
      <CorgiDiv
        className="absolute top-[calc(50%_-_228.37px)] left-[-34rem] h-[40.57rem] flex flex-row items-center justify-start gap-[6.31rem] [transform:_rotate(-3.94deg)] [transform-origin:0_0] text-[0.63rem]"
        motions={[
          {
            input: guagecontroller,
            motion: new MovingMotionTemp(
              "-55.9vw",
              "7.31vh",
              0,
              1,
              Easetype.easeInOut
            ),
            condition: (state, value) => {
              return value < 6;
            },
          },
        ]}
      >
        <div className="self-stretch relative w-[53.55rem]">
          <CorgiDiv
            className="absolute h-[calc(100%_-_206.54px)] w-[calc(100%_-_516.89px)] top-[6.4rem] right-[16.18rem] bottom-[6.51rem] left-[16.13rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "11.402vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return false;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.04%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/school3.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_205.66px)] w-[calc(100%_-_515.25px)] top-[6.37rem] right-[16.11rem] bottom-[6.49rem] left-[16.09rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "-12.466vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return false;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.06%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/school2.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_129.06px)] w-[calc(100%_-_466.12px)] top-[4.03rem] right-[14.56rem] bottom-[4.04rem] left-[14.57rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new ScaleMotion(1.24, 1.24, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return false;
                },
              },
            ]}
          >
            <img
              className="absolute h-[104.93%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/school1.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          {/* <div className="absolute top-[38.73rem] left-[45.53rem] w-[12rem] h-[1.75rem] [transform:_rotate(3.94deg)] [transform-origin:0_0]">
            <div className="absolute top-[57.17%] left-[0.66%] tracking-[-0.04em] font-pretendardSemiBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              많은것이 다른 대학생활, 회의감을 느끼다
            </div>
            <div className="absolute top-[4.67%] left-[0%] tracking-[-0.04em] font-pretendardExtraBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              No.1
            </div>
          </div> */}
        </div>
        <div className="self-stretch relative w-[53.55rem]">
          <CorgiDiv
            className="absolute h-[calc(100%_-_206.54px)] w-[calc(100%_-_516.89px)] top-[6.4rem] right-[16.18rem] bottom-[6.51rem] left-[16.13rem]"
            motions={[
              {
                input: null,
                motion: new MovingMotion(
                  "11.402vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
              },
              {
                input: null,
                motion: new RotationMotion(3.99, 1, 0.5, Easetype.easeInOut),
              },
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "-11.402vw",
                  0,
                  0,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 2;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(-3.99, 0, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 2;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.04%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/start3.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_205.66px)] w-[calc(100%_-_515.25px)] top-[6.37rem] right-[16.11rem] bottom-[6.49rem] left-[16.09rem]"
            motions={[
              {
                input: null,
                motion: new MovingMotion(
                  "-12.466vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
              },
              {
                input: null,
                motion: new RotationMotion(-6.87, 1, 0.5, Easetype.easeInOut),
              },
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "12.466vw",
                  0,
                  0,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 2;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(6.87, 0, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 2;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.06%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/start2.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_129.06px)] w-[calc(100%_-_466.12px)] top-[4.03rem] right-[14.56rem] bottom-[4.04rem] left-[14.57rem]"
            motions={[
              {
                input: null,
                motion: new ScaleMotion(1.24, 1.24, 0, 1, Easetype.easeInOut),
              },
              {
                input: guagecontroller,
                motion: new ScaleMotion(
                  1 / 1.24,
                  1 / 1.24,
                  0,
                  1,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 2;
                },
              },
            ]}
          >
            <img
              className="absolute h-[104.93%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/start1.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute top-[38.73rem] left-[45.53rem] w-[12rem] h-[1.75rem] [transform:_rotate(3.94deg)] [transform-origin:0_0]"
            motions={[
              {
                input: guagecontroller,
                motion: new OpacityMotion(-1, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 2;
                },
              },
            ]}
          >
            <div className="absolute top-[57.17%] left-[0.66%] tracking-[-0.04em] font-pretendardSemiBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              포커스립 14기 이명준
            </div>
            <div className="absolute top-[4.67%] left-[0%] tracking-[-0.04em] font-pretendardExtraBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              PRESENT BY
            </div>
          </CorgiDiv>
        </div>
        <div className="self-stretch relative w-[53.55rem]">
          <CorgiDiv
            className="absolute h-[calc(100%_-_206.54px)] w-[calc(100%_-_516.89px)] top-[6.4rem] right-[16.18rem] bottom-[6.51rem] left-[16.13rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "11.402vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 2;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(3.99, 1, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 2;
                },
              },
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "-11.402vw",
                  0,
                  0,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 3;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(-3.99, 0, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 3;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.04%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/school3.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_205.66px)] w-[calc(100%_-_515.25px)] top-[6.37rem] right-[16.11rem] bottom-[6.49rem] left-[16.09rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "-12.466vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 2;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(-6.87, 1, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 2;
                },
              },
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "12.466vw",
                  0,
                  0,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 3;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(6.87, 0, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 3;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.06%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/school2.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_129.06px)] w-[calc(100%_-_466.12px)] top-[4.03rem] right-[14.56rem] bottom-[4.04rem] left-[14.57rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new ScaleMotion(1.24, 1.24, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 2;
                },
              },
              {
                input: guagecontroller,
                motion: new ScaleMotion(
                  1 / 1.24,
                  1 / 1.24,
                  0,
                  1,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 3;
                },
              },
            ]}
          >
            <img
              className="absolute h-[104.93%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/school1.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute top-[38.73rem] left-[45.53rem] w-[12rem] h-[1.75rem] [transform:_rotate(3.94deg)] [transform-origin:0_0]"
            motions={[
              {
                input: guagecontroller,
                motion: new OpacityMotion(-1, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 3;
                },
              },
            ]}
          >
            <div className="absolute top-[57.17%] left-[0.66%] tracking-[-0.04em] font-pretendardSemiBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              많은것이 다른 대학생활, 회의감을 느끼다
            </div>
            <div className="absolute top-[4.67%] left-[0%] tracking-[-0.04em] font-pretendardExtraBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              No.1
            </div>
          </CorgiDiv>
        </div>
        <div className="self-stretch relative w-[53.55rem]">
          <CorgiDiv
            className="absolute h-[calc(100%_-_206.54px)] w-[calc(100%_-_516.89px)] top-[6.4rem] right-[16.18rem] bottom-[6.51rem] left-[16.13rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "11.402vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 3;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(3.99, 1, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 3;
                },
              },
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "-11.402vw",
                  0,
                  0,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 4;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(-3.99, 0, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 4;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.04%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/depression3.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_205.66px)] w-[calc(100%_-_515.25px)] top-[6.37rem] right-[16.11rem] bottom-[6.49rem] left-[16.09rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "-12.466vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 3;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(-6.87, 1, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 3;
                },
              },
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "12.466vw",
                  0,
                  0,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 4;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(6.87, 0, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 4;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.06%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/depression2.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_129.06px)] w-[calc(100%_-_466.12px)] top-[4.03rem] right-[14.56rem] bottom-[4.04rem] left-[14.57rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new ScaleMotion(1.24, 1.24, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 3;
                },
              },
              {
                input: guagecontroller,
                motion: new ScaleMotion(
                  1 / 1.24,
                  1 / 1.24,
                  0,
                  1,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 4;
                },
              },
            ]}
          >
            <img
              className="absolute h-[104.93%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/depression1.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute top-[38.73rem] left-[45.53rem] w-[12rem] h-[1.75rem] [transform:_rotate(3.94deg)] [transform-origin:0_0]"
            motions={[
              {
                input: guagecontroller,
                motion: new OpacityMotion(-1, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 4;
                },
              },
            ]}
          >
            <div className="absolute top-[57.17%] left-[0.66%] tracking-[-0.04em] font-pretendardSemiBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              방황과 함께 찾아온 우울증
            </div>
            <div className="absolute top-[4.67%] left-[0%] tracking-[-0.04em] font-pretendardExtraBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              No.2
            </div>
          </CorgiDiv>
        </div>
        <div className="self-stretch relative w-[53.55rem]">
          <CorgiDiv
            className="absolute h-[calc(100%_-_206.54px)] w-[calc(100%_-_516.89px)] top-[6.4rem] right-[16.18rem] bottom-[6.51rem] left-[16.13rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "11.402vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 4;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(3.99, 1, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 4;
                },
              },
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "-11.402vw",
                  0,
                  0,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 5;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(-3.99, 0, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 5;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.04%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/meeting3.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_205.66px)] w-[calc(100%_-_515.25px)] top-[6.37rem] right-[16.11rem] bottom-[6.49rem] left-[16.09rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "-12.466vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 4;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(-6.87, 1, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 4;
                },
              },
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "12.466vw",
                  0,
                  0,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 5;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(6.87, 0, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 5;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.06%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/meeting2.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_129.06px)] w-[calc(100%_-_466.12px)] top-[4.03rem] right-[14.56rem] bottom-[4.04rem] left-[14.57rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new ScaleMotion(1.24, 1.24, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 4;
                },
              },
              {
                input: guagecontroller,
                motion: new ScaleMotion(
                  1 / 1.24,
                  1 / 1.24,
                  0,
                  1,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 5;
                },
              },
            ]}
          >
            <img
              className="absolute h-[104.93%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/meeting1.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute top-[38.73rem] left-[45.53rem] w-[12rem] h-[1.75rem] [transform:_rotate(3.94deg)] [transform-origin:0_0]"
            motions={[
              {
                input: guagecontroller,
                motion: new OpacityMotion(-1, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 5;
                },
              },
            ]}
          >
            <div className="absolute top-[57.17%] left-[0.66%] tracking-[-0.04em] font-pretendardSemiBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              이미 내가 원하는 삶을 이룬 사람들과의 만남
            </div>
            <div className="absolute top-[4.67%] left-[0%] tracking-[-0.04em] font-pretendardExtraBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              No.3
            </div>
          </CorgiDiv>
        </div>
        <div className="self-stretch relative w-[53.55rem]">
          <CorgiDiv
            className="absolute h-[calc(100%_-_206.54px)] w-[calc(100%_-_516.89px)] top-[6.4rem] right-[16.18rem] bottom-[6.51rem] left-[16.13rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "11.402vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 5;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(3.99, 1, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 5;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.04%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/ending3.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_205.66px)] w-[calc(100%_-_515.25px)] top-[6.37rem] right-[16.11rem] bottom-[6.49rem] left-[16.09rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "-12.466vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return value == 5;
                },
              },
              {
                input: guagecontroller,
                motion: new RotationMotion(-6.87, 1, 0.5, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 5;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.06%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/ending2.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_129.06px)] w-[calc(100%_-_466.12px)] top-[4.03rem] right-[14.56rem] bottom-[4.04rem] left-[14.57rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new ScaleMotion(1.24, 1.24, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return value == 5;
                },
              },
              {
                input: guagecontroller,
                motion: new ScaleMotion(
                  1 / 1.24,
                  1 / 1.24,
                  0,
                  1,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return false;
                },
              },
            ]}
          >
            <img
              className="absolute h-[104.93%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/ending1.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute top-[38.73rem] left-[45.53rem] w-[12rem] h-[1.75rem] [transform:_rotate(3.94deg)] [transform-origin:0_0]"
            motions={[
              {
                input: guagecontroller,
                motion: new OpacityMotion(-1, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return false;
                },
              },
            ]}
          >
            <div className="absolute top-[57.17%] left-[0.66%] tracking-[-0.04em] font-pretendardSemiBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              나아가야할 방향을 찾다
            </div>
            <div className="absolute top-[4.67%] left-[0%] tracking-[-0.04em] font-pretendardExtraBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              No.4
            </div>
          </CorgiDiv>
        </div>
        <div className="self-stretch relative w-[53.55rem]">
          <CorgiDiv
            className="absolute h-[calc(100%_-_206.54px)] w-[calc(100%_-_516.89px)] top-[6.4rem] right-[16.18rem] bottom-[6.51rem] left-[16.13rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "11.402vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return false;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.04%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/school1.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_205.66px)] w-[calc(100%_-_515.25px)] top-[6.37rem] right-[16.11rem] bottom-[6.49rem] left-[16.09rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new MovingMotion(
                  "-12.466vw",
                  0,
                  1,
                  0.5,
                  Easetype.easeInOut
                ),
                condition: (state, value) => {
                  return false;
                },
              },
            ]}
          >
            <img
              className="absolute h-[105.06%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/school2.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute h-[calc(100%_-_129.06px)] w-[calc(100%_-_466.12px)] top-[4.03rem] right-[14.56rem] bottom-[4.04rem] left-[14.57rem]"
            motions={[
              {
                input: guagecontroller,
                motion: new ScaleMotion(1.24, 1.24, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return false;
                },
              },
            ]}
          >
            <img
              className="absolute h-[104.93%] w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              src="/images/school3.png"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black opacity-[0.3]" />
          </CorgiDiv>
          <CorgiDiv
            className="absolute top-[38.73rem] left-[45.53rem] w-[12rem] h-[1.75rem] [transform:_rotate(3.94deg)] [transform-origin:0_0]"
            motions={[
              {
                input: guagecontroller,
                motion: new OpacityMotion(-1, 0, 1, Easetype.easeInOut),
                condition: (state, value) => {
                  return false;
                },
              },
            ]}
          >
            <div className="absolute top-[57.17%] left-[0.66%] tracking-[-0.04em] font-pretendardSemiBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              많은것이 다른 대학생활, 회의감을 느끼다
            </div>
            <div className="absolute top-[4.67%] left-[0%] tracking-[-0.04em] font-pretendardExtraBold [transform:_rotate(-3.94deg)] [transform-origin:0_0]">
              No.1
            </div>
          </CorgiDiv>
        </div>
      </CorgiDiv>
      <div className="absolute top-[calc(50%_-_20.64px)] left-[calc(50%_-_398px)] w-[47.44rem] h-[7.5rem] overflow-hidden [transform:_rotate(-4.41deg)] [transform-origin:0_0]">
        <CorgiDiv
          className="absolute top-[0rem] left-[0rem] flex flex-col items-center justify-center"
          motions={[
            {
              input: guagecontroller,
              motion: new MovingMotion(
                0,
                "-119.65px",
                0,
                1,
                Easetype.easeInOut
              ),
              condition : (state,value) => {return value < 6;}
            },
          ]}
        >
          <div className="relative tracking-[-0.02em] leading-[7.5rem]">
            나의 우울증 이야기
          </div>
          <div className="relative tracking-[-0.02em] leading-[7.5rem]">
            생각과 다르던 대학생활
          </div>
          <div className="relative tracking-[-0.02em] leading-[7.5rem]">
            방황,우울증
          </div>
          <div className="relative tracking-[-0.02em] leading-[7.5rem]">
            직접 듣는 꿈
          </div>
          <div className="relative tracking-[-0.02em] leading-[7.5rem]">
            방황의 끝
          </div>
          <div className="relative tracking-[-0.02em] leading-[7.5rem]">
            생각과 다르던 대학생활
          </div>
          <div className="relative tracking-[-0.02em] leading-[7.5rem]">
            생각과 다르던 대학생활
          </div>
        </CorgiDiv>
      </div>
      <img
        className="absolute top-[calc(50%_+_199px)] left-[calc(50%_-_300px)] w-[6.38rem] h-[6.38rem] object-cover"
        alt=""
        src="/images/pic_scroll.png"
      />
    </CorgiDiv>
  );
};

export default Intro;
