var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    container: 'body',
    trigger: 'hover'
  })
})

new TypeIt("#element", {
    strings: "Hello, world!",
    speed: 125,
    waitUntilVisible: true
  }).go();
