const textArea = document.getElementById("textArea");
const charCount = document.getElementById("charCount");
const progress = document.getElementById("progress");
const maxChars = 200;

textArea.addEventListener("input", () => {
  const len = textArea.value.length;
  charCount.textContent = `Characters: ${len}`;

  if (len < 50) {
    charCount.style.color = "#5151e5";
  } else if (len < 100) {
    charCount.style.color = "#ff9800";
  } else {
    charCount.style.color = "#e53935";
  }

  let percent = (len / maxChars) * 100;
  if (percent > 100) percent = 100;
  progress.style.width = `${percent}%`;
});