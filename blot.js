const width = 125;
const height = 125;

setDocDimensions(width, height);

const finalLines = [];

function generateSun() {
  const sunRadius = bt.randIntInRange(15, 28);

  const sun = [];

  const disections = 100;
  const circle = [];
  for (let i = 0; i <= disections; i++) {
    const angle = (2 * Math.PI / disections) * i;
    const x = sunRadius * Math.cos(angle);
    const y = sunRadius * Math.sin(angle);
    circle.push([x, y]);
  }
  sun.push(circle);

  return sun
}

// sun generation
let sun = generateSun()

bt.join(finalLines, sun)
bt.translate(sun, [width/2, height/2+12], bt.bounds(sun).cc);

// draw it
drawLines(sun, {fill: 'orange'});