const StopwatchProto = function () {
  let duration = 0;
  let startTime = 0;
  let endTime = 0;
  let started = false;
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
    set: function (value) {
      startTime = value;
    },
  });
  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
    set: function (value) {
      endTime = value;
    },
  });
  Object.defineProperty(this, "started", {
    get: function () {
      return started;
    },
    set: function (value) {
      started = value;
    },
  });
};

const swp = new StopwatchProto();

StopwatchProto.prototype.reset = function () {
  this.duration = 0;
  this.startTime = 0;
  this.endTime = 0;
  this.started = false;
};
StopwatchProto.prototype.start = function () {
  if (this.started === true) {
    throw Error("Stopwatch already started!");
  }
  this.startTime = Date.now();
  this.started = true;
};
StopwatchProto.prototype.stop = function () {
  if (this.started === false) {
    throw Error("Stopwatch has to be started!");
  }
  this.endTime = Date.now();
  this.started = false;
  this.seconds = (this.endTime - this.startTime) / 1000;
  this.duration = this.duration + this.seconds;
};
