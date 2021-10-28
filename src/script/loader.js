document.addEventListener("DOMContentLoaded", () => {
  let arrowScroll = document.getElementById("arrow");
  let arrowScrollHealth = document.getElementById("arrow_health");
  arrowScroll.addEventListener('click', () => {
      document.getElementById('info').scrollIntoView();
  });
  arrowScrollHealth.addEventListener('click', () => {
      document.getElementById('health').scrollIntoView();
  });
  //плавная прокрутка
  document.documentElement.setAttribute("style", "scroll-behavior:smooth;");
})