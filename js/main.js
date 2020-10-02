/* TypeWriter Section */
var demo = document.getElementById('demo');
var typewriter = new Typewriter(demo, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(250)
  .typeString("Please click")
  .pauseFor(500)
  .deleteChars(5)
  .typeString("visit")
  .pauseFor(250)
  .deleteChars(12)
  .typeString("Just drop me a message :]")
  .pauseFor(19000)
  .start();
  