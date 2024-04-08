document.addEventListener("DOMContentLoaded", () => {
  // Grab our Form
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Check if input field is not empty
    if (e.target.new_task.value.trim() !== '') {
      buildToDo(e.target.new_task.value);
      form.reset();
    } else {
      alert('Please enter a Task Before Submitting')
    }

  })
});

function buildToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x';
  p.textContent = `${todo} `;
  p.appendChild(btn);
  console.log(p);
  document.querySelector('#list').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove();
}