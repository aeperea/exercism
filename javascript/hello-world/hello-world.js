var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
  if (typeof input === 'undefined' || input == '') {input = "World";}
  return "Hello, " + input + "!";
};

module.exports = HelloWorld;
