// export default class MergeMotion {
//           constructor(...args){
//               this.motions = args;
//           }

//           linkRef(ref){
//             this.motions.forEach(function(motion) {
//                 motion.linkRef
//               });
//           }

//           handleMotion(){
//             var mergedmotion = {}
//             this.motions.forEach(function(motion) {
//                 motion.handleMotion();
//               });
//           }

//   }

//   export class RotationMotion {
//     constructor(deltaDeg, delay, duration, easetype) {
//       this.ref = null;
//       this.deltaDeg = deltaDeg;
//       this.delay = delay;
//       this.duration = duration;
//       this.easetype = easetype;
//       this.motion = {
//         rotate: null,
//         transition: {
//           duration: this.duration,
//           delay: this.delay,
//           ease: this.easetype,
//         },
//       };
//     }
  
//     linkRef(ref) {
//       this.ref = ref;
//     }
  
//     handleMotion() {
//       const computedMatrix = new DOMMatrix(
//         window.getComputedStyle(this.ref.current).transform
//       );
      
//       const rotationRad = Math.atan2(computedMatrix.b, computedMatrix.a);
//       var angle = (rotationRad * 180) / Math.PI;
      
//       // Normalize the angle to the range [0, 360)
//       angle = (angle + 360) % 360
  
      
//       console.log(angle)
  
  
//       // angle = angle < 0 ? angle + 360 : angle;
  
//       this.motion = {
//         rotate: angle + this.deltaDeg,
//         transition: {
//           duration: this.duration,
//           delay: this.delay,
//           ease: this.easetype,
//         },
//       };

//       this.motion2 = {
//         x: 100,
//         transition: {
//           duration: this.duration,
//           delay: this.delay,
//           ease: this.easetype,
//         },
//       }
  
//       return this.motion;
//     }
  
//     clone() {
//       return new RotationMotion(
//         this.deltaDeg,
//         this.delay,
//         this.duration,
//         this.easetype
//       );
//       }
      
//     }
  
  