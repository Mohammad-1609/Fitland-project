const input = document.getElementById("search-brand");
const icon = document.querySelector(".fa-magnifying-glass");

function toggleIcon() {
  const hasValue = input.value.trim().length > 0;
  icon.style.opacity = hasValue ? "0" : ".6";
  icon.style.visibility = hasValue ? "hidden" : "visible";
}

input.addEventListener("input", toggleIcon);
// برای حالت‌های autofill یا مقدار اولیه:
window.addEventListener("DOMContentLoaded", toggleIcon);
