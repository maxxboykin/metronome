function Timer(callback, timeInterval) {
  this.timeInterval = timeInterval;

  this.start = () => {
    //set expected time
    this.expected = Date.now() + this.timeInterval;
    this.timeout = setTimeout(this.round, this.timeInterval);
    console.log('started!');
  }
  //stop timer
  this.stop = () => {
    clearTimeout(this.timeout);
    console.log('stopped!');
  }
  //method that takes care of running our callback and adjusting the time interval
  this.round = () => {
    let drift = Date.now() - this.expected;
    callback();
    this.expected += this.timeInterval;
    console.log(drift);
    this.timeout = setTimeout(this.round, this.timeInterval - drift);
  }
}

const myTimer = new Timer(() => {
  console.log('it ran!')},1000);
myTimer.start();
