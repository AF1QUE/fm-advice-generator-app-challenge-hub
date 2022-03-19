const adviceTitle = document.querySelector(".advice__card__title");
const adviceNum = document.querySelector(".advice__card__num");
const btn = document.querySelector(".advice__card__btn");

function generateAdvice() {
  const data = axios.get("https://api.adviceslip.com/advice");
  data.then((res) => {
    adviceTitle.innerHTML = res.data.slip.advice;
    adviceNum.innerHTML = `Advice #${res.data.slip.id}`;
  });
}

generateAdvice();

btn.addEventListener("click", () => {
  btn.style.pointerEvents = "none";
  setTimeout(() => {
    generateAdvice();
    btn.style.pointerEvents = "auto";
  }, 2000);
});
