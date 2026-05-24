// This file is intentionally small.
// Use it for scene-specific setup without adding a build step.

window.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector("a-scene");
  const note = document.getElementById("note");
  const noteTitle = document.getElementById("noteTitle");
  const noteMessage = document.getElementById("noteMessage");
  const scoreText = document.getElementById("scoreText");
  const sceneStatusText = document.getElementById("sceneStatusText");
  const resetButton = document.getElementById("resetButton");
  const tokens = Array.from(document.querySelectorAll("[data-token]"));

  if (!scene || !note) {
    return;
  }

  let collected = 0;

  function setNote(title, message) {
    if (noteTitle) {
      noteTitle.textContent = title;
    }

    if (noteMessage) {
      noteMessage.textContent = message;
    }
  }

  function setScore(value) {
    collected = value;
    const label = `Story sparks: ${collected} / ${tokens.length}`;

    if (scoreText) {
      scoreText.textContent = label;
    }

    if (sceneStatusText) {
      sceneStatusText.setAttribute("value", label);
    }
  }

  function collectToken(token) {
    if (token.dataset.collected === "true") {
      return;
    }

    token.dataset.collected = "true";
    token.setAttribute("visible", "false");
    setScore(collected + 1);

    if (collected === tokens.length) {
      setNote("Worms VR Stage", "All story sparks collected. Press Reset sparks to play again.");
    }
  }

  function resetTokens() {
    tokens.forEach(function (token) {
      token.dataset.collected = "false";
      token.setAttribute("visible", "true");
      token.setAttribute("scale", "1 1 1");
    });

    setNote("Worms VR Stage", "Open this page in Meta Quest Browser and press Enter VR.");
    setScore(0);
  }

  tokens.forEach(function (token) {
    token.dataset.collected = "false";

    token.addEventListener("click", function () {
      collectToken(token);
    });

    token.addEventListener("mouseenter", function () {
      if (token.dataset.collected !== "true") {
        token.setAttribute("scale", "1.2 1.2 1.2");
      }
    });

    token.addEventListener("mouseleave", function () {
      token.setAttribute("scale", "1 1 1");
    });
  });

  if (resetButton) {
    resetButton.addEventListener("click", resetTokens);
  }

  scene.addEventListener("enter-vr", function () {
    setNote("VR session active", "Look around the stage and collect the glowing story sparks.");
  });

  scene.addEventListener("exit-vr", function () {
    if (collected === tokens.length) {
      setNote("Worms VR Stage", "All story sparks collected. Press Reset sparks to play again.");
      return;
    }

    setNote("Worms VR Stage", "Open this page in Meta Quest Browser and press Enter VR.");
  });

  setScore(0);
});
