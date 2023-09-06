export default class MouseClickController {
    constructor(delay) {
      this.ref = null
      this.eventTarget = new EventTarget();
      this.event = new CustomEvent('clickevent', {
        detail :{
          state: 1
        }
      });
      this.condition = true;
      this.delay = delay;
      this.linkRef = this.linkRef.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.eventname = 'clickevent';
      window.addEventListener('click', this.handleClick);
    }
  
    linkRef(ref){
      this.ref = ref
    }
  
    handleClick(event) {
      if (this.condition) {
        this.condition = false;
        this.eventTarget.dispatchEvent(this.event);
        setTimeout(() => { this.condition = true }, this.delay);
      }
    }
  
    destroy() {
        this.ref.current.removeEventListener('click', this.handleClick);
    }
  }