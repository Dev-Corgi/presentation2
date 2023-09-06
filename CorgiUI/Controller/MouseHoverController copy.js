export default class MouseHoverController {
    constructor(delay) {
      this.ref = null
      this.eventTarget = new EventTarget();
      this.event = new CustomEvent('hoverevent', {
        detail :{
          state: 0
        }
      });
      this.condition = true;
      this.delay = delay;
      this.linkRef = this.linkRef.bind(this);
      this.handleHover = this.handleHover.bind(this);
      this.eventname = 'hoverevent';
    }
  
    linkRef(ref){
      this.ref = ref
      this.ref.current.addEventListener('mouseenter', this.handleHover);
    }
  
    handleHover(event) {
      if (this.condition) {
        this.condition = false;
        this.eventTarget.dispatchEvent(this.event);
        setTimeout(() => { this.condition = true }, this.delay);
      }
    }
  
    destroy() {
        this.ref.current.removeEventListener('mouseenter', this.handleHover);
    }
  }