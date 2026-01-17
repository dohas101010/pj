const dateInput = document.getElementById("dateInput");
const result = document.getElementById("result");
const btn = document.getElementById("calcBtn");

// 저장된 날짜 불러오기
const savedDate = localStorage.getItem("deadline");
if (savedDate) {
  dateInput.value = savedDate;
  calculate(savedDate);
}

btn.addEventListener("click", () => {
  const selected = dateInput.value;
  if (!selected) {
    result.textContent = "날짜 골라 😠";
    return;
  }
  localStorage.setItem("deadline", selected);
  calculate(selected);
});

function calculate(dateStr) {
  const today = new Date();
  const deadline = new Date(dateStr);

  today.setHours(0,0,0,0);
  deadline.setHours(0,0,0,0);

  const diff = Math.ceil(
    (deadline - today) / (1000 * 60 * 60 * 24)
  );

  if (diff > 0) {
    result.textContent = `D-${diff}`;
  } else if (diff === 0) {
    result.textContent = "D-DAY";
  } else {
    result.textContent = `D+${Math.abs(diff)}`;
  }
}
