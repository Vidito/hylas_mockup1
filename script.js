function submitAnswer() {
    confirm("Are you sure you want to submit the answer?");
    // Get the answer from the textarea
    var answer = document.getElementById("answer").value;
  
    var infoElement = document.getElementById("info");
    infoElement.style.display = "none";
  
    // Display the score with typing effect
    var scoreElement = document.getElementById("score");
    scoreElement.innerHTML = "";
  
    var score = "Prtially correct";
    var scoreIndex = 0;
    var scoreTypingEffect = setInterval(function () {
      scoreElement.innerHTML += score[scoreIndex];
      scoreIndex++;
      if (scoreIndex === score.length) {
        clearInterval(scoreTypingEffect);
  
        // Display the feedback with typing effect after showing the score
        var feedbackElement = document.getElementById("feedback");
        feedbackElement.innerHTML = "";
  
        var feedback =
          "Well done for noting that prices will likely increase due to the higher cost of production. However, don't forget to consider how the new equipment would affect the company's level of production. Typically, with increased production costs, a company might produce less. Keep up the great work!";
  
        var feedbackIndex = 0;
        var feedbackTypingEffect = setInterval(function () {
          feedbackElement.innerHTML += feedback[feedbackIndex];
          feedbackIndex++;
          if (feedbackIndex === feedback.length) {
            clearInterval(feedbackTypingEffect);
          }
        }, 50);
      }
    }, 50);
  }
  
  const menubtn = document.getElementById("menu-button");
  const menu = document.getElementById("menu");
  menubtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
  const drpbtn = document.getElementById("drp-btn");
  const drpList = document.getElementById("drp-list");
  drpbtn.addEventListener("click", () => {
    drpList.classList.toggle("hidden");
  });
  