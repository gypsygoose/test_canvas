(function() {

  function getAverageColor(imageData) {
    let color = {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0
    };
    for (let i = 0; i < imageData.height; i++) {
      for (let j = 0; j < imageData.width; j++) {
        let offset = (i * imageData.width * 4) + j * 4;
        color.red += imageData.data[offset];
        color.green += imageData.data[offset + 1];
        color.blue += imageData.data[offset + 2];
        color.alpha += imageData.data[offset + 3];
      }
    }

    color.red = Math.ceil(color.red / (imageData.height * imageData.width));
    color.green = Math.ceil(color.green / (imageData.height * imageData.width));
    color.blue = Math.ceil(color.blue / (imageData.height * imageData.width));
    color.alpha = Math.ceil(color.alpha / (imageData.height * imageData.width));

    return color;
  }

  // Canvas Image
  var canvasImage = document.getElementById('canvas-image-id');
  var ctxImage = canvasImage.getContext('2d');

  var canvas = document.getElementById('canvas-id');
  var ctx = canvas.getContext('2d');

  var pointBlockWidth = 15;
  var pointWidth = Math.ceil(pointBlockWidth / 2);

  var mainImage = new Image();
  mainImage.src = './images/insta-logo.png';

  mainImage.onload = function() {
    ctxImage.fillStyle = 'rgba(255, 255, 255, 1)';
    ctxImage.fillRect(0, 0, 500, 500);
    ctxImage.save();
    ctxImage.scale(0.8, 0.8);
    ctxImage.drawImage(mainImage, -85, 5);
    ctxImage.restore();
    let pointImageData = ctxImage.getImageData(100, 130, pointBlockWidth, pointBlockWidth);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';

    for (let i = 0; i < Math.ceil(canvas.height / pointBlockWidth); i++) {
      for (let j = 0; j < Math.ceil(canvas.width / pointBlockWidth); j++) {
        ctx.save();
        ctx.beginPath();
        
        let pointImageData = ctxImage.getImageData(j * pointBlockWidth, i * pointBlockWidth, pointBlockWidth, pointBlockWidth);
        let pointColor = getAverageColor(pointImageData);
        // ctx.fillStyle = 'rgba(' + pointColor.red + ', ' + pointColor.green + ', ' + pointColor.blue + ', ' + (pointColor.alpha / 255) + ')';
        let pointColorAverage = (pointColor.red + pointColor.green + pointColor.blue) / 3;
        let scaleRatio = (255 - pointColorAverage) / 255;

        // Point radius 
        // Min point radius = 1
        let currentPointRadius = ((pointWidth / 2) - 0.5) * scaleRatio + 0.5;
        // Min point radius = 0
        // let currentPointRadius = ((pointWidth / 2)) * scaleRatio;
  
        ctx.moveTo((j * pointBlockWidth + pointWidth),(i * pointBlockWidth + pointWidth));
        ctx.arc((j * pointBlockWidth + pointWidth),(i * pointBlockWidth + pointWidth), currentPointRadius, 0, Math.PI*2, true);
        ctx.fill();
        ctx.restore();
      }
    }
  };
})();
