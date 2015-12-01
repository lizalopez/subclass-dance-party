var ChameleonDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("chamdancer");
  //this.$node.text('<button>click me</button>');
  this.$node.append('<button class = "plus">+</button>');
  this.$node.append('<button class = "minus">-</button>');
  var node = this.$node;
  this.$node.find('.plus').on("click", function(event) {
    node.css('border-width', "+=3");
  });
  this.$node.find('.minus').on("click", function(event) {
    //alert('yess!');
    node.css('border-width', "-=2");
  });
  //var dancer = this;
  this.$node.on("mousemove", function(event) {
    var top = eval(node.css('top'));
    var left = eval(node.css('left'));
    node.css({"bottom":2*event.pageY-top, "right":2*event.pageX-left});//.text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
  });
 
  // this.$node.on("mouseup", function(event) {
  //   var x = event.pageX;
  //   var y = event.pageY;
  //   node.text( "pageX: " + x + ", pageY: " + y );
  // });

};
ChameleonDancer.prototype = Object.create(Dancer.prototype);
ChameleonDancer.prototype.constructor = ChameleonDancer;

// ChameleonDancer.prototype.step = function() {
//   BlinkyDancer.prototype.step.call(this);
//   this.$node.;
// }
//call on dancer BlinkyDancer
//this.$node(more action)
//this.$node.$('div')
  