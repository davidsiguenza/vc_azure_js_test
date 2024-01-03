document.getElementById('checkStatus').addEventListener('click', function() {
    fetch('/check-status')
      .then(response => response.json())
      .then(data => alert(data.message));
  });