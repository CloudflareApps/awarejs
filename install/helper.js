window.EagerAwareHelper = function(options) {
  var element = Eager.createElement(options.location);

  var isPreview = window.Eager && window.Eager.installs && window.Eager.installs.preview && window.Eager.installs.preview.appId === 'TWjTnHVeNK0v';

  if (element && options.message && options.when) {
    if (window.reader[options.when] || isPreview) {
      var message = document.createElement('div');
      message.className = 'eager-aware-message';
      message.style.fontSize = options.style.fontSize;

      var content = document.createElement('div');
      content.className = 'eager-aware-message-content';
      content.style.color = options.style.color;
      content.style.backgroundColor = options.style.backgroundColor;
      content.innerHTML = options.message;

      message.appendChild(content);
      element.appendChild(message);
    }
  }
}
