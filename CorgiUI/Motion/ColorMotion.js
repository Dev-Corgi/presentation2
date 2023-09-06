
export default class ColorMotion {
    constructor(color, delay, duration, easetype) {
      this.color = color
      this.duration = duration
      this.delay = delay
      this.easetype = easetype
      this.motion = {
         backgroundcolor: null,
  
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
        backgroundColor: this.color,
        transition: {
          duration: this.duration,
          delay: this.delay,
          ease: this.easetype,
        },
      };
      return this.motion;
    }
  
    clone() {
      return new ColorMotion(
        this.color,
        this.delay,
        this.duration,
        this.easetype
      );
     
  }
  }
  