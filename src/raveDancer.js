var raveDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  var raveStep = makeDancer.prototype.step.bind(this);
  this.step = function() {
    raveStep();
    var colors = ['blue', 'red', 'yellow', 'green', 'cyan', 'teal'];

    this.$node.css({'border-color' : colors[Math.floor(Math.random() * colors.length)] } );
  };
};

raveDancer.prototype = Object.create(makeDancer.prototype);
raveDancer.prototype.constructor = raveDancer;
