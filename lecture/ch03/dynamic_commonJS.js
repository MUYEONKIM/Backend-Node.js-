const a = false;

if (a) {
  require('./ESmodule.js')
} else {
  console.log("동적임포트")
}