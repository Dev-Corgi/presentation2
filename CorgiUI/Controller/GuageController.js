export default class GuageController {
  constructor(inputController, minValue = -Infinity , maxValue = Infinity, cycle = false) {
    this.eventTarget = new EventTarget();
    this.event = new CustomEvent('guageevent', {
      detail : {
        state : 0,
        value : minValue
      }
    });
    this.maxValue = maxValue;
    this.minValue = minValue
    this.handleGuage = this.handleGuage.bind(this);
    this.inputController = inputController
    this.inputController.eventTarget.addEventListener(this.inputController.eventname, this.handleGuage);
    this.eventname = 'guageevent';
    this.output = 0
    this.cycle = cycle
  }

  handleGuage(event) {


    if(this.cycle){
        if(event.detail.state > 0){
            this.event.detail.state = 1;
            this.event.detail.value =  this.event.detail.value +1 > this.maxValue ? this.minValue : this.event.detail.value + 1
        }
        else{
            this.event.detail.state = -1;
            this.event.detail.value =   this.event.detail.value -1 < this.minValue ? this.maxValue : this.event.detail.value - 1
        }
    
    }

    else if(!this.cycle){
      //아래
      if (event.detail.state > 0) {
        if (this.event.detail.value < this.maxValue) {
          this.event.detail.state = 1;
          this.event.detail.value++;
        }
      }

      //위
      else {
        if (this.event.detail.value > this.minValue) {
          this.event.detail.state = -1;
          this.event.detail.value--;
        }
      }

    }
      this.eventTarget.dispatchEvent(this.event);
      this.output = this.event.detail.value
  }

  destroy() {
    this.inputController.eventTarget.removeEventListener(
      this.inputController.eventTarget.type,
      this.handleGuage
    );
  }
}
