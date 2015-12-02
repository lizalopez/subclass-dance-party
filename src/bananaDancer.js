var BananaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id', "bananadancer");
  this.$node.append('<img class="bana" src="https://media.giphy.com/media/asI1wTiOaMjII/giphy.gif" width="100" height="100">');
  // this.$node.append('<div class="translate" >translate</div>');
  this.$node.draggable()
  //this.$node.resizable();
  // var node = this.$node;
  // this.$node.on("click", '.translate', function(event) {
  //   node.css('transform', 'translate(100px)');
  // });
  // this.$node.on("click", '.rotate', function(event) {
  //   node.css('transform', 'rotate(30deg)');
  //   //node.animate({left: "+=500"}, 2000);
  // });
  //this.$node.animate({left: "+=500"}, 2000);
  //this.$node.animate({left: "-=500"}, 1000);
  //this.$node.text('<button>click me</button>');
  this.$node.append('<button class = "plus">+</button>');
  this.$node.append('<button class = "minus">-</button>');
  //var node = this.$node;
  this.$node.on("click", ".plus", function(event) {
    $('img').css({'width': "+=20", 'height': "+=20"});
  });
  this.$node.find('.minus').on("click", function(event) {
    //alert('yess!');
    $('img').css({'width': "-=20", 'height': "-=20"});
  });
};
BananaDancer.prototype = Object.create(Dancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;

BananaDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  //this.translate();
  //this.rotate();
  //this.$node.css({'transform':'rotate(+30deg)'});
}; 

BananaDancer.prototype.translate = function() {
  var node = this.$node;
  this.$node.on("click", '.translate', function(event) {
    node.css({'transform':'translate(100px)'});
  });
};


  