const assert=require('node:assert/strict'),calc=require('./model.js');
const baseline={volume:10000,rate:8,reviewers:10,minutes:6,delay:2};
const r=calc(baseline);assert.equal(r.demand,800);assert.equal(r.capacity,600);assert.equal(r.queue[20],4000);assert.equal(r.breach,7);assert.equal(r.needed,14);assert.equal(r.limit,7500);
assert.equal(calc({...baseline,reviewers:16}).queue[20],0);
assert.equal(calc({...baseline,volume:7500}).load,100);
assert.equal(calc({...baseline,volume:20000}).breach,2);
assert.equal(calc({...baseline,rate:15}).queue[20],18000);
console.log('Passed: baseline arithmetic, strict breach boundary, balanced load, spare capacity, growth and escalation scenarios.');
