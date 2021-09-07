window.addEventListener('load', () => {
  const canvas: any = document.querySelector('#canvas');

  // context
  const ctx = canvas.getContext('2d');

  // Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // make a black square (x, y, width, height)
  ctx.fillRect(100, 50, 200, 200);

  // must above strokeRect()
  ctx.strokeStyle = 'red';
  // make a square only with black line (x, y, width, height)
  ctx.strokeRect(500, 50, 200, 200);

  // Draw lines

  // ????
  ctx.beginPath();

  // Begin coordinate system
  ctx.moveTo(100, 500);
  // End coordinate system
  ctx.lineTo(200, 500);
  ctx.lineTo(200, 600);
  ctx.closePath();
  // draw a line
  ctx.stroke();
  ctx.beginPath();

  let painting = false;

  function startPosition(e: any) {
    painting = true;
    
    // add dots
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e: any) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    
    ctx.lineTo(e.clientX, e.clientY);
    // draw
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  // listen click mouse
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishedPosition);
  canvas.addEventListener('mousemove', draw);

});

