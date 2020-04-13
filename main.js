
const action_btn = document.querySelector('#action');
const placement = document.querySelector('.placement');


action_btn.addEventListener('click', (e) => {
  placement.innerText = 'Here we will collect powerful quotes and statements';
  // console.log('clicked', e);
});
