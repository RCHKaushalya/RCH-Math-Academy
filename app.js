const promptText = "Tap the group with three circles.";
const feedback = document.querySelector("#activityFeedback");
const choices = document.querySelectorAll(".choice-card");
const playPrompt = document.querySelector("#playPrompt");

function speakPrompt() {
  if (!("speechSynthesis" in window)) {
    feedback.textContent = promptText;
    feedback.className = "feedback";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(promptText);
  utterance.rate = 0.82;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    choices.forEach((item) => {
      item.classList.remove("selected", "correct", "incorrect");
    });

    choice.classList.add("selected");

    if (choice.dataset.correct === "true") {
      choice.classList.add("correct");
      feedback.textContent = "Correct. Three circles.";
      feedback.className = "feedback success";
    } else {
      choice.classList.add("incorrect");
      feedback.textContent = "Try again. Count each circle slowly.";
      feedback.className = "feedback error";
    }
  });
});

playPrompt.addEventListener("click", speakPrompt);

