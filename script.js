// script.js
document.getElementById('signupForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = {
    name: this[0].value,
    email: this[1].value,
    department: this[2].value,
    interests: this[3].value,
    about: this[4].value
  };

  const res = await fetch('http://localhost:5000/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert('Signed up as: ' + result.name);
  this.reset();
});
