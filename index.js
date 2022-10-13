// getRuleWithSelector;
const questions = document.querySelectorAll(".questions");
const answer = document.querySelectorAll(".question-answer");
const icon_up = document.querySelectorAll(".icon-up");
const icon_down = document.querySelectorAll(".icon-down");

let temp;
for (let i = 0; i < questions.length; i++) {
  questions[i].onclick = function () {
    if (temp) {
      answer[i].style.display = "block";
      icon_down[i].style.display = "none";
      icon_up[i].style.display = "block";
      temp = false;
    } else {
      answer[i].style.display = "none";
      icon_down[i].style.display = "block";
      icon_up[i].style.display = "none";
      temp = true;
    }
  };
}
