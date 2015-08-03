var makeJumpDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  var jumpStep = makeDancer.prototype.step.bind(this);

  this.step = function() {
    jumpStep();
    var location = (top + 25)+'px'
    this.$node.toggleClass('jumper');
    if ( this.$node.hasClass('jumper') ) {
      this.$node.animate({'top' : location}, 'fast');
    } else {
      this.$node.animate({'top' : top+'px'}, 'fast');
    }
  }

};

makeJumpDancer.prototype = Object.create(makeDancer.prototype);
makeJumpDancer.prototype.constructor = makeJumpDancer;
