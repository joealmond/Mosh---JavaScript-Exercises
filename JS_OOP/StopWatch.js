const Stopwatch = function () {
  let startTime,
    endTime,
    duration = 0;
  let started = false;
  this.reset = function () {
    duration = 0;
    startTime = 0;
    endTime = 0;
    started = false;
  };
  this.start = function () {
    if (started === true) {
      throw Error("Stopwatch already started!");
    }
    startTime = Date.now();
    started = true;
  };
  this.stop = function () {
    if (started === false) {
      throw Error("Stopwatch has to be started!");
    }
    endTime = Date.now();
    started = false;
    seconds = (endTime - startTime) / 1000;
    duration = duration + seconds;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
};

const sw = new Stopwatch();

//Mosh's solution

function Stopwatch1() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw1 = new Stopwatch1();
