// JavaScript Documentfunction toggleText(event) {
  event.preventDefault();
  const link = event.target;
  const container = link.closest("p");
  const extraText = container.querySelector(".extra-text");

  if (extraText.style.display === "none" || extraText.style.display === "") {
    extraText.style.display = "inline";
    link.textContent = " menos";
  } else {
    extraText.style.display = "none";
    link.textContent = "más";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleLinks = document.querySelectorAll(".toggle-link");
  toggleLinks.forEach(link => {
    link.addEventListener("click", toggleText);
  });
});