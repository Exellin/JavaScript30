const timeNodes = Array.from(document.querySelector('.videos').children);

const lengthInSeconds = timeNodes.reduce((length, node) => {
  const [minutes, seconds] = node.dataset.time.split(':').map(parseFloat);
  return length += minutes*60 + seconds;
}, 0);

const totalLength = `${(lengthInSeconds - lengthInSeconds % 3600)/3600}h: ${(lengthInSeconds % 3600 - lengthInSeconds % 60)/60}m: ${lengthInSeconds % 60}s}`
console.log(totalLength);
