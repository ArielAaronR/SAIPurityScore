let checklist = document.querySelectorAll('li input');
const btn = document.querySelector('button');
const resultContainer = document.getElementById('result');
const test = document.getElementById('test');

let result = 0;
checklist.forEach((input) => {
  input.addEventListener('click', (e) => {
    const { checked } = e.target;
    checked ? result++ : result--;
    console.log(result);
  });
});

btn.addEventListener('click', () => {
  test.innerHTML = `<div id='finalScore'>
  <h1>Your Score is</h1>
    <h3>${checklist.length - result}</h3>
    <button onclick="location.reload()"> Retake Test</button>
    </div>`;
});
