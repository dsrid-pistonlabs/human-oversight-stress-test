(function(root){
function calculate(s){const demand=s.volume*s.rate/100,capacity=s.reviewers*360/s.minutes,gap=demand-capacity,tolerance=s.delay*capacity;let q=0,breach=null;const queue=[0];for(let d=1;d<=20;d++){q=Math.max(0,q+gap);queue.push(q);if(q>tolerance&&breach===null)breach=d;}return {demand,capacity,gap,tolerance,queue,breach,load:demand/capacity*100,limit:Math.floor(capacity/(s.rate/100)),needed:Math.ceil(demand*s.minutes/360)};}
if(typeof module!=='undefined')module.exports=calculate;else root.calculate=calculate;
})(typeof window!=='undefined'?window:globalThis);
