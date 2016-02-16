// http://www.swatch.com/en_us/internet-time
// https://en.wikipedia.org/wiki/Swatch_Internet_Time
// http://time.interordi.com/itime.php
// http://www.timeanddate.com/time/internettime.html

Number.prototype.toFloorFixed = function (accuracy) {
  var k = Math.pow(10, accuracy)
  return (Math.floor(this * k) / k).toString()
}

// original work by Paul Philippov (https://themactep.com/beats/js)
Date.prototype.toInternetTime = function (accuracy) {
  const BeatInSeconds = 86.4

  const utcHours = this.getUTCHours()
  const hours = utcHours !== 23 ? utcHours + 1 : 0

  const BielMeanTime = this.getUTCSeconds() + this.getUTCMinutes() * 60 + hours * 3600
  const beats = Math.abs(BielMeanTime / BeatInSeconds).toFloorFixed(parseInt(accuracy))

  const length = accuracy > 0 ? accuracy + 1 : 0

  return '@'.concat('000'.concat(beats).slice(beats.length - length))
}