window.onload = function() {
    document.querySelectorAll('div').forEach(function(div) {
      div.addEventListener('click', function(event) {
        event.stopPropagation();
        var color = event.target.style.backgroundColor;
        // var color = window.getComputedStyle(event.target).backgroundColor;
        alert('The background color of this div is: ' + color);
      });
    });
  };