window.EagerAwareHelper = function(options){
  var element = Eager.createElement(options.location);

  if (element && window.reader[options.when]){
    var message = document.createElement('div');
    message.className = 'eager-aware-message';
    message.innerHTML = options.message;

    element.appendChild(message);
  }
}
