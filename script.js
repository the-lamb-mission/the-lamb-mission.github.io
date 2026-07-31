const siteViewport = document.querySelector(".site-viewport");
const characterSelect = document.querySelector(".character-select");
const rpgHud = document.querySelector(".rpg-hud");
const healthMeter = document.querySelector(".hud-meter__track--health");
const healthFill = healthMeter.querySelector("i");
const healthValue = document.querySelector(".hud-meter__value");

document.getElementById("footer-year").textContent = new Date().getFullYear();

function updateRpgHud() {
  const characterSelectEnd = characterSelect.offsetTop + characterSelect.offsetHeight;
  const hasPassedCharacterSelect = siteViewport.scrollTop + 96 >= characterSelectEnd;
  const scrollableHeight = siteViewport.scrollHeight - siteViewport.clientHeight;
  const scrollProgress = scrollableHeight ? siteViewport.scrollTop / scrollableHeight : 1;
  const health = Math.round(Math.min(1, Math.max(0, scrollProgress)) * 100);

  rpgHud.classList.toggle("is-active", hasPassedCharacterSelect);
  healthFill.style.width = `${health}%`;
  healthMeter.setAttribute("aria-valuenow", health);
  healthValue.textContent = health;
}

siteViewport.addEventListener("scroll", updateRpgHud, { passive: true });
updateRpgHud();
