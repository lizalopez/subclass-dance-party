var FloatyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', "ghost");
  this.$node.append('<img class="bana" src="http://www.animatedimages.org/data/media/77/animated-ghost-image-0075.gif" width="100" height="100">');
  this.towardsRight = true;
  this.towardsBottom = true;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

FloatyDancer.prototype = Object.create(Dancer.prototype);
FloatyDancer.prototype.constructor = FloatyDancer;

FloatyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  if (this.towardsRight) {
    this.floatRight();
  } else {
    this.floatLeft();
  }
  // if (this.towardsBottom) {
  //   this.floatBottom();
  // } else {
  //   this.floatTop();
  // }
  this.goBack();
}; 

FloatyDancer.prototype.floatRight = function() {
  this.$node.animate({"left": "+=150px"}, this.timeBetweenSteps, "linear");
  this.towardsRight = true;
};

FloatyDancer.prototype.floatBottom = function() {
  this.$node.animate({"top": "+=150px"}, this.timeBetweenSteps, "linear");
  this.towardsBottom = true;
};

FloatyDancer.prototype.floatLeft = function() {
  this.$node.animate({"left": "-=150px"}, this.timeBetweenSteps, "linear");
  this.towardsRight = false;
};

FloatyDancer.prototype.floatTop = function() {
  this.$node.animate({"top": "-=150px"}, this.timeBetweenSteps, "linear");
  this.towardsBottom = false;
};

//this.$node.offset().left >= (window.width()-100)
FloatyDancer.prototype.goBack = function() {
  //this.left
  //if hit right edge of body
  if (this.$node.offset().left > 1000) {
    //go left
    this.floatLeft();    
  }
  //if hit bottom edge of body
  // if (this.$node.offset().top > ($("body").height()-100)) {
  //   //go top
  //   this.floatTop();
  // }

  if (this.$node.offset().left < 200) {
    this.floatRight();
  }
  
  // if (this.$node.offset().top < 100) {
  //   this.floatBottom();
  // }
};

FloatyDancer.prototype.measureDistance = function() {
  for (var i = 0; i < window.dancers.length; i++) {
    var currentDancer = dancer[i];
      var xDistance = Math.abs(this.$node.offset().left - currentDancer.offset().left);
      var yDistance = Math.abs(this.$node.offset().top - currentDancer.offset().top);
      var distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

  }
}





















