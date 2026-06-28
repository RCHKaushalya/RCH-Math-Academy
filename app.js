const promptText = document.querySelector("#activityPrompt")?.textContent?.trim() || "Choose the correct answer.";
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
      feedback.textContent = choice.getAttribute("aria-label")
        ? `Correct. ${choice.getAttribute("aria-label")}.`
        : "Correct.";
      feedback.className = "feedback success";
    } else {
      choice.classList.add("incorrect");
      feedback.textContent = "Try again. Look carefully and choose once more.";
      feedback.className = "feedback error";
    }
  });
});

if (playPrompt) {
  playPrompt.addEventListener("click", speakPrompt);
}
