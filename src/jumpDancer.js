var makeJumpDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('megaman');

  var jumpStep = makeDancer.prototype.step.bind(this);

  this.step = function() {
    jumpStep();
    var upLocation = (top - 100)+'px';
    var downLocation = top + 'px';
    var context = this.$node;
    this.$node.toggleClass('jumper');

    if(this.$node.hasClass('lined')) {
      upLocation = 'calc(50% + 25px)';
      downLocation = '50%';
    }
    this.$node.children().remove();
    this.$node.append('<img src="megajump.png" height="120" width="120">')
    this.$node.animate({'top' : upLocation}, 'fast', 'swing', function() {
      context.animate({'top' : downLocation}, 'fast', 'swing', function() {
        context.children().remove();
        context.append('<img src="Megastand.png" height="120" width="120">')
      });

    });






  }

};

makeJumpDancer.prototype = Object.create(makeDancer.prototype);
makeJumpDancer.prototype.constructor = makeJumpDancer;
