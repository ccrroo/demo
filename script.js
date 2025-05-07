function animateCongestion(barId, percentId, target) {
  const bar = document.getElementById(barId);
  const percent = document.getElementById(percentId);
  let current = 0;
  const duration = 1500;
  const steps = 30;
  const stepTime = duration / steps;
  const increment = target / steps;

  bar.style.width = target + '%';

  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(counter);
    }
    percent.textContent = Math.round(current) + '%';
  }, stepTime);
}

window.onload = () => {
  const randomPercent = Math.floor(Math.random() * 101);
  animateCongestion('bar1', 'percent1', randomPercent);
};
