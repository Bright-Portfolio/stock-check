const plusBtn = document.querySelector("#plusbutton");
let count = 0;
const display = document.querySelector("#display-num");
const minusBtn = document.querySelector("#minusbutton");
const resetBtn = document.querySelector("#reset");
const titleName = document.querySelector("#titlename");


plusBtn.addEventListener("click", function () {
  count += 1;
  display.innerHTML = count;
});

minusBtn.addEventListener("click", function () {
  if (count != 0) {
    count += -1;
    display.innerHTML = count;
  }
});

resetBtn.addEventListener("click", function () {
  count = 0;
  display.innerHTML = count;
  clearTitle();
});
//finish counting section

titleName.addEventListener("blur", () => {
  if (titleName.value) {
    titleName.classList.add("changed");
  } else {
    clearTitle();
  }
});

function clearTitle() {
  titleName.value = "";
  titleName.classList.remove("changed");
}
//History section
const recordBtn = document.querySelector("#record-btn");
const historyDis = document.querySelector("#history-display");

recordBtn.addEventListener("click", () => {
  const title = document.createElement("span");
  title.innerHTML = titleName.value + ":" + " ";
  historyDis.append(title);
  const counting = document.createElement("span");
  counting.innerHTML = count;
  historyDis.append(counting);
  const newLine = document.createElement("br");
  historyDis.append(newLine);
});
//history section end
//navbar start
const navBarBtn = document.querySelector("#nav-btn");
const historyContainer = document.querySelector('.navbar-container')
console.log(historyContainer);

navBarBtn.addEventListener('click', () => {
    historyContainer.classList.toggle('showed')
})