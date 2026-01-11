
// 오늘 날짜 가져오기
const today = new Date().toISOString().slice(0, 10);

// 요소들
const dateEl = document.getElementById("date");
const inputEl = document.getElementById("logInput");
const saveBtn = document.getElementById("saveBtn");
const listEl = document.getElementById("logList");

// 날짜 표시
dateEl.textContent = today;

// 저장된 데이터 불러오기
const logs = JSON.parse(localStorage.getItem("oneLineLogs")) || {};

// 오늘 로그 있으면 미리 넣기
if (logs[today]) {
  inputEl.value = logs[today];
}

// 저장 버튼
saveBtn.addEventListener("click", () => {
  const text = inputEl.value.trim();
  if (text === "") {
    alert("nothing?");
    return;
  }

  logs[today] = text;
  localStorage.setItem("oneLineLogs", JSON.stringify(logs));
  renderList();
});

// 목록 보여주기
function renderList() {
  listEl.innerHTML = "";

  const dates = Object.keys(logs).sort().reverse();
  dates.forEach(date => {
    const li = document.createElement("li");
    li.textContent = `${date} : ${logs[date]}`;
    listEl.appendChild(li);
  });
}

renderList();
