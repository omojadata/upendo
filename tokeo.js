

const  finalScore = document.querySelector(".final-score").innerHTML= window.localStorage.getItem("head"),
  totalScore = document.querySelector(".total-score").innerHTML= window.localStorage.getItem("comment");
console.log(finalScore)
console.log(totalScore)


const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
  window.location.reload();
  window.location.replace("https://upendo.netlify.app");
});

// const playAdudio = (src) => {
//   const audio = new Audio(src);
//   audio.play();
// };