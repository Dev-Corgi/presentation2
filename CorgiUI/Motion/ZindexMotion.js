export default class ZindexMotion {
    constructor(deltaZ, delay, duration, easetype) {
      this.deltaZ = deltaZ 
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
  
    handleMotion() {
  
      this.motion = {
          z: window.getComputedStyle(this.ref.current).zIndex + this.deltaZ,
        transition: {
          duration: this.duration,
          delay: this.delay,
          ease: this.easetype,
        },
      };
      return this.motion;
    }
  
    clone() {
      return new ZindexMotion(
        this.deltaW,
        this.deltaH,
        this.delay,
        this.duration,
        this.easetype
      );
     
  }
  }
  