document.getElementById('myTextField').addEventListener('input', function() {
  this.removeAttribute('placeholder');
});

function checkAndRedirect() {
  var expectedValue = '173527250';

  while (true) {
    var inputValue = document.getElementById('myTextField').value.trim();

    if (inputValue === expectedValue) {
      window.location.href = 'page2.html';
      return;
    } else {
      alert('Please enter the correct mobile number!');
      return;
    }
  }
}

