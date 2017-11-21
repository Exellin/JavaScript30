window.setInterval(setHands, 1000);

function setHands() {
  const currentDate = new Date();
  
  const secondHand = document.querySelector('.second-hand');
  const secondDegrees = 90 + currentDate.getSeconds()*6
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minuteHand = document.querySelector('.min-hand')
  const minuteDegrees = 90 + currentDate.getMinutes()*6
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hourHand = document.querySelector('.hour-hand');
  const hourDegrees = 90 + currentDate.getHours()*30
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
