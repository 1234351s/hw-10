// Завдання 1
function startInterval() {
  let count = 0;
  const output = document.getElementById("intervalOutput");
  output.innerHTML = "";
  const intervalId = setInterval(() => {
    count++;
    const msg = document.createElement("p");
    msg.textContent = `Повідомлення №${count}`;
    output.appendChild(msg);
    if (count === 5) {
      clearInterval(intervalId);
      const done = document.createElement("p");
      done.textContent = "Інтервал завершено.";
      output.appendChild(done);
    }
  }, 1000);
}

// Завдання 2
function startAnimation() {
  let pos = 50;
  const box = document.getElementById("box1");
  const animation = setInterval(() => {
    pos += 5;
    box.style.left = pos + "px";
    box.style.width = (50 + pos / 5) + "px";
    if (pos > 300) clearInterval(animation);
  }, 100);
}

// Завдання 3
function startGame() {
  let score = 0;
  const target = document.getElementById("target");
  const scoreDisplay = document.getElementById("score");

  scoreDisplay.textContent = "0";
  target.style.display = "block";

  target.onclick = () => {
    score++;
    scoreDisplay.textContent = score;
  };

  const moveTarget = setInterval(() => {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    target.style.left = x + "px";
    target.style.top = y + "px";
  }, 1000);

  setTimeout(() => {
    clearInterval(moveTarget);
    target.style.display = "none";
    alert(`Гра завершена! Ваш рахунок: ${score}`);
  }, 10000);
}

// Завдання 4
function startTimer() {
  const seconds = parseInt(document.getElementById("timeInput").value);
  const msg = document.getElementById("message");
  msg.textContent = `Очікування ${seconds} секунд...`;
  setTimeout(() => {
    msg.textContent = "Час вийшов!";
  }, seconds * 1000);
}
