function validateForm() {
    const fields = ['name', 'email', 'message'];
    let isValid = true;

    fields.forEach(function (id) {
      const input = document.getElementById(id);
      const errorMsg = input.nextElementSibling;

      if (input.value.trim() === '') {
        input.classList.add('error');
        errorMsg.classList.remove('d-none');
        isValid = false;
      } else {
        input.classList.remove('error');
        errorMsg.classList.add('d-none');
      }
    });

    if (isValid) {
      alert('Form has been submitted!');
      document.getElementById('contactForm').reset();
    }

    return false; // Prevent actual submission (you can set this to `return isValid` if posting to server)
  }