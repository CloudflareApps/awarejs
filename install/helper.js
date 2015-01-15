window.EagerAwareHelper = function(options){
  var element = Eager.createElement(options.location);

  if (element && window.reader[options.when]){
    element.innerHTML = options.message;
  }
}
