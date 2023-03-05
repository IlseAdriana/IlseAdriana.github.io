let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Diseño sitios web y desarrollo modelos de inteligencia artificial')
  .pauseFor(200)
  .deleteChars(10)
  .start();
