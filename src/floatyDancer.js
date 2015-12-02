var FloatyDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

FloatyDancer.prototype = Object.create(BlinkyDancer.prototype);
FloatyDancer.prototype.constructor = FloatyDancer;

FloatyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  //this.$node.css("left", )
  

  if (this.$node.css('left') >= ($(".topbar").width()+"px")) {
    //animate ('left, -+')
    this.$node.animate({"left": "-=50px"}, 1000, "linear");
  }
  if (this.$node.css('right') >= ($(".topbar").width()+"px")) {
    //animate ('left, -+')
    this.$node.animate({"left": "+=50px"}, 1000, "linear");
  }
  //if node.right >= body.width
    //animate ()
}; 