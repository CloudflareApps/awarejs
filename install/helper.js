(function(){
  var options = INSTALL_OPTIONS;

  var element = Eager.createElement(options.location);

  if (reader[options.when]){
    element.innerHTML = options.message;
  }
})()
