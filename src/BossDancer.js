var BossDancer = function(top, left, timeBetweenSteps) {
  var leftOrRight = ['0%', '100%'][Math.floor(Math.random()*2)];
  makeDancer.call(this, top, leftOrRight, timeBetweenSteps);
  this.left = leftOrRight;
  this.slide = function() {
    if(this.left === '0%') {
      this.$node.animate({'left' : '100%'}, 'fast', 'swing', function() {
        this.slide();
      })
    } else {
      this.$node.animate({'left' : '0%'}, 'fast', 'swing', function() {
        this.slide();
      })
    }
  };
  this.slide();
};

BossDancer.prototype = Object.create(makeDancer.prototype);
BossDancer.prototype.constructor = BossDancer;

// BossDancer.prototype.setPosition = function(top){
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//   var leftOrRight = ['0%', '100%'][Math.floor(Math.random()*2)]
//   var styleSettings = {
//     top: top,
//     left: leftOrRight;
//   };
//   this.$node.css(styleSettings);
// };
