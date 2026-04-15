const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const statusNode = document.getElementById("rankStatus");

if (statusNode) {
  const statusPool = [
    "[RANK: TOP 1%] [LEVEL: 12] [STREAK: 15 DAYS]",
    "[RANK: TOP 1%] [LEVEL: 12] [ROOMS PWNED: 148]",
    "[RANK: TOP 1%] [ACTIVE TRACKS: WEB/PRIVESC/FORENSICS]",
  ];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % statusPool.length;
    statusNode.textContent = statusPool[index];
  }, 3200);
}
