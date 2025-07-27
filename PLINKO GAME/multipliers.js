// Multiplier values and corresponding colors
const multipliers = [16, 9, 2, 1.4,1.2, 1.1, 1, 0.5, 1, 1.1, 1.2, 1.4, 2, 9, 16];
const colors = ['#e91e63', '#ff5722', '#ff9800', '#ffc107', 
  '#cddc39','#4caf50',  '#8bc34a','#ffffff', '#8bc34a',
  '#4caf50', '#cddc39', '#ffc107', '#ff9800', '#ff5722', '#e91e63', '#e91e63'];
const sinkWidth = 36;
const totalWidth = multipliers.length * sinkWidth;
const startX = WIDTH / 2 - totalWidth / 2 + sinkWidth / 2;

for (let i = 0; i < multipliers.length; i++) {
  // Only add valid sinks
  if (multipliers[i] !== undefined && colors[i] !== undefined) {
    const x = startX + i * sinkWidth;
    const y = HEIGHT - 240;

    sinks.push({
      x,
      y,
      width: sinkWidth,
      height: sinkWidth,
      color: colors[i],
      multiplier: multipliers[i],
      active: false,
      activatedAt: 0
    });
  }
}

