var makeJumpDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  var jumpStep = makeDancer.prototype.step.bind(this);

  this.step = function() {
    jumpStep();
    var upLocation = (top + 25)+'px';
    var downLocation = top + 'px';
    this.$node.toggleClass('jumper');

    if(this.$node.hasClass('lined')) {
      upLocation = 'calc(50% + 25px)';
      downLocation = '50%';
    }

    if ( this.$node.hasClass('jumper') ) {
      this.$node.animate({'top' : upLocation}, 'fast');
    } else {
      this.$node.animate({'top' : downLocation}, 'fast');
    }
  }

};

makeJumpDancer.prototype = Object.create(makeDancer.prototype);
makeJumpDancer.prototype.constructor = makeJumpDancer;
