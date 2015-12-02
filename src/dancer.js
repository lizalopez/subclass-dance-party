var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
};

Dancer.prototype.step = function() {
 
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var cont = this;
  setTimeout(function() {
    cont.step();
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
    this.top = top;
    this.left = left;
  };

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body

