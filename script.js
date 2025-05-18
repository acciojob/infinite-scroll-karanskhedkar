//your code here!

let num = 10;
const scrolling = (e) => {
  const list = document.getElementById("infi-list");
  const diff = Math.floor((list.scrollTop + list.clientHeight - list.scrollHeight)**2);
  console.log(diff)
  if (diff<=4) {
    const newEle1 = document.createElement("li");
    const newEle2 = document.createElement("li");
    newEle1.textContent = ++num;
    newEle2.textContent = ++num;
    list.appendChild(newEle1);
    list.appendChild(newEle2);
  }
};
