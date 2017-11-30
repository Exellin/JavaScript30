const checkboxes = Array.from(document.querySelectorAll('input'));
let lastChanged;

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleChange));

function handleChange(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChanged) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChanged = this;
}