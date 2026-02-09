/* ===== DARK MODE TOGGLE ===== */
const toggleBtn = document.getElementById("darkToggle");

toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light");
});


/* ===== SCROLL FADE ANIMATION ===== */
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(el => observer.observe(el));


/* ===== SIMPLE CHART (Canvas) ===== */
const ctx = document.getElementById("energyChart");

if (ctx) {
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Solar", "Wind", "Hydro", "Biomass", "Geothermal"],
      datasets: [{
        data: [30, 25, 20, 15, 10],
      }]
    }
  });
}
