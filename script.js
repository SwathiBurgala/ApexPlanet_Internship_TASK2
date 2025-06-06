function addPlace() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const btn = document.createElement('button');
  btn.textContent = 'Delete';
  btn.className = 'btn red';
  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById('wishList').appendChild(li);

  input.value = '';
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const email = document.getElementById('email').value.trim();

  const contactRegex = /^\d{10}$/;

  if (!contactRegex.test(contact)) {
    alert('Please enter a valid 10-digit contact number using only numbers.');
    return;
  }

  alert('Form submitted successfully!!');
  this.reset();
});
