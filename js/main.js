var radialObj = radialIndicator('#clock', {
  radius: 200,
  barWidth: 40,
  barColor: '#ec2F4B' ,
  minValue: 0,
  maxValue: 60,
  fontWeight: 'normal' ,
  roundCorner: true,
  format: function (value) {
    var date = new Date();
    return date.getHours() + ':' + date.getMinutes();
  }
});

setInterval(function () {
  radialObj.value(new Date().getSeconds() + 1);
}, 1000);
