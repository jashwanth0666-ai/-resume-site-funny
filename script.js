// Vanilla JS + jQuery small fun effects

// Fun surprise messages
const funMessages = [
  "You are doing great! 🌟",
  "Wow, such a cool student! 😎",
  "Coffee + Code = Superpowers ☕💻",
  "Your future is very bright! 🔆",
  "This website is super cute, just like you planned! 🐣",
];

document.addEventListener("DOMContentLoaded", () => {
  const funBtn = document.getElementById("fun-btn");
  const funText = document.getElementById("fun-text");

  if (funBtn && funText) {
    funBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * funMessages.length);
      funText.textContent = funMessages[randomIndex];
    });
  }
});

// Small jQuery effect: when user hovers on cards, they "pop"
// $(document).ready(function () {
//   $(".card").hover(
//     function () {
//       $(this).stop().animate({ marginTop: "-4px" }, 100);
//     },
//     function () {
//       $(this).stop().animate({ marginTop: "0px" }, 100);
//     }
//   );
// });
