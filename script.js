document.addEventListener('DOMContentLoaded', (event) => {
    var form = document.getElementById('contact-form');
  
    // Removes existing 'submit' event listeners
    var cloneForm = form.cloneNode(true);
    form.parentNode.replaceChild(cloneForm, form);
  
    // Adds new 'submit' event listener
    cloneForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var url = this.action;
      var formData = new FormData(this);
  
      fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // 'cors' by default
      }).then(response => {
        console.log(response);
        alert('Form Submitted Successfully!');
        cloneForm.reset(); // Reset the form after successful submission
      }).catch(error => {
        console.error('Error:', error);
      });
    });
  });
  