var ChameleonDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', "chamdancer");
  this.$node.append('<img class="cham" src="dancers/dancing-banana.gif" width="36" height="36">');
  this.$node.append('<div class="translate" >translate</div>');
  this.$node.append('<div class="rotate" >rotate</div>');
  this.$node.draggable()
  this.$node.resizable();
  var node = this.$node;
  this.$node.on("click", '.translate', function(event) {
    node.css('transform', 'translate(100px)');
  });
  this.$node.on("click", '.rotate', function(event) {
    node.css('transform', 'rotate(30deg)');
    //node.animate({left: "+=500"}, 2000);
  });
  // node.animate({left: "+=500"}, 2000);
  // node.animate({left: "-=300"}, 1000);
  // //this.$node.text('<button>click me</button>');
  // this.$node.append('<button class = "plus">+</button>');
  // this.$node.append('<button class = "minus">-</button>');
  // var node = this.$node;
  // this.$node.find('.plus').on("click", function(event) {
  //   node.css('border-width', "+=3");
  // });
  // this.$node.find('.minus').on("click", function(event) {
  //   //alert('yess!');
  //   node.css('border-width', "-=2");
  // });
};
ChameleonDancer.prototype = Object.create(Dancer.prototype);
ChameleonDancer.prototype.constructor = ChameleonDancer;

ChameleonDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.slideToggle("slow");
}; 

  