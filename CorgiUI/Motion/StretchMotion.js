export default class StretchMotion {
  constructor(deltaW, deltaH, delay, duration, easetype) {
    this.deltaW =  deltaW == 0 ? "0px" : deltaW 
    this.deltaH =  deltaH == 0 ? "0px" : deltaH
    this.duration = duration
    this.delay = delay
    this.easetype = easetype
    this.motion = {
      width: null,
      height: null,

      transition: {
        duration: duration,
        delay: delay,
        ease: easetype,
      },
    };
  }

  linkRef(ref) {
    this.ref = ref;
  }

  calcDelta(delta,origin){

    const pattern = /(-?\d+(\.\d+)?)\D+/;
    const matches = delta.match(pattern);

    const value = parseFloat(matches[1]); // 숫자 부분 추출
    const unit = delta.substring(matches[1].length); // 문자 부분 추출

    switch (unit) {

      case "vw":
        delta = (origin / this.windowWidth) * 100 + value +"vw"
        break;

        case "vh":
          delta = (origin / this.windowHeight) * 100 + value +"vh"
          break;

          default :
          delta = origin +value +"px"
          break;
    }

    return delta

  }

  handleMotion() {

    this.motion = {
      width: this.calcDelta(this.deltaW,this.ref.current.offsetWidth),
      height:  this.calcDelta(this.deltaH,this.ref.current.offsetHeight),

      transition: {
        duration: this.duration,
        delay: this.delay,
        ease: this.easetype,
      },
    };
    return this.motion;
  }

  clone() {
    return new StretchMotion(
      this.deltaW,
      this.deltaH,
      this.delay,
      this.duration,
      this.easetype
    );
   
}
}
