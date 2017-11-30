const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
const userArray = []

window.addEventListener('keyup', (e) => {
  userArray.push(e.key);
  userArray.splice(-konamiCode.length - 1, userArray.length - konamiCode.length);
  if (userArray.toString() === konamiCode.toString()) {
    console.log('konami code entered');
  }
});
