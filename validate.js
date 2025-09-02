document.getElementById('form').addEventListener('submit', e => {
  const form = e.target;
  const dob = new Date(form.dob.value);
  if (dob >= new Date()) {
    alert('Date of Birth must be in the past.');
    e.preventDefault();
  }
});
