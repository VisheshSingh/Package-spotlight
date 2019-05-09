const moment = require("moment");

let val = moment().format("YYYY-MM-DD");
val = moment().format("MMMM Do YYYY");
val = moment().format("MMMM Do YYYY, h:mm:ss a");

val = moment("20111031", "YYYYMMDD").fromNow();
val = moment("20120620", "YYYYMMDD").fromNow();
val = moment()
  .startOf("day")
  .fromNow();
val = moment()
  .endOf("day")
  .fromNow();
val = moment()
  .startOf("hour")
  .fromNow();
console.log(val);
