window.EagerAwareHelper = function(options){
  var element = Eager.createElement(options.location);

  var isPreview = window.Eager && window.Eager.installs && window.Eager.installs.preview && window.Eager.installs.preview.appId === 'TWjTnHVeNK0v';

  if (element && options.message && options.when){
    if (window.reader[options.when] || isPreview){
      var message = document.createElement('div');
      message.className = 'eager-aware-message';
      message.innerHTML = options.message;

      element.appendChild(message);
    }
  }
}
