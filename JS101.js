/*
nots:

number=double like 1.5 and int (intajer) 
var x=10.5;
x = parseint(x);//10
(datalose)


if/else
if(5>6){
console.log("batata")
else
if(....){
example for if
}
}//else

addtional nots:
+= addition assignment
*/


const clock = {
  millisecound: 0,
  second: 0,
  minutes: 0,
  hours: 0,
};

let tickCount = 0;
const intervalId = setInterval(() => {
  tick();
}, 1000);

const tick = () => {
  clock.millisecound += 1000;
  if (clock.millisecound >= 1000) {
    clock.millisecound = 0;
    clock.second += 1;
  }
  if (clock.second >= 60) {
    clock.second = 0;
    clock.minutes += 1;
  }
  if (clock.minutes >= 60) {
    clock.minutes = 0;
    clock.hours += 1;
  }
  if (clock.hours >= 24) {
    clock.hours = 0;
  }
  console.log("tick:", clock);
};

  if (tickCount >= 3600) {
    clearInterval(intervalId);
    console.log("Stopped after 1 hour");
  }

const show = () => {
  const Clock= {
    hours: 0,
    minutes: 0,
    second: 0,
    millisecound: 0,
  }
  console.log("show is:",Clock);
  return show
  }

const setMidDay = () => {
  const MidDay = {
    hours:12,
    minutes: 0,
    second: 0,
    millisecound: 0,
  }
  console.log("MidDay is:",MidDay,"PM");
  return setMidDay
}  

const setMidNight = () => {
  const MidNight = {
    hours:0,
    minutes: 0,
    second: 0,
    millisecound: 0,
  }
  console.log("MidNight is:",MidNight,"AM");
  return setMidNight
}  

const car = {
  speed : 0 
}

const speedsP = () => {
    const speeds ={
      MainSpeed:0
    }
  if (speeds.MainSpeed = 0) {
    speeds.MainSpeed = speeds.MainSpeed +1 
  }
  console.log(speedsP);
  
  return speedsP
}

// const speedUp = () => {
  
//   if (s) {
//     if (s) {}
//   }
// }


show()
setMidDay()
setMidNight()
tick()

