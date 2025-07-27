function drawSinks() {
  const now = Date.now();
  
  sinks.forEach((sink) => {
     // Skip sinks without a color or multiplier
    if (!sink.color || typeof sink.multiplier !== 'number') return;

    const isActive = sink.active && now - sink.activatedAt < 500; // 500ms glow
    
    // Highlight if active
    if (isActive) {
      ctx.shadowColor = '#fff';
      ctx.shadowBlur = 20;
    } else {
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
    }

    // Draw sink rectangle centered
    ctx.fillStyle = sink.color;
    ctx.fillRect(
      sink.x - sink.width / 2,
      sink.y - sink.height / 2,
      sink.width,
      sink.height
    );

     // Draw multiplier text only if defined
    if (typeof sink.multiplier === 'number') {
      ctx.fillStyle = 'black';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(sink.multiplier + 'x', sink.x, sink.y);
    }
  });

  // Reset shadow
  ctx.shadowBlur = 0;
}





  
  