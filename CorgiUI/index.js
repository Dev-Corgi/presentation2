import React from "react";

import CorgiLoader from "./CorgiLoader";

//Components
import CorgiDiv from "./Components/CorgiDiv";
import CorgiImg from "./Components/CorgiImg";
import Carousel from "./Components/Carousel";

//Controllers
import ButtonController from "./Controller/ButtonController";
import GuageController from "./Controller/GuageController";
import ScrollControllerComponent from "./Controller/ScrollControllerComponent";
import ScrollControllerGlobal from "./Controller/ScrollControllerGlobal";
import SlideDetectorComponent from "./Controller/SlideDetectorComponent";
import MouseClickController from "./Controller/MouseClickController";
//Motions

import MovingMotion from "./Motion/MovingMotion";
import OpacityMotion from "./Motion/OpacityMotion";
import RotationMotion from "./Motion/RotationMotion";
import ScaleMotion from "./Motion/ScaleMotion";
import StretchMotion from "./Motion/StretchMotion";
import ZindexMotion from "./Motion/ZindexMotion";
import ColorMotion from "./Motion/ColorMotion";

//EaseType
import  Easetype from "./EaseType/EaseType";

const CorgiUI = {
  div: function (props, ref, motions) {
    return <CorgiDiv {...props} ref={ref} motions={motions} />;
  },

  img: function (props, ref, motions) {
    return <CorgiImg {...props} ref={ref} motions={motions} />;
  },
};

export { Easetype }
export { ButtonController,GuageController,ScrollControllerComponent,ScrollControllerGlobal,SlideDetectorComponent,MouseClickController }
export {MovingMotion,OpacityMotion,RotationMotion,ScaleMotion,StretchMotion, ZindexMotion,ColorMotion}
export {CorgiLoader}
export {Carousel}

export default CorgiUI;
