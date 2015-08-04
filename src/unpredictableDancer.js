var unpredictableDancer = function(top, left, timeBetweenSteps) {
  var slowerSteps = timeBetweenSteps * 5;
  makeDancer.call(this, top, left, slowerSteps);

  var unpredictableStep = makeDancer.prototype.step.bind(this);


  this.closest;

  this.$node.append('<img src="Jet.png">');
  this.$node.addClass('unpredictable rotate');

  this.findClosest = function() {
    var dancers = window.dancers;
    var oldClosest = this.closest;
    this.closest = dancers[0];
    for(var i = 0; i < dancers.length; i++) {
      if( dancers[i] === this ) { continue; }
      if( dancers[i] === oldClosest ) { continue; }
      if( this.pythagorean(this.closest) > this.pythagorean(dancers[i]) ) {
        this.closest = dancers[i];
      }
    }
  };

  this.step = function() {
    unpredictableStep();

    this.findClosest();
    this.top = this.closest.top;
    this.left = this.closest.left;
    this.$node.animate({'top' : this.top+'px',
                        'left' : this.left+'px'});


  }
}

unpredictableDancer.prototype = Object.create(makeDancer.prototype);

unpredictableDancer.prototype.constructor = unpredictableDancer;

unpredictableDancer.prototype.pythagorean = function(item) {
  var topDistance = this.top - item.top;
  var leftDistance = this.left - item.left;
  return Math.sqrt(topDistance * topDistance + leftDistance * leftDistance);
}


// unpredictableDancer.prototype.findClosest = function() {
//   var dancers = window.dancers;

//   for(var i = 0; i < dancers.length; i++) {
//     this.closest = dancers[0];
//     if( dancers[i] === this ) { continue; }
//     if( this.pythagorean(this.closest) > this.pythagorean(dancers[i]) ) {
//       this.closest = dancers[i];
//     }
//   }
// };


// var halfwayDistance = function(closest) {
//   var topDistance = this.top - closest.top;
//   var leftDistance = this.left - closest.left;

//   top = topDistance
// }
