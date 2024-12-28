/*
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
*/


const clock = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    melesecound: 0,
  };
  
  const tick = (clock) => {
    clock.melesecound = clock.melesecound + 1;
    clock.seconds = clock.seconds + clock.melesecound;
    clock.minutes = clock.secound + clock.melesecound /60;
    clock.hours =  clock.minutes + clock.melesecoundc/60;
    clock.seconds = clock.hours + clock.melesecound %60;
    clock.minutes = clock.minutes + clock.melesecound %60;
    clock.hours = clock.melesecound %24;

    return tick;
    
  };

//   console.log(tick);


  const show = () => {
    
  }